import { h, Component } from 'preact';
import Helmet from 'preact-helmet';
import { bindActionCreators } from 'redux';
import { connect } from 'preact-redux';
import SignUpForm from '../../components/sign-up/sign-up-form';
import style from './style.scss';
import { register } from '../../actions/user';

import { route } from 'preact-router';
import Redirect from '../../components/global/redirect';

class EditProfile extends Component {
	constructor(props){
		super(props);
	}
	componentDidMount(){

	}
	componentWillReceiveProps(nextProps) {

	}
	render() {
		if (!this.state.loggedIn) {
			return (
				<div className="uk-container uk-container-small" id="editProfile" >
					<div>
							{!this.props.registerSuccess ? (
								<h1>Sign up</h1>
							) : (
								<h1>Success!</h1>
							) }
							<SignUpForm register = { this.props.register } registerSuccess = { this.props.registerSuccess } registerFailure = { this.props.registerFailure }/>
						</div>
				</div>

			);
		} else {
			return (<Redirect to='/profile' />)
		}

	}
}

const mapStateToProps = (state) => ({
	registerSuccess: state.registerSuccess,
	registerFailure: state.registerFailure
});

const mapDispatchToProps = dispatch => bindActionCreators({
	register
}, dispatch);

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SignUp);
