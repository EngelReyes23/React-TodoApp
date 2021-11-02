import React, { useMemo, useState } from "react";
import useCounter from "../../Hooks/useCounter";
import "../03-examples/styles.css";

export const MemoHook = () => {
	const { counter, increment } = useCounter(500);

	// probando el re renderizado
	const [show, setShow] = useState(true);

	const procesoPesado = (iteraciones) => {
		for (let i = 0; i < iteraciones; i++) {
			console.log("Iterando");
		}

		return `Iteraciones Realizadas: ${iteraciones}`;
	};

	// useMemo
	const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);

	return (
		<div>
			<h1>MemoHook</h1>
			<h3>
				Counter: <small>{counter}</small>{" "}
			</h3>
			<hr />
			<p> {memoProcesoPesado}</p>

			<button className="btn btn-primary m-1" onClick={increment}>
				+1
			</button>

			<button
				onClick={() => setShow(!show)}
				className="btn btn-outline-primary m-1"
			>
				Show / Hidde {JSON.stringify(show)}
			</button>
		</div>
	);
};
