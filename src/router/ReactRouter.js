import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import About from '../pages/About';
import Counter from '../pages/Counter';
import Home from '../pages/home/Home';

function ReactRouter() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/counter" element={<Counter />} />
			</Routes>
		</Router>
	);
}

export default ReactRouter;
