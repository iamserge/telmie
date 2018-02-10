import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './global/header';
import Footer from './global/footer';
import Home from '../routes/home';
import Search from '../routes/search';


export const routes = {
	HOME: '/',
	SEARCH: '/search/:searchTerm'
};


export default class App extends Component {



	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app">
				<Header />
				<Router onChange={this.handleRoute}>
					<Home path={routes.HOME} />
					<Search path={routes.SEARCH} />
				</Router>
				<Footer />
			</div>
		);
	}
}
