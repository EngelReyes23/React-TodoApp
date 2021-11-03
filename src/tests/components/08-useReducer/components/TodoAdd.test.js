import { shallow } from "enzyme";
import TodoAdd from "../../../../components/08-useReducer/components/TodoAdd";

describe("Pruebas en <TodoAdd />", () => {
	// preparacion Test
	const handleAddTodo = jest.fn();
	const wrapper = shallow(<TodoAdd handleAddTodo={handleAddTodo} />);

	// 1er Test - Renderizar
	test("Debe de mostrarse correctamente", () => {
		expect(wrapper).toMatchSnapshot(); // snapshot
	});

	//2do Test - no debe de llamar a handleAddTodo
	test("No debe de llamar a handleAddTodo", () => {
		wrapper.find("button").simulate("click");
		expect(handleAddTodo).toHaveBeenCalledTimes(0);
	});

	//3er Test - Debe de llamar a handleAddTodo
	test("Debe de llamar a handleAddTodo", () => {
		// const wrapper = mount(<TodoAdd handleAddTodo={handleAddTodo} />);
		wrapper.find("input").simulate("change", {
			target: {
				name: "description",
				value: "Hola Mundo",
			},
		});
		wrapper.find("form").simulate("submit", { preventDefault() {} });
		expect(handleAddTodo).toHaveBeenCalledTimes(1);

		// verificnado que se llamara con un argumento esperado
		expect(handleAddTodo).toHaveBeenCalledWith({
			id: expect.any(Number),
			description: "Hola Mundo",
			done: false,
		});

		// cuando se reinicia el formulario
		expect(wrapper.find("input").prop("value")).toBe("");
	});
});
