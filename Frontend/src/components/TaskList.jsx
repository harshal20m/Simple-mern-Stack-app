import React, { useState, useEffect } from "react";
import TaskItem from "./TaskItem";
import { Link } from "react-router-dom";
import "../css/TaskList.css";

const TaskList = () => {
	const [tasks, setTasks] = useState([]);
	const [error, setError] = useState(null);

	useEffect(() => {
		fetchTasks();
	}, []);

	const fetchTasks = async () => {
		try {
			const response = await fetch("http://localhost:5000/tasks"); // Adjust URL if needed
			if (!response.ok) {
				throw new Error("Failed to fetch tasks");
			}
			const data = await response.json();
			setTasks(data);
			setError(null); // Clear any previous errors
		} catch (error) {
			console.error("Error fetching tasks:", error);
			setError("Failed to fetch tasks. Please try again later."); // Set error state
		}
	};

	return (
		<div className="container">
			<h2>Task List</h2>
			<div className="Items">
				{tasks.map((task) => (
					<TaskItem key={task.id} task={task} />
				))}
				{console.log(tasks)}
				<br />
				<Link to="/create">
					<button>+ Add Task </button>
				</Link>
			</div>
		</div>
	);
};

export default TaskList;
