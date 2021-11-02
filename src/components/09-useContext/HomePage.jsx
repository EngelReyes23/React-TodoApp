import React, { useContext } from "react";
import { UserContext } from "./UserContext";

const HomePage = () => {
	// useContext
	const { user } = useContext(UserContext);
	console.log(user);

	return (
		<>
			<h1>HomePage</h1>
			<hr />

			<pre>{JSON.stringify(user, null, 5)}</pre>
		</>
	);
};

export default HomePage;
