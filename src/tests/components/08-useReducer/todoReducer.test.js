import { todoReducer } from "../../../components/08-useReducer/todoReducer";
import { demoTodo } from "../../fixtures/demoTodo";

describe("Pruebas en <todoReducer />", () => {
	// 1er test
	test("should retornar el state por defecto", () => {
		const state = todoReducer(demoTodo, {});
		expect(state).toEqual(demoTodo);
	});

	//2do test
	test("should agregar un todo", () => {
		const state = todoReducer(demoTodo, {
			type: "ADD_TODO",
			payload: {
				id: 3,
				text: "Nuevo Todo",
				done: false,
			},
		});

		expect(state.length).toBe(3);

		expect(state).toEqual([
			...demoTodo,
			{
				id: 3,
				text: "Nuevo Todo",
				done: false,
			},
		]);
	});

	//3er test
	test("should eliminar un todo", () => {
		const state = todoReducer(demoTodo, {
			type: "REMOVE_TODO",
			payload: 1,
		});

		expect(state.length).toBe(1);

		expect(state).toEqual([
			{
				id: 2,
				text: "Engel Reyes",
				done: false,
			},
		]);
	});

	//4to test
	test("should cambiar el estado de un todo", () => {
		const state = todoReducer(demoTodo, {
			type: "TOGGLE_TODO",
			payload: 1,
		});

		expect(state).toEqual([
			{
				id: 1,
				text: "Hola Mundo",
				done: false,
			},
			{
				id: 2,
				text: "Engel Reyes",
				done: false,
			},
		]);
	});

	//5to test
	test("editar un todo", () => {
		const state = todoReducer(demoTodo, {
			type: "EDIT_TODO",
			payload: {
				id: 1,
				text: "Todo Editado",
			},
		});

		expect(state[0].text).toBe("Todo Editado");
	});
});
