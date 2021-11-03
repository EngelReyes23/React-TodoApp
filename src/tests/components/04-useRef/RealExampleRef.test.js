import { shallow } from "enzyme";
import RealExampleRef from "../../../components/04-useRef/RealExampleRef";

describe("Pruebas en <RealExampleRef />", () => {
	// instancia a ocupar
	const wrapper = shallow(<RealExampleRef />);

	// test 1
	test("Debe de mostrar el componente correctamente", () => {
		expect(wrapper).toMatchSnapshot();
	});

	// test 2
	test("debe mostrar el componente <MultipleCustomHooks />", () => {
		// const wrapper = shallow(<RealExampleRef />);
		wrapper.find("button").simulate("click");
		expect(wrapper.find("MultipleCustomHooks").exists()).toBe(true);
	});
});
