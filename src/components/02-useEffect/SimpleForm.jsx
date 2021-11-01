import React, { useState, useEffect } from "react";
import "./Effect.css";
import Message from "./Message";

const SimpleForm = () => {
	// maneja el estado del formulario
	const [formState, setFormState] = useState({
		name: "",
		email: "",
	});

	// destructuring
	const { name, email } = formState;

	useEffect(() => {
		// console.log("useEffect");
	}, []);

	// maneja el cambio de los inputs
	const handleInputChange = ({ target: { name, value } }) => {
		setFormState({
			...formState,
			[name]: value,
		});
	};

	return (
		<>
			<h1>useEffect</h1>
			<hr />
			<div className="form-group">
				<input
					type="text"
					className="form-control m-1"
					placeholder="Nombre"
					name="name"
					autoComplete="off"
					value={name}
					onChange={handleInputChange}
				/>
				<input
					type="email"
					className="form-control m-1"
					placeholder="Email"
					autoComplete="off"
					name="email"
					value={email}
					onChange={handleInputChange}
				/>
			</div>
			{name === "Message" && <Message />}
		</>
	);
};

export default SimpleForm;
