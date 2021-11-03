import { shallow } from "enzyme";
import TodoListItems from "../../../../components/08-useReducer/components/TodoListItems";
import { demoTodo } from "../../../fixtures/demoTodo";

describe("Pruebas a <TodoListItems/>", () => {
	const handleDelete = jest.fn();
	const handleToggle = jest.fn();
	//
	// 1er Test - Testeo de renderizado
	test("debe de mostrar el componente correctamente", () => {
		const wrapper = shallow(
			<TodoListItems
				todo={demoTodo[1]}
				index={1}
				handleToggle={handleToggle}
				handleDelete={handleDelete}
			/>
		);
		expect(wrapper).toMatchSnapshot();
		// expect(wrapper.find("p").text().trim()).toBe(
		// 	`2- ${demoTodo[1].description}`
		// );
	});

	// 2do Test - Llamar la funcion handleDelete
	test("debe de llamar a la funcion handleDelete", () => {
		const wrapper = shallow(
			<TodoListItems
				todo={demoTodo[1]}
				index={1}
				handleToggle={handleToggle}
				handleDelete={handleDelete}
			/>
		);
		wrapper.find("button").simulate("click");
		expect(handleDelete).toHaveBeenCalledWith(demoTodo[1].id);
	});

	// 3er Test - Llamar la funcion handleToggle
	test("debe de llamar a la funcion handleToggle", () => {
		const wrapper = shallow(
			<TodoListItems
				todo={demoTodo[1]}
				index={1}
				handleToggle={handleToggle}
				handleDelete={handleDelete}
			/>
		);
		wrapper.find("p").simulate("click");
		expect(handleToggle).toHaveBeenCalledWith(demoTodo[1].id);
	});

	// 4to Test - Mostrar el texto del parrafo correctamente
	test("debe de mostrar el texto del parrafo correctamente", () => {
		const wrapper = shallow(
			<TodoListItems
				todo={demoTodo[1]}
				index={1}
				handleToggle={handleToggle}
				handleDelete={handleDelete}
			/>
		);
		expect(wrapper.find("p").text().trim()).toBe(
			`2- ${demoTodo[1].description}`
		);
	});

	// 5to Test - Debe tener la clase complete
	test("Debe tener la clase complete", () => {
		const newTodo = demoTodo[1];
		newTodo.done = true;

		const wrapper = shallow(
			<TodoListItems todo={newTodo} index={newTodo.id} />
		);
		expect(wrapper.find("p").hasClass("complete")).toBe(true);
	});
});
