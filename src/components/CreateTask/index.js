import React from "react";
import { useDispatch } from "react-redux";
import { toggleModal } from "../../redux/tasks/tasksActions";
import "./index.scss";

function CreateTask(props) {
	const dispatch = useDispatch();

	const onShowModal = () => {
		dispatch(toggleModal());
	};

	return (
		<div
			className="create-task rounded-circle d-flex justify-content-center align-items-center bg-info text-light"
			onClick={onShowModal}
		>
			<i className="fas fa-plus"></i>
		</div>
	);
}

export default CreateTask;
