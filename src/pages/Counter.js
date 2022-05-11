import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from './../store';

function Counter() {
	const count = useSelector(state => state.counter.value);
	const dispatch = useDispatch();
	const { increment, decrement } = counterActions;

	return (
		<div>
			<button onClick={() => dispatch(increment())}>Increment</button>
			<span>{count}</span>
			<button onClick={() => dispatch(decrement())}>Decrement</button>
		</div>
	);
}

export default Counter;
