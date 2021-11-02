import React, { useState } from "react";
import "../02-useEffect/Effect.css";
import MultipleCustomHooks from "../03-examples/MultipleCustomHooks";

const RealExampleRef = () => {
	const [show, setShow] = useState(true);

	const handleClick = () => {
		setShow(!show);
	};

	return (
		<div>
			<h1>RealExampleRef</h1>
			<hr />
			{show && <MultipleCustomHooks />}
			<div>
				<button className="btn btn-primary mt-5" onClick={handleClick}>
					Show / Hide
				</button>
			</div>
		</div>
	);
};

export default RealExampleRef;
