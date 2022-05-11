import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { About, Counter, Home, LandingPage } from './../pages';

function ReactRouter() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/about" element={<About />} />
				<Route path="/counter" element={<Counter />} />
				<Route path="/home" element={<Home />} />
			</Routes>
		</Router>
	);
}

export default ReactRouter;
