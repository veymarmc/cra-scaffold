export const actions = {
	ADD_TODO: 'ADD_TODO',
	TOGGLE_TODO: 'TOGGLE_TODO'
};

export function addTodo(description) {
	return {
		type: actions.ADD_TODO,
		description,
		completed: false
	};
}

export function toggleTodo(id, completed) {
	return {
		type: actions.TOGGLE_TODO,
		id,
		completed
	};
}
