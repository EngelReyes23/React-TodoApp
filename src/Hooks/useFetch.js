import { useEffect, useState } from "react";

export const useFetch = (url) => {
	// state
	const [state, setState] = useState({
		data: null,
		loading: true,
		error: null,
	});

	useEffect(() => {
		setState({ data: null, loading: true, error: null });

		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				setState({ data, loading: false, error: null });
			})
			.catch((error) => {
				setState({ error, loading: true });
			});
	}, [url]);

	return state;
};
