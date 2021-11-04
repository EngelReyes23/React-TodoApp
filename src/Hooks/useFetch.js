import { useEffect, useRef, useState } from "react";

export const useFetch = (url) => {
	// Referencias con useRef
	const isMount = useRef(true);

	// Effect
	useEffect(() => {
		return () => {
			isMount.current = false;
		};
	}, []);

	// state
	const [state, setState] = useState({
		data: null,
		loading: true,
		error: false,
	});

	useEffect(() => {
		if (isMount.current) {
			console.log("Fetch");
			setState({ data: null, loading: true, error: false });
			fetch(url)
				.then((res) => res.json())
				.then((data) => setState({ data, loading: false, error: false }))
				.catch(() => setState({ data: "Error", loading: true, error: true }));
		}
	}, [url]);

	return state;
};
