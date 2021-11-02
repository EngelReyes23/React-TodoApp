import React from "react";

const ShowIncrement = ({ increment }) => {
	console.log("Me volvi a generar");

	return (
		<button
			className="btn btn-primary m-1"
			onClick={() => {
				increment(5);
			}}
		>
			Incrementar +1
		</button>
	);
};

export default React.memo(ShowIncrement);
