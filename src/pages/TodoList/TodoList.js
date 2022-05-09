import { useState } from 'react';
import { connect } from 'react-redux';
import Task from './Task';
import { addTodo, toggleTodo } from '../../redux/actions/todos';

function TodoList({ todos, addTodo, toggleTodo }) {
	const [todo, setTodo] = useState('');

	const addTask = (e) => {
		e.preventDefault();

		if (todo.trim() === '') return;

		addTodo(todo);
		setTodo('');
	};

	return (
		<div>
			<form onSubmit={addTask}>
				<input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} autoFocus />
				<input type="submit" value="Add todo" />
			</form>
			<ul>
				{todos.map((todo) => (
					<Task key={todo.id} description={todo.description} completed={todo.completed} />
				))}
			</ul>
			<div>
				Show:
				<button>All</button>
				<button>Active</button>
				<button>Completed</button>
			</div>
		</div>
	);
}

const mapStateToProps = ({ todos }) => ({ todos });

const mapDispatchToProps = (dispatch) => ({
	addTodo: (description) => dispatch(addTodo(description)),
	toggleTodo: (id, completed) => dispatch(toggleTodo(id, completed))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
