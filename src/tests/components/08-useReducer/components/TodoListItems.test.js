import { shallow } from "enzyme";
import TodoListItems from "../../../../components/08-useReducer/components/TodoListItems";
import { demoTodo } from "../../../fixtures/demoTodo";

describe("Pruebas a <TodoListItems/>", () => {
	const handleDelete = jest.fn();
	const handleToggle = jest.fn();

	let wrapper = shallow(
		<TodoListItems
			todo={demoTodo[2]}
			index={2}
			handleToggle={handleToggle}
			handleDelete={handleDelete}
		/>
	);

	beforeEach(() => {
		wrapper = shallow(
			<TodoListItems
				todo={demoTodo[2]}
				index={2}
				handleToggle={handleToggle}
				handleDelete={handleDelete}
			/>
		);
	});

	//
	// 1er Test - Testeo de renderizado
	test("debe de mostrar el componente correctamente", () => {
		expect(wrapper).toMatchSnapshot();
	});

	// 2do Test - Llamar la funcion handleDelete
	test("debe de llamar a la funcion handleDelete", () => {
		wrapper.find("button").simulate("click");
		expect(handleDelete).toHaveBeenCalledWith(demoTodo[2].id);
	});

	// 3er Test - Llamar la funcion handleToggle
	test("debe de llamar a la funcion handleToggle", () => {
		wrapper.find("p").simulate("click");
		expect(handleToggle).toHaveBeenCalledWith(demoTodo[2].id);
	});

	// 4to Test - Mostrar el texto del parrafo correctamente
	test("debe de mostrar el texto del parrafo correctamente", () => {
		expect(wrapper.find("p").text().trim()).toBe(
			`3- ${demoTodo[2].description}`
		);
	});

	// 5to Test - Debe tener la clase complete
	test("Debe tener la clase complete", () => {
		const newTodo = demoTodo[2];
		newTodo.done = true;

		const wrapper = shallow(
			<TodoListItems todo={newTodo} index={newTodo.id} />
		);
		expect(wrapper.find("p").hasClass("complete")).toBe(true);
	});
});
