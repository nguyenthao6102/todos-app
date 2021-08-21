import React from "react";
import { useSelector } from "react-redux";
import TaskItem from "../TaskItem";
import "./index.scss";

function TaskList(props) {
	const tasks = useSelector((state) => state.tasks.tasks);

	const showTasks = () => {
		let result = null;
		if (tasks.length > 0) {
			result = tasks.map((task, index) => {
				return <TaskItem key={task.id} task={task} index={index} />;
			});
		}
		return result;
	};

	return (
		<div className="task-list container">
			<div className="row">{showTasks()}</div>
		</div>
	);
}

export default TaskList;
