import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import About from '../pages/About';
import Home from '../pages/home/Home';
import TodoList from '../pages/TodoList/TodoList';

function ReactRouter() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/todo" element={<TodoList />} />
			</Routes>
		</Router>
	);
}

export default ReactRouter;
