export const todoReducer = (state = [], action) => {
	//
	switch (action?.type) {
		case "ADD_TODO":
			return [...state, action.payload];

		case "REMOVE_TODO":
			return state.filter((todo) => todo.id !== action.payload);

		case "TOGGLE_TODO":
			return state.map((todo) =>
				todo.id === action.payload ? { ...todo, done: !todo.done } : todo
			);

		case "TOGGLE_TODO-Old":
			return state.map((todo) => {
				if (todo.id === action.payload) {
					return {
						...todo,
						done: !todo.done,
					};
				}
				return todo;
			});

		case "EDIT_TODO":
			return state.map((todo) => {
				if (todo.id === action.payload.id) {
					return {
						...todo,
						text: action.payload.text,
					};
				}
				return todo;
			});

		default:
			return state;
	}
};
