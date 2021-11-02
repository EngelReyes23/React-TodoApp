import React from "react";
import PropTypes from "prop-types";
import { useForm } from "../../../Hooks/useForm";

const TodoAdd = ({ handleAddTodo }) => {
	// Custom Hook
	const [{ description }, handleInputChange, reset] = useForm({
		description: "",
	});

	const handleFormSubmit = (e) => {
		e.preventDefault();

		// Verifica que el valor no este vacio
		if (description.trim().length <= 2) return;

		const newtodo = {
			id: new Date().getTime(),
			description,
			done: false,
		};
		handleAddTodo(newtodo);
		reset();
	};

	return (
		<>
			<h4>Add TODO</h4>
			<hr />
			<form action="" onSubmit={handleFormSubmit}>
				<input
					type="text"
					name="description"
					placeholder="Aprender..."
					autoComplete="off"
					className="form-control"
					onChange={handleInputChange}
					value={description}
				/>
				<div className="d-grid gap-2">
					<button type="submit" className="btn btn-outline-primary mt-1">
						Add
					</button>
				</div>
			</form>
		</>
	);
};

TodoAdd.propTypes = {
	handleAddTodo: PropTypes.func.isRequired,
};

export default TodoAdd;
