import React, { useLayoutEffect, useRef, useState } from "react";
import useCounter from "../../Hooks/useCounter";
import { useFetch } from "../../Hooks/useFetch";
import "../03-examples/styles.css";
import "./style.css";

const Layout = () => {
	const { increment, decrement, counter, setCounter } = useCounter(1);
	const { data } = useFetch(`https://breakingbadapi.com/api/quotes/${counter}`);

	const { quote } = !!data && data[0];

	// estado para el tamaño del box
	const [boxSize, setBoxSize] = useState({});

	// useRef
	const pTag = useRef();

	// Tema del video
	useLayoutEffect(() => {
		setBoxSize(pTag.current.getBoundingClientRect());
	}, [quote]);

	return (
		<>
			<h1>LayoutEffect</h1>
			<hr />

			<blockquote className="blockquote text-end">
				<p ref={pTag} className="">
					{quote}
				</p>
			</blockquote>

			<pre>{JSON.stringify(boxSize, null, 5)}</pre>

			{counter !== 1 && (
				<button className="btn btn-primary m-1 shadow " onClick={decrement}>
					Previus
				</button>
			)}
			{counter !== 30 && (
				<button className="btn btn-primary m-1 shadow" onClick={increment}>
					Next
				</button>
			)}
			{counter === 30 && setCounter(63)}
		</>
	);
};

export default Layout;
