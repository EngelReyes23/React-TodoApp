import TodoApp from "../../../components/08-useReducer/TodoApp";
import { shallow, mount } from "enzyme";
import { act } from "@testing-library/react";
import { demoTodo } from "../../fixtures/demoTodo";

describe("Pruebas en <TodoApp />", () => {
	const wrapper = shallow(<TodoApp />);

	Storage.prototype.setItem = jest.fn();

	// 1er test
	test("debe de mostrarse correctamente", () => {
		expect(wrapper).toMatchSnapshot();
	});

	// 2do test
	test("debe agregar TODOs", () => {
		const wrapper = mount(<TodoApp />);

		act(() => {
			wrapper.find("TodoAdd").prop("handleAddTodo")(demoTodo[0]);
			wrapper.find("TodoAdd").prop("handleAddTodo")(demoTodo[1]);
		});

		expect(wrapper.find("h1").text().trim()).toBe(`TodoApp (2)`);
		expect(localStorage.setItem).toHaveBeenCalledTimes(2);
	});

	// 3er test
	test("debe eliminar TODOs", () => {
		const wrapper = mount(<TodoApp />);
		act(() => {
			wrapper.find("TodoAdd").prop("handleAddTodo")(demoTodo[0]);
			wrapper.find("TodoList").prop("handleDelete")(demoTodo[0].id);
		});
		expect(wrapper.find("h1").text().trim()).toBe(`TodoApp (0)`);
	});
});
