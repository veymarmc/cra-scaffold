export const actions = {
	ADD_TODO: 'ADD_TODO',
	TOGGLE_TODO: 'TOGGLE_TODO'
};

export function addTodo(description) {
	return {
		type: actions.ADD_TODO,
		description
	};
}

export function toggleTodo(id) {
	return {
		type: actions.TOGGLE_TODO,
		id
	};
}
