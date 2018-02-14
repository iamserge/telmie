import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './global/header';
import Footer from './global/footer';
import Home from '../routes/home';
import Search from '../routes/search';
import Pro from '../routes/pro';
import StaticPage from '../routes/static-page';
import AboutUs from '../routes/about-us';

import PrismicConfig from '../prismic/prismic-configuration';
import { uids } from '../prismic/uids';
import Prismic from 'prismic-javascript';
export const routes = {
	HOME: '/',
	SEARCH: '/search/:searchTerm',
	PRO: '/pro/:userId',
	ABOUT_US: '/about-us',
	FAQ: '/help'
};


export default class App extends Component {

	constructor(props){
		super(props);
		this.state = {
			prismicCtx: null
		}
	}

	componentWillMount() {
    this.buildContext().then((prismicCtx) => {
      this.setState({ prismicCtx });
    }).catch((e) => {
      console.error(`Cannot contact the API, check your prismic configuration:\n${e}`);
    });
  }


	handleRoute = e => {
		this.currentUrl = e.url;
	};

	buildContext() {
    const accessToken = PrismicConfig.accessToken;
    return Prismic.api(PrismicConfig.apiEndpoint, { accessToken }).then(api => ({
      api,
      endpoint: PrismicConfig.apiEndpoint,
      accessToken,
      linkResolver: PrismicConfig.linkResolver
    }));
  }

	render() {
		return (
			<div id="app">
				<Header />
				<Router onChange={this.handleRoute}>
					<Home path={routes.HOME} />
					<Search path={routes.SEARCH} />
					<Pro path={routes.PRO} />
					<AboutUs path = { routes.ABOUT_US } prismicCtx = { this.state.prismicCtx } uid = { uids.ABOUT_US }/>
					<StaticPage path = { routes.FAQ } prismicCtx = { this.state.prismicCtx } uid = { uids.FAQ }/>
				</Router>
				<Footer />
			</div>
		);
	}
}
