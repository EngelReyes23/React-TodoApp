import HookApp from "../../HookApp";
import shallow from "enzyme";

describe("Probando HooApp", () => {
	// wrapper
	let wrapper = shallow(<HookApp />);

	beforeEach(() => {
		wrapper = shallow(<HookApp />);
	});

	test("debe mostrarse correctamente", () => {
		expect(wrapper).toMatchSnapshot();
	});
});
