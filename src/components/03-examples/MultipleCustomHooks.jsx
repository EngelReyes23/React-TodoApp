import React from "react";
import useCounter from "../../Hooks/useCounter";
import { useFetch } from "../../Hooks/useFetch";
import "./styles.css";

const MultipleCustomHooks = () => {
	const { increment, decrement, counter, setCounter } = useCounter(1);
	const { loading, data } = useFetch(
		`https://breakingbadapi.com/api/quotes/${counter}`
	);

	const { quote, author } = !!data && data[0];

	return (
		<>
			<h1>BreakingBad Quotes</h1>
			<hr />
			{loading && (
				<div className="alert alert-info text-center">Loading...</div>
			)}

			{!loading && (
				<blockquote className="blockquote text-end">
					<p className="">{quote}</p>
					<footer className="blockquote-footer">{author}</footer>
				</blockquote>
			)}

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

export default MultipleCustomHooks;
