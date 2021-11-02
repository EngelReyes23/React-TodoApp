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
		error: null,
	});

	useEffect(() => {
		setTimeout(() => {
			if (isMount.current) {
				console.log("Fetch");
				setState({ data: null, loading: true, error: null });
				fetch(url)
					.then((res) => res.json())
					.then((data) => setState({ data, loading: false, error: null }));
			} else console.log("No se llamo al setState");
		}, 1000);
	}, [url]);

	return state;
};
