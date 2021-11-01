import React from "react";
import useCounter from "../../Hooks/useCounter";
import "./Counter.css";

const CounterWithCustomHook = () => {
	const { state, increment, decrement, reset } = useCounter(50);

	return (
		<>
			<h1>Counter with Hook: {state}</h1>
			<hr />
			<div className="">
				<button
					className="btn btn-primary m-1 shadow "
					onClick={() => decrement(2)}
				>
					-1
				</button>
				<button className="btn btn-primary m-1 shadow " onClick={reset}>
					Reset
				</button>
				<button
					className="btn btn-primary m-1 shadow "
					onClick={() => increment(2)}
				>
					+1
				</button>
			</div>
		</>
	);
};

export default CounterWithCustomHook;
