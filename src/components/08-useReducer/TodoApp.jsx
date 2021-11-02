import React, { useReducer, useEffect } from "react";
import TodoAdd from "./components/TodoAdd";
import TodoList from "./components/TodoList";
import "./style.css";
import { todoReducer } from "./todoReducer";

const init = () => {
	// return [
	// 	{
	// 		id: new Date().getTime(),
	// 		description: "Aprender React",
	// 		done: false,
	// 	},
	// ];
	return JSON.parse(localStorage.getItem("Todos")) || [];
};

const TodoApp = () => {
	//useReducer
	const [todos, dispatch] = useReducer(todoReducer, [], init);

	// useEffect
	useEffect(() => {
		localStorage.setItem("Todos", JSON.stringify(todos));
	}, [todos]);

	// handledelete
	const handleDelete = (id) => {
		dispatch({
			type: "REMOVE_TODO",
			payload: id,
		});
	};

	// handledone
	const handleToggle = (id) => {
		dispatch({
			type: "TOGGLE_TODO",
			payload: id,
		});
	};

	// handleAddTodo
	const handleAddTodo = (newTodo) => {
		dispatch({
			type: "ADD_TODO",
			payload: newTodo,
		});
	};

	//
	return (
		<div>
			<h1>TodoApp ({todos.length})</h1>
			<hr />

			<div className="row">
				<div className="col-7">
					<TodoList
						todos={todos}
						handleDelete={handleDelete}
						handleToggle={handleToggle}
					/>
				</div>
				<div className="col">
					<TodoAdd handleAddTodo={handleAddTodo} />
				</div>
			</div>
		</div>
	);
};

export default TodoApp;
