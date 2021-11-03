import { shallow } from "enzyme";
import MultipleCustomHooks from "../../../components/03-examples/MultipleCustomHooks";
import { useFetch } from "../../../Hooks/useFetch";

// mock useFetch hook
jest.mock("../../../Hooks/useFetch");

describe("Pruebas en <MultipleCustomHooks />", () => {
	test("should mostrarse correctamente", () => {
		// simula el llamado a la api
		useFetch.mockReturnValue({ data: null, loading: true, error: false });

		const wrapper = shallow(<MultipleCustomHooks />);

		expect(wrapper).toMatchSnapshot();
	});

	test("should mostrarse correctamente con el valor de los inputs", () => {
		useFetch.mockReturnValue({
			data: [
				{
					author: "Pepito",
					quote: "Hola",
				},
			],
			loading: false,
			error: false,
		});

		const wrapper = shallow(<MultipleCustomHooks />);
		expect(wrapper.find(".alert").exists()).toBe(false);
		expect(wrapper.find("p").text().trim()).toBe("Hola");

		console.log(wrapper.html());
		expect(wrapper).toMatchSnapshot();
	});
});
