import { h, Component } from 'preact';
import Helmet from 'preact-helmet';
import { bindActionCreators } from 'redux';
import { connect } from 'preact-redux';

import style from './style.scss';
import { logIn } from '../../actions/user';
import { route } from 'preact-router';
import { getTransactions } from '../../actions/user';
import Transactions from '../../components/profile/transactions';





class AllTransactions extends Component {

	constructor(props) {
		super(props);

	}
	componentDidMount(){
		this.props.getTransactions(this.props.userData.userAuth);
	}
	componentWillReceiveProps(nextProps) {

	}
	render() {
		const user = this.props.userData;
		return (
			<div id="profile" className="uk-container uk-container-small" >
				<Transactions transactions = { this.props.transactions } title="All transactions"/>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	userData: state.loggedInUser,
	transactions: state.loggedInUserTransactions
});

const mapDispatchToProps = dispatch => bindActionCreators({
	getTransactions
}, dispatch);

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AllTransactions);
