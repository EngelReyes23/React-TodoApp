import { mount } from "enzyme";
import HomePage from "../../../components/09-useContext/HomePage";
import { UserContext } from "../../../components/09-useContext/UserContext";

describe("Pruebas en <HomePage />", () => {
	const user = {
		name: "Engel",
		email: "correo@correo.com",
	};

	// 1er test
	test("mostrar el componente correctamente", () => {
		const wrapper = mount(
			<UserContext.Provider value={{ user }}>
				<HomePage />
			</UserContext.Provider>
		);
		expect(wrapper).toMatchSnapshot();
	});
});
