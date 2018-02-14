import { h, Component } from 'preact';
import Helmet from 'preact-helmet';
import { bindActionCreators } from 'redux';
import { connect } from 'preact-redux';

import style from './style.scss';

class Home extends Component {
	componentDidMount(){

	}
	render() {

		return (
			<div id="home" className="uk-container uk-container-large" >
				<Helmet
					title="Telmie | Home"
				/>
				<h2 class="uk-heading-primary" id="mainTitle">
					Professional services in one place.<br/>
					<span>Search, select, call</span>
				</h2>
			</div>

		);
	}
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Home);
