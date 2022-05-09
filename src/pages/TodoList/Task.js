function Task({ description, completed, id }) {
	return (
		<li key={id}>
			{description}, {completed.toString()}
		</li>
	);
}

export default Task;
