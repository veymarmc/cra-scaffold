import { useState } from 'react';
import { connect } from 'react-redux';
import Task from './Task';
import { addTodo } from '../../redux/actions/todos';
import { actions as filterActions } from '../../redux/actions/filter';

function TodoList({ todos, addTodo, setFilter }) {
	const [todo, setTodo] = useState('');

	const addTask = e => {
		e.preventDefault();

		if (todo.trim() === '') return;

		addTodo(todo);
		setTodo('');
	};

	return (
		<div>
			<form onSubmit={addTask}>
				<input type="text" value={todo} onChange={e => setTodo(e.target.value)} autoFocus />
				<input type="submit" value="Add todo" />
			</form>
			<ul>
				{todos.map(todo => (
					<Task key={todo.id} {...todo} />
				))}
			</ul>
			<div>
				Show:
				<button onClick={() => setFilter(filterActions.SHOW_ALL)}>All</button>
				<button onClick={() => setFilter(filterActions.SHOW_MISSING_TASKS)}>Active</button>
				<button onClick={() => setFilter(filterActions.SHOW_COMPLETED_TASKS)}>Completed</button>
			</div>
		</div>
	);
}

const filterTodos = (todos, filter) => {
	switch (filter) {
		case filterActions.SHOW_COMPLETED_TASKS:
			return todos.filter(t => t.completed);
		case filterActions.SHOW_MISSING_TASKS:
			return todos.filter(t => !t.completed);
		default:
			return todos;
	}
};

const mapStateToProps = ({ todos, filter }) => ({
	todos: filterTodos(todos, filter)
});

const mapDispatchToProps = dispatch => ({
	addTodo: description => dispatch(addTodo(description)),
	setFilter: filter => dispatch({ type: filter })
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
