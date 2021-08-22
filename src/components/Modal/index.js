import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import {
	addTasks,
	deleteTaskCurrent,
	editTask,
	toggleModal,
} from "../../redux/tasks/tasksActions";
import "./index.scss";

function Modal(props) {
	const dispatch = useDispatch();
	const taskCurrent = useSelector((state) => state.tasks.taskCurrent);

	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [error, setError] = useState({});

	const onTitleChange = (e) => {
		setTitle(e.target.value);
		setError({ ...error, title: "" });
	};

	const onDescriptionChange = (e) => {
		setDescription(e.target.value);
		setError({ ...error, description: "" });
	};

	const onCancel = (e) => {
		e.preventDefault();
		dispatch(toggleModal());
	};

	const validate = () => {
		const msgErr = {};
		let titleLength = title.trim().length;
		let descLength = description.trim().length;

		if (titleLength === 0) {
			msgErr.title = "Title is required.";
		} else if (titleLength < 4) {
			msgErr.title = "Please fill at least 4 character";
		} else if (titleLength > 20) {
			msgErr.title = "Please fill at most 20 character";
		}

		if (descLength === 0) {
			msgErr.description = "Description is required.";
		} else if (descLength < 8) {
			msgErr.description = "Please fill at least 8 character";
		}
		setError(msgErr);

		if (Object.keys(msgErr).length > 0) return false;

		return true;
	};

	const onSubmit = (e) => {
		e.preventDefault();
		let isValid = validate();

		if (isValid) {
			if (taskCurrent) {
				const taskUpdate = {
					title,
					description,
				};

				dispatch(editTask(taskCurrent.id, taskUpdate));
				dispatch(toggleModal());
			} else {
				const newTask = {
					id: uuidv4(),
					title,
					description,
					date: new Date().toLocaleDateString(),
					completed: false,
				};

				dispatch(addTasks(newTask));
				dispatch(toggleModal());
			}
		}
	};

	useEffect(() => {
		document.body.style.overflow = "hidden";

		return () => {
			document.body.style.overflow = "unset";
		};
	}, []);

	useEffect(() => {
		if (taskCurrent) {
			setTitle(taskCurrent.title);
			setDescription(taskCurrent.description);
		}

		return () => {
			dispatch(deleteTaskCurrent());
		};
	}, [taskCurrent, dispatch]);

	return (
		<div className="modal-wrap">
			<div className="modal-overlay" onClick={onCancel}></div>
			<div className="modal-add">
				<header className="modal-add__header">
					<h5>{taskCurrent ? "Edit Task" : "Add Task"}</h5>
				</header>

				<form className="modal-add__form" onSubmit={onSubmit}>
					<div className="form-group">
						<label htmlFor="title" className="mt-3 mb-2">
							Title
						</label>

						<input
							type="text"
							className={`form-control ${error.title && "border-danger"}`}
							name="title"
							id="title"
							placeholder="Enter title here..."
							onChange={onTitleChange}
							value={title}
						/>
					</div>

					<span className="text-danger">{error.title}</span>

					<div className="form-group">
						<label htmlFor="description" className="mt-3 mb-2">
							Description
						</label>

						<textarea
							className={`form-control ${error.description && "border-danger"}`}
							name="description"
							id="description"
							rows="3"
							placeholder="Enter description here..."
							onChange={onDescriptionChange}
							value={description}
						></textarea>
					</div>

					<span className="text-danger">{error.description}</span>

					<div className="form-actions d-flex justify-content-end mt-5">
						<button type="submit" className="btn btn-info text-light">
							{taskCurrent ? "Save" : "Create"}
						</button>

						<button className="btn btn-secondary" onClick={onCancel}>
							Cancel
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Modal;
