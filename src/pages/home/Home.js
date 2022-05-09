import logo from './logo.svg';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
	return (
		<div className="Home">
			<header className="Home-header">
				<img src={logo} className="Home-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="Home-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn react to save your future!
				</a>
				<Link to="/about" className="Home-link">
					About US!
				</Link>
				<Link to="/todo" className="Home-link">
					Todo
				</Link>
			</header>
		</div>
	);
}

export default Home;
