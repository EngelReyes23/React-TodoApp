const initialState = [
	{
		id: 1,
		todo: "Tarea por hacer",
		done: false,
	},
];

//
const todoReducer = (state = initialState, action) => {
	//
	switch (action?.type) {
		case "ADD_TODO":
			return [...state, action.payload];

		default:
			break;
	}

	return state;
};

let todos = todoReducer();

console.log(todos);

const newTodo = { ...initialState, id: 2 };

const addTodoAction = {
	type: "ADD_TODO",
	payload: newTodo,
};

todos = todoReducer(todos, addTodoAction);

console.log(todos);
