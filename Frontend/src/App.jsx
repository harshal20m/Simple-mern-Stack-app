import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Update import statement
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

const App = () => {
	return (
		<Router>
			<Routes>
				{/* Use Routes instead of Switch */}
				<Route path="/" element={<TaskList />} /> {/* Use element prop instead of component */}
				<Route path="/create" element={<TaskForm />} /> {/* Use element prop instead of component */}
				{/* Add routes for task details and editing */}
			</Routes>
		</Router>
	);
};

export default App;
