import React, { useRef } from "react";
import "../02-useEffect/Effect.css";

const FocusScreen = () => {
	const inputRef = useRef();

	const handleClick = () => {
		// document.querySelector("#input").select();

		// con useRef
		inputRef.current.select();
	};

	return (
		<div>
			<h3>Focus Screen</h3>
			<hr />

			<input
				ref={inputRef}
				type="text"
				className="form-control"
				placeholder="Nombre"
			/>

			<button className="btn btn-primary mt-3" onClick={handleClick}>
				Focus
			</button>
		</div>
	);
};

export default FocusScreen;
