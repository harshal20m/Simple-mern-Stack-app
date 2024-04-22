import React from "react";
import "../css/TaskItem.css";

const TaskItem = ({ task }) => {
	const formattedDueDate = new Date(task.dueDate).toLocaleDateString("en-US");
	const handleDelete = async () => {
		try {
			console.log(task._id);
			const response = await fetch(`http://localhost:5000/tasks/${task._id}`, {
				method: "DELETE",
			});
			if (!response.ok) {
				throw new Error("Failed to delete task");
			}
			// Handle successful deletion (e.g., refresh task list)
			window.location.reload();
		} catch (error) {
			console.error("Error deleting task:", error);
		}
	};

	return (
		<div className="task-item">
			<div>
				<h3>{task.title}</h3>
				<p>{task.description}</p>
				<p>
					<strong>Priority:</strong> {task.priority}
				</p>
				<p>
					<strong>Due Date:</strong> {formattedDueDate}
				</p>
			</div>
			<div className="btn">
				<button onClick={handleDelete}>Delete</button>
			</div>
		</div>
	);
};

export default TaskItem;
