import { renderHook } from "@testing-library/react-hooks";
import { useFetch } from "../../Hooks/useFetch";

describe("Pruebas en <useFetch />", () => {
	//
	test("should retornar la informacion por defecto", () => {
		const { result } = renderHook(() =>
			useFetch("https://jsonplaceholder.typicode.com/users")
		);

		const { data, loading, error } = result.current;

		expect(data).toBe(null);
		expect(loading).toBe(true);
		expect(error).toBe(false);
	});

	test("should retornar la info deseada", async () => {
		const { result, waitForNextUpdate } = renderHook(() =>
			useFetch("https://breakingbadapi.com/api/quotes/1")
		);
		await waitForNextUpdate({ timeout: 2000 });

		const { data } = result.current;
		console.log(data);
		expect(data.length).toBe(1);
	});

	test("should retornar el error", async () => {
		const { result, waitForNextUpdate } = renderHook(() =>
			useFetch("https://reqres.in/engel/users?page=2")
		);
		await waitForNextUpdate({ timeout: 2000 });

		const { error } = result.current;
		expect(error).toBe(true);
	});
});
