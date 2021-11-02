import React, { useState } from "react";
import Small from "./Small";
import useCounter from "../../Hooks/useCounter";
import "../03-examples/styles.css";

export const Memorize = () => {
	const { counter, increment } = useCounter(10);

	// probando el re renderizado
	const [show, setShow] = useState(true);

	return (
		<div>
			<h1>
				Counter: <Small counter={counter} />
			</h1>
			<hr />

			<button className="btn btn-primary m-1" onClick={increment}>
				+1
			</button>

			<button onClick={() => setShow(!show)} className="btn btn-primary m-1">
				Show / Hidde {JSON.stringify(show)}
			</button>
		</div>
	);
};
