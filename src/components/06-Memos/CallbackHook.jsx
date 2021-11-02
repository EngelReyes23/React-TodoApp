import React, { useCallback, useState } from "react";
import ShowIncrement from "./ShowIncrement";
import "../03-examples/styles.css";

const CallbackHook = () => {
	const [counter, setCounter] = useState(0);

	// const increment = () => {
	// 	setCounter(counter + 1);
	// };

	// useCallback
	const increment = useCallback(
		(enSaltos) => {
			setCounter((c) => c + enSaltos);
		},
		[setCounter]
	);

	return (
		<div>
			<h1>UseCallBackHook: {counter}</h1>
			<hr />

			<ShowIncrement increment={increment} />
		</div>
	);
};

export default CallbackHook;
