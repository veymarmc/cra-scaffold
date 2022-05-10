import { connect } from 'react-redux';
import { toggleTodo } from '../../redux/actions/todos';

function Task({ description, completed, id, toggleTodo }) {
	return (
		<li
			style={{ textDecoration: completed ? 'line-through' : 'none' }}
			onClick={() => toggleTodo(id)}
		>
			{description}
		</li>
	);
}

const mapDispatchToProps = dispatch => ({
	toggleTodo: id => dispatch(toggleTodo(id))
});

export default connect(null, mapDispatchToProps)(Task);
