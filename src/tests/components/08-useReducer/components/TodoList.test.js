import { shallow } from "enzyme";
import TodoList from "../../../../components/08-useReducer/components/TodoList";
import { demoTodo } from "../../../fixtures/demoTodo";

describe("Pruebas en <TodoList />", () => {
	// Preparacion del entorno
	const handleToggle = jest.fn();
	const handleDelete = jest.fn();
	const wrapper = shallow(
		<TodoList
			todos={demoTodo}
			handleToggle={handleToggle}
			handleDelete={handleDelete}
		/>
	);

	// 1er Test - Renderizar correctamente el componente
	test("Debe de mostrar el componente correctamente", () => {
		expect(wrapper).toMatchSnapshot();
	});

	// 2do Test - Comprobar el numero de TODOs
	test("Debe de mostrar el numero de TODOs correctamente", () => {
		expect(wrapper.find("TodoListItems").length).toBe(demoTodo.length);
	});
});
