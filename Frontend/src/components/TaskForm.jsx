import React, { useState } from "react";
import "../css/TaskForm.css";
import { Link } from "react-router-dom";

const TaskForm = () => {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [priority, setPriority] = useState("");
	const [dueDate, setDueDate] = useState("");
	const [error, setError] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch("http://localhost:5000/tasks", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ title, description, priority, dueDate }),
			});
			if (!response.ok) {
				throw new Error("Failed to create task");
			}
			// Handle successful creation (e.g., refresh task list)
			setTitle("");
			setDescription("");
			setPriority("");
			setDueDate("");
			setError("");
			console.log("Task created successfully");
		} catch (error) {
			console.error("Error creating task:", error);
			setError("Failed to create task. Please try again later.");
		}
	};

	return (
		<div className="container">
			<h2>Create Task</h2>
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label htmlFor="title">Title</label>
					<input
						type="text"
						id="title"
						placeholder="Enter title"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						required
					/>
				</div>
				<div className="form-group">
					<label htmlFor="description">Description</label>
					<textarea
						id="description"
						placeholder="Enter description"
						value={description}
						onChange={(e) => setDescription(e.target.value)}
						required
					></textarea>
				</div>
				<div className="form-group">
					<label htmlFor="priority">Priority</label>
					<select id="priority" value={priority} onChange={(e) => setPriority(e.target.value)} required>
						<option value="">Select Priority</option>
						<option value="low">Low</option>
						<option value="medium">Medium</option>
						<option value="high">High</option>
					</select>
				</div>
				<div className="form-group">
					<label htmlFor="dueDate">Due Date</label>
					<input type="date" id="dueDate" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
				</div>
				<button type="submit" className="create">
					Create Task
				</button>
				{error && <p className="error">{error}</p>}
			</form>
			<br />
			<Link to="/">
				<button>Home</button>
			</Link>
		</div>
	);
};

export default TaskForm;
