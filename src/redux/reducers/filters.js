import { actions } from '../actions/filter';

function filters(state = actions.SHOW_COMPLETED_TASKS, action) {
	return action.type || state;
}

export default filters;
