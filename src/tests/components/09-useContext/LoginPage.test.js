import { mount } from "enzyme";
import LoginPage from "../../../components/09-useContext/LoginPage";
import { UserContext } from "../../../components/09-useContext/UserContext";

describe("Pruebas en <LoginPage />", () => {
	// 1er test - debe mostrar el componente correctamente

	const setUser = jest.fn();
	const user = {
		id: expect.any(Number),
		name: "Engel",
		email: "correo@correo.com",
	};

	const wrapper = mount(
		<UserContext.Provider value={{ setUser }}>
			<LoginPage />
		</UserContext.Provider>
	);

	test("should mostrar el componente correctamente", () => {
		expect(wrapper).toMatchSnapshot();
	});

	// 2do test
	test("should ejecutar el setUser con el argumento esperado", () => {
		wrapper.find("button").simulate("click");
		expect(setUser).toHaveBeenCalledWith(user);
	});
});
