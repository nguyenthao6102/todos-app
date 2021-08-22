import React, { useState } from "react";
import { useSelector } from "react-redux";
import Filter from "../Filter";
import TaskItem from "../TaskItem";
import "./index.scss";

function TaskList(props) {
	const tasks = useSelector((state) => state.tasks.tasks);
	const [tab, setTab] = useState(1);

	const showTasks = () => {
		let result = null;

		if (tasks.length > 0) {
			if (tab === 1) {
				result = tasks.map((task, index) => {
					return <TaskItem key={task.id} task={task} index={index} />;
				});
			} else if (tab === 2) {
				result = tasks.map((task, index) => {
					return (
						task.completed === false && (
							<TaskItem key={task.id} task={task} index={index} />
						)
					);
				});
			} else {
				result = tasks.map((task, index) => {
					return (
						task.completed && (
							<TaskItem key={task.id} task={task} index={index} />
						)
					);
				});
			}
		}

		return result;
	};

	return (
		<div className="task-list container">
			<div className="row mb-3">
				<Filter tab={tab} setTab={setTab} />
			</div>
			<div className="row">{showTasks()}</div>
		</div>
	);
}

export default TaskList;
