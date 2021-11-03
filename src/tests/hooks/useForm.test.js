import { renderHook, act } from "@testing-library/react-hooks";
import { useForm } from "../../Hooks/useForm";

describe("Pruebas en <useForm />", () => {
	// valores iniciales del formulario
	const initialState = {
		name: "Engel Reyes",
		email: "correo@correo.com",
		password: "1234",
	};

	// verifica el estado inicical del formulario
	test("Debe de regresar un formulario por defecto", () => {
		const { result } = renderHook(() => useForm(initialState));
		const [formValues, handleInputChange, reset] = result.current;
		expect(formValues).toEqual(initialState);
		expect(typeof handleInputChange).toBe("function");
		expect(typeof reset).toBe("function");
	});

	// verifica si cambia el estado del formuario
	test("should cambiar el valor del formulario", () => {
		const { result } = renderHook(() => useForm(initialState));
		const [, handleInputChange] = result.current;
		act(() => {
			handleInputChange({
				target: {
					name: "name",
					value: "David Sandoval",
				},
			});
		});
		const [formValues] = result.current;
		expect(formValues).toEqual({
			...initialState,
			name: "David Sandoval",
		});
	});

	// verifica si resetea el formulario
	test("should reset the form", () => {
		const { result } = renderHook(() => useForm(initialState));
		const [, handleInputChange, reset] = result.current;
		act(() => {
			handleInputChange({
				target: {
					name: "name",
					value: "David Sandoval",
				},
			});
		});
		act(() => {
			reset();
		});
		const [formValues] = result.current;
		expect(formValues).toEqual(initialState);
	});
});
