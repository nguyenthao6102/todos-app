import React from "react";
import { useDispatch } from "react-redux";
import {
	deleteTask,
	setTaskCurrent,
	toggleCompleted,
	toggleModal,
} from "../../redux/tasks/tasksActions";
import "./index.scss";

function TaskItem({ task, index }) {
	const dispatch = useDispatch();

	const colors = [
		"#eaf4d5",
		"#fff4d3",
		"#d3f2f3",
		"#fbeefb",
		"#c1eaf8",
		"#ffe9f3",
		"#f5f0e2",
	];

	const handleEdit = () => {
		dispatch(setTaskCurrent(task));
		dispatch(toggleModal());
	};

	const onDeleteTask = () => {
		dispatch(deleteTask(task.id));
	};

	const onHandleCompleted = () => {
		dispatch(toggleCompleted(task.id));
	};

	return (
		<div className="col-6 col-md-4 col-xl-3 mb-2 p-2 p-md-3">
			<div
				className={`task-item p-2 p-md-3 ${task.completed && "item-completed"}`}
				style={{ backgroundColor: colors[index % 7] }}
			>
				<h5 className="task-item__title mb-3">{task.title}</h5>

				<div
					className={`task-item__check p-1 ${task.completed && "text-success"}`}
					onClick={onHandleCompleted}
				>
					<i className="fas fa-check"></i>
				</div>

				<div className="task-item__body">{task.description}</div>

				<footer className="task-item__footer d-flex justify-content-between mt-3">
					<span className="task-item__date">{task.date}</span>

					<div className="task-item__actions d-flex">
						<div className="text-info" onClick={handleEdit}>
							<i className="far fa-edit p-1"></i>
						</div>

						<div className="text-danger" onClick={onDeleteTask}>
							<i className="far fa-trash-alt p-1"></i>
						</div>
					</div>
				</footer>
			</div>
		</div>
	);
}

export default TaskItem;
