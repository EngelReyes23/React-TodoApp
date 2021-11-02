import React, { useContext } from "react";
import { UserContext } from "./UserContext";

const LoginPage = () => {
	// Obtener la referencia a UserContext
	const { setUser } = useContext(UserContext);

	const user = {
		id: new Date().getTime(),
		name: "Engel",
		email: "correo@correo.com",
	};

	return (
		<>
			<h1>Login Page</h1>
			<hr />
			<button className="btn btn-primary" onClick={() => setUser(user)}>
				Login
			</button>
		</>
	);
};

export default LoginPage;
