import * as actionTypes from "./tasksTypes";

const initialState = {
	tasks: [
		{
			id: 1,
			title: "ReactJs",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
			completed: false,
			date: "22/8/2021",
		},
		{
			id: 2,
			title: "Redux",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
			completed: false,
			date: "22/8/2021",
		},
		{
			id: 3,
			title: "Javascript",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
			completed: false,
			date: "22/8/2021",
		},
		{
			id: 4,
			title: "Html",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
			completed: false,
			date: "22/8/2021",
		},
		{
			id: 5,
			title: "Css",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
			completed: true,
			date: "22/8/2021",
		},
		{
			id: 6,
			title: "Bootstrap",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
			completed: false,
			date: "22/8/2021",
		},
		{
			id: 7,
			title: "Scss",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
			completed: true,
			date: "22/8/2021",
		},
		{
			id: 8,
			title: "Python",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
			completed: false,
			date: "22/8/2021",
		},
	],
	taskCurrent: null,
	showModal: false,
};

const tasksReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.SHOW_TASKS:
			return { ...state, tasks: action.payload };

		case actionTypes.ADD_TASK:
			return { ...state, tasks: [...state.tasks, action.payload] };

		case actionTypes.DELETE_TASK:
			const newTasks = state.tasks.filter((task) => task.id !== action.payload);
			return { ...state, tasks: newTasks };

		case actionTypes.EDIT_TASK:
			const newTasksEdit = state.tasks.map((task) =>
				task.id === action.payload.id
					? { ...task, ...action.payload.taskEdit }
					: task
			);
			return { ...state, tasks: newTasksEdit };

		case actionTypes.TOGGLE_MODAL:
			return { ...state, showModal: !state.showModal };

		case actionTypes.SET_TASK_CURRENT:
			return { ...state, taskCurrent: action.payload };

		case actionTypes.DELETE_TASK_CURRENT:
			return { ...state, taskCurrent: null };

		case actionTypes.TOGGLE_COMPLETED:
			const newTasksCompleted = state.tasks.map((task) =>
				task.id === action.payload
					? { ...task, completed: !task.completed }
					: task
			);
			return { ...state, tasks: newTasksCompleted };

		default:
			return state;
	}
};

export default tasksReducer;
