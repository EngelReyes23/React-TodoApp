import React from "react";
import PropTypes from "prop-types";
import TodoListItems from "./TodoListItems";

const TodoList = ({ todos, handleDelete, handleToggle }) => {
	return (
		<ol className="list-group list-group-flush">
			{todos.map((todo, index) => (
				<TodoListItems
					key={todo.id}
					todo={todo}
					index={index}
					handleDelete={handleDelete}
					handleToggle={handleToggle}
				/>
			))}
		</ol>
	);
};

// Proptypes requeridos
TodoList.propTypes = {
	todos: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			description: PropTypes.string.isRequired,
			done: PropTypes.bool.isRequired,
		}).isRequired
	).isRequired,
	handleDelete: PropTypes.func.isRequired,
	handleToggle: PropTypes.func.isRequired,
};

export default React.memo(TodoList);
