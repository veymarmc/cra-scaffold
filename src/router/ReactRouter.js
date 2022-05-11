import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { publicRoutes } from './routes';

function ReactRouter() {
	return (
		<Router>
			<Routes>
				{publicRoutes.map(route => (
					<Route {...route} />
				))}
			</Routes>
		</Router>
	);
}

export default ReactRouter;
