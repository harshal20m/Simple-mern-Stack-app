// const express = require("express");
// const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
// const cors = require("cors");

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(bodyParser.json());
// app.use(cors());

// // MongoDB URI
// const MONGODB_URI = "mongodb+srv://20harshalmali:task2@cluster0.v3l7ly2.mongodb.net/task2"; // Replace 'your-mongodb-uri' with your actual MongoDB URI
const MONGODB_URI2 = "mongodb+srv://20harshalmali:carrental@carrentalcluster.m0sitsn.mongodb.net/task2"; // Replace 'your-mongodb-uri' with your actual MongoDB URI

// // Connect to MongoDB
// mongoose
// 	.connect(MONGODB_URI2)
// 	.then(() => console.log("MongoDB connected"))
// 	.catch((err) => console.error(err));

// // Define Mongoose schema for tasks
// const TaskSchema = new mongoose.Schema({
// 	title: String,
// 	description: String,
// 	: String,
// 	dueDate: Date,
// });

// const Task = mongoose.model("Task", TaskSchema);

// // Routes for CRUD operations
// // GET all tasks
// app.get("/tasks", async (req, res) => {
// 	try {
// 		const tasks = await Task.find();
// 		res.json(tasks);
// 	} catch (err) {
// 		res.status(500).json({ message: err.message });
// 	}
// });

// // GET single task by ID
// app.get("/tasks/:id", async (req, res) => {
// 	try {
// 		const task = await Task.findById(req.params.id);
// 		if (!task) {
// 			return res.status(404).json({ message: "Task not found" });
// 		}
// 		res.json(task);
// 	} catch (err) {
// 		res.status(500).json({ message: err.message });
// 	}
// });

// // POST create new task
// app.post("/tasks", async (req, res) => {
// 	const task = new Task({
// 		title: req.body.title,
// 		description: req.body.description,
// 		status: req.body.status,
// 		dueDate: req.body.dueDate,
// 	});
// 	try {
// 		const newTask = await task.save();
// 		res.status(201).json(newTask);
// 	} catch (err) {
// 		res.status(400).json({ message: err.message });
// 	}
// });

// // PUT update existing task
// app.put("/tasks/:id", async (req, res) => {
// 	try {
// 		const task = await Task.findById(req.params.id);
// 		if (!task) {
// 			return res.status(404).json({ message: "Task not found" });
// 		}
// 		task.title = req.body.title;
// 		task.description = req.body.description;
// 		task.status = req.body.status;
// 		task.dueDate = req.body.dueDate;
// 		const updatedTask = await task.save();
// 		res.json(updatedTask);
// 	} catch (err) {
// 		res.status(400).json({ message: err.message });
// 	}
// });

// // DELETE task
// app.delete("/tasks/:id", async (req, res) => {
// 	try {
// 		const task = await Task.findByIdAndDelete(req.params.id);
// 		console.log(task);
// 		if (!task) {
// 			return res.status(404).json({ message: "Task not found" });
// 		}

// 		res.json({ message: "Task deleted" });
// 		console.log("deleted successfully");
// 	} catch (err) {
// 		res.status(500).json({ message: err.message });
// 	}
// });

// // Start the server
// app.listen(PORT, () => {
// 	console.log(`Server running on port ${PORT}`);
// });

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB URI
const MONGODB_URI = "your-mongodb-uri"; // Replace 'your-mongodb-uri' with your actual MongoDB URI

// Connect to MongoDB
mongoose
	.connect(MONGODB_URI2)
	.then(() => console.log("MongoDB connected"))
	.catch((err) => console.error(err));

// Define Mongoose schema for tasks
const TaskSchema = new mongoose.Schema({
	title: String,
	description: String,
	priority: String, // Add 'priority' field
	dueDate: Date,
});

const Task = mongoose.model("Task", TaskSchema);

// Routes for CRUD operations
// GET all tasks
app.get("/tasks", async (req, res) => {
	try {
		const tasks = await Task.find();
		res.json(tasks);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
});

// GET single task by ID
app.get("/tasks/:id", async (req, res) => {
	try {
		const task = await Task.findById(req.params.id);
		if (!task) {
			return res.status(404).json({ message: "Task not found" });
		}
		res.json(task);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
});

// POST create new task
app.post("/tasks", async (req, res) => {
	const task = new Task({
		title: req.body.title,
		description: req.body.description,
		priority: req.body.priority, // Add 'priority' field
		dueDate: req.body.dueDate,
	});
	try {
		const newTask = await task.save();
		res.status(201).json(newTask);
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
});

// PUT update existing task
app.put("/tasks/:id", async (req, res) => {
	try {
		const task = await Task.findById(req.params.id);
		if (!task) {
			return res.status(404).json({ message: "Task not found" });
		}
		task.title = req.body.title;
		task.description = req.body.description;
		task.priority = req.body.priority; // Update 'priority' field
		task.dueDate = req.body.dueDate;
		const updatedTask = await task.save();
		res.json(updatedTask);
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
});

// DELETE task
app.delete("/tasks/:id", async (req, res) => {
	try {
		const task = await Task.findByIdAndDelete(req.params.id);
		if (!task) {
			return res.status(404).json({ message: "Task not found" });
		}
		res.json({ message: "Task deleted" });
		console.log("Deleted successfully");
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
});

// Start the server
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
