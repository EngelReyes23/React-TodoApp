import useCounter from "../../Hooks/useCounter";
import { renderHook, act } from "@testing-library/react-hooks";

describe("Pruebas en CustomHook <useCounter />", () => {
	test("debe de retornar valores por defecto", () => {
		const { result } = renderHook(() => useCounter());
		// console.log(result.current);
		expect(result.current.counter).toBe(10);
		// verifica el tipo de dato de incremente
		expect(typeof result.current.increment).toBe("function");
		expect(typeof result.current.decrement).toBe("function");
		expect(typeof result.current.reset).toBe("function");
	});

	test("should counter en 100", () => {
		const { result } = renderHook(() => useCounter(100));
		expect(result.current.counter).toBe(100);
	});

	test("should incrementar el counter", async () => {
		const { result } = renderHook(() => useCounter(100));
		const { increment } = result.current;
		act(() => {
			increment();
		});

		const { counter } = result.current;
		expect(counter).toBe(101);
	});

	test("should decrementar el counter", () => {
		const { result } = renderHook(() => useCounter(100));
		const decrement = result.current.decrement;
		act(() => {
			decrement();
		});

		const { counter } = result.current;
		expect(counter).toBe(99);
	});

	test("should reset el counter", () => {
		const { result } = renderHook(() => useCounter(100));
		const reset = result.current.reset;
		const incrementar = result.current.increment;
		act(() => {
			incrementar();
			incrementar();
			incrementar();
			reset();
		});
		expect(result.current.counter).toBe(100); // 100
	});
});
