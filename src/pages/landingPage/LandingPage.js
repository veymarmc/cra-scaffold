import { Link } from 'react-router-dom';

export default function LandingPage() {
	return (
		<div>
			<p>
				This is the landing page page, it's intended to have a separate place to begin to develope
				your landing page without touch the home page, that has all the redux and router
				functionality.
			</p>
			<Link to="./home">Go to home page.</Link>
		</div>
	);
}
