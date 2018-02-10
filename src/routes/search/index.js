import { h, Component } from 'preact';
import Helmet from 'preact-helmet';
import { bindActionCreators } from 'redux';
import { connect } from 'preact-redux';
import { getUsers } from '../../api/users';
import style from './style.scss';
import ProList from '../../components/search/pros-list';
import SideBar from '../../components/search/sidebar';
class Search extends Component {
	constructor(props){
		super(props);
		this.state = {
			pros: []
		}
	}

	componentDidMount(){
		const that = this;
		getUsers(this.props.searchTerm)
	  .then(function(data) {
	    that.setState({ pros: data });
		});
	}

	render() {

		return (
			<div id="search" className="uk-container uk-container" >
				<Helmet
					title="Telmie | Search"
				/>
				<h2>Showing results for: <span>{this.props.searchTerm}</span><span className="count"> ({this.state.pros.length} pros found)</span> </h2>
				<div id="searchContainer">
					<SideBar />
					<ProList pros = { this.state.pros } />
				</div>
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
