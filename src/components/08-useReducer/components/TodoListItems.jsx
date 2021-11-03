import React from "react";
import PropTypes from "prop-types";

const TodoListItems = ({ todo, index, handleDelete, handleToggle }) => {
	return (
		<li className="list-group-item" key={index}>
			<p
				className={`${todo.done && "complete"}`}
				onClick={() => handleToggle(todo.id)}
			>
				{++index}- {todo.description}
			</p>
			<button
				onClick={() => {
					handleDelete(todo.id);
				}}
				className="btn btn-danger"
			>
				Delete
			</button>
		</li>
	);
};
// si esta envuelto en un memo , en los test no se muestra como deberia ser
// TodoListItems.displayName = "TodoListItems";

// PropTypes requeridos
TodoListItems.propTypes = {
	todo: PropTypes.object.isRequired,
	index: PropTypes.number.isRequired,
	handleDelete: PropTypes.func.isRequired,
	handleToggle: PropTypes.func.isRequired,
};

export default React.memo(TodoListItems).displayName = "TodoListItems";
