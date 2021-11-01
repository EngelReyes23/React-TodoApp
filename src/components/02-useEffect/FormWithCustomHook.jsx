import React from "react";
import { useForm } from "../../Hooks/useForm";
import "./Effect.css";

const FormWithCustomHook = () => {
	// estado de form con Custom Hook
	const [formState, handleInputChange] = useForm({
		name: "",
		email: "",
		password: "",
	});

	// destructuring
	const { name, email, password } = formState;

	// maneja los cambios en el formulario
	// const handleInputChange = ({ target: { name, value } }) => {
	// 	setFormState({
	// 		...formState,
	// 		[name]: value,
	// 	});
	// };

	// maneja el submit del formulario
	const handleFormSubmit = (e) => {
		e.preventDefault();
		console.log(`El usuario ${name} con email ${email} y password ${password}`);
		console.log(formState);
	};

	return (
		<form onSubmit={handleFormSubmit}>
			<h1>Form With Custom Hook</h1>
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
				<input
					type="password"
					name="password"
					className="form-control m-1"
					value={password}
					onChange={handleInputChange}
					placeholder="Password"
				/>
				<input type="submit" className="btn btn-primary" />
			</div>
		</form>
	);
};

export default FormWithCustomHook;
