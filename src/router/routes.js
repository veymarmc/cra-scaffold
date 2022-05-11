import { About, Counter, Home, LandingPage } from './../pages';

export const publicRoutes = [
	{
		path: '/',
		element: <LandingPage />
	},
	{
		path: '/about',
		element: <About />
	},
	{
		path: '/counter',
		element: <Counter />
	},
	{
		path: '/home',
		element: <Home />
	}
];
