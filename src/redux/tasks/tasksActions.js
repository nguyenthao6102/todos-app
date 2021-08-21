import * as actionTypes from "./tasksTypes";

export const showTasks = (tasks) => {
	return {
		type: actionTypes.SHOW_TASKS,
		payload: tasks,
	};
};

export const addTasks = (task) => {
	return {
		type: actionTypes.ADD_TASK,
		payload: task,
	};
};

export const deleteTask = (id) => {
	return {
		type: actionTypes.DELETE_TASK,
		payload: id,
	};
};

export const editTask = (id, taskEdit) => {
	return {
		type: actionTypes.EDIT_TASK,
		payload: {
			id,
			taskEdit,
		},
	};
};

export const toggleModal = () => {
	return {
		type: actionTypes.TOGGLE_MODAL,
	};
};

export const setTaskCurrent = (taskCurrent) => {
	return {
		type: actionTypes.SET_TASK_CURRENT,
		payload: taskCurrent,
	};
};

export const deleteTaskCurrent = () => {
	return {
		type: actionTypes.DELETE_TASK_CURRENT,
	};
};

export const toggleCompleted = (id) => {
	return {
		type: actionTypes.TOGGLE_COMPLETED,
		payload: id,
	};
};
