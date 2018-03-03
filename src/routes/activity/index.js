import { h, Component } from 'preact';
import Helmet from 'preact-helmet';
import { bindActionCreators } from 'redux';
import { connect } from 'preact-redux';

import style from './style.scss';
import { logIn } from '../../actions/user';
import { route } from 'preact-router';
import { getProCalls, getPersonalCalls} from '../../actions/user';
import AllActivity from '../../components/profile/all-activity';





class Activity extends Component {

	constructor(props) {
		super(props);

	}
	componentDidMount(){
		this.props.getProCalls(this.props.userData.userAuth);
		this.props.getPersonalCalls(this.props.userData.userAuth);
	}
	componentWillReceiveProps(nextProps) {

	}
	render() {
		const user = this.props.userData;
		return (
			<div id="profile" className="uk-container uk-container-small" >
				<AllActivity allActivity = { this.props.activity } title="All activity"/>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
 	userData: state.loggedInUser,
	proCalls: state.loggedInUserProCalls,
	personalCalls: state.loggedInUserPersonalCalls,
	activity: state.loggedInUserActivity,
});

const mapDispatchToProps = dispatch => bindActionCreators({
	getProCalls,
	getPersonalCalls
}, dispatch);

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Activity);
