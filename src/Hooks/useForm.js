import { useState } from "react";

export const useForm = (initialValues = {}) => {
	//
	const [values, setValues] = useState(initialValues);

	// maneja los cambios en los inputs
	const handleInputChange = ({ target: { name, value } }) => {
		setValues({
			...values,
			[name]: value,
		});
	};

	// Reset
	const reset = () => {
		setValues(initialValues);
	};

	return [values, handleInputChange, reset];
};
