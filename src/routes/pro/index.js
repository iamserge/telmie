import { h, Component } from 'preact';
import Helmet from 'preact-helmet';
import { bindActionCreators } from 'redux';
import { connect } from 'preact-redux';
import { getUserDetails } from '../../api/users';
import style from './style.scss';
import ProDetails from '../../components/pro/pro-details';

class Search extends Component {
	constructor(props){
		super(props);
		this.state = {
			pro: {}
		}
	}

	componentDidMount(){
		const that = this;
		getUserDetails(this.props.userId)
	  .then(function(data) {
	    that.setState({ pro: data });
		});
	}
	componentWillReceiveProps(nextProps){

	}
	render() {

		return (
			<div id="pro" className="uk-container" >
				<Helmet
					title="Telmie | Pro"
				/>
				{(Object.keys(this.state.pro).length === 0) ? (
					<div></div>
				) : (
					<ProDetails person = { this.state.pro } />
				)}

			</div>

		);
	}
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Search);
