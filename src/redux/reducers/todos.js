import { actions } from '../actions/todos';

function todos(state = [], action) {
	switch (action.type) {
		case actions.ADD_TODO:
			return [
				...state,
				{
					id: state.length,
					description: action.description,
					completed: action.completed
				}
			];
		case actions.TOGGLE_TODO:
			return state.map((todo, index) =>
				index === action.id ? { ...todo, completed: action.completed } : todo
			);
		default:
			return state;
	}
}

export default todos;
