import useCounter from "../../Hooks/useCounter";
import { renderHook } from "@testing-library/react-hooks";

describe("Pruebas en CustomHook <useCounter />", () => {
	test("debe de retornar valores por defecto", () => {
		const { result } = renderHook(() => useCounter());
		console.log(result.current);
		expect(result.current.counter).toBe(10);
	});
});
