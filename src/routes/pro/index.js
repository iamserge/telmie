import { h, Component } from 'preact';
import Helmet from 'preact-helmet';
import { bindActionCreators } from 'redux';
import { connect } from 'preact-redux';
import { getProDetails } from '../../api/pros';
import style from './style.scss';
import ProDetails from '../../components/pro/pro-details';
import Spinner from '../../components/global/spinner';

class Search extends Component {
	constructor(props){
		super(props);
		this.state = {
			pro: {},
			loading: false
		}
	}

	componentDidMount(){
		const that = this;

		getProDetails(this.props.userId)
	  .then(function(data) {
	    that.setState({ pro: data, loading: false });
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
				{(Object.keys(this.state.pro).length === 0 || this.state.loading) ? (
					<Spinner />
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
