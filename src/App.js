import { useSelector } from "react-redux";
import "./App.scss";
import CreateTask from "./components/CreateTask";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Modal from "./components/Modal";
import TaskList from "./components/TaskList";

function App() {
	const showModal = useSelector((state) => state.tasks.showModal);

	return (
		<div className="app">
			<Header />
			<TaskList />
			<CreateTask />
			{showModal && <Modal />}
			<Footer />
		</div>
	);
}

export default App;
