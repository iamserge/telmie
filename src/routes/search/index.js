import { h, Component } from 'preact';
import Helmet from 'preact-helmet';
import { bindActionCreators } from 'redux';
import { connect } from 'preact-redux';
import { getPros } from '../../api/pros';
import style from './style.scss';
import ProList from '../../components/search/pros-list';
import SideBar from '../../components/search/sidebar';
import Pagination from '../../components/search/pagination';
import Spinner from '../../components/global/spinner';
class Search extends Component {
	constructor(props){
		super(props);
		this.state = {
			pros: [],
			searchTerm: this.props.searchTerm || '',
			loading: true
		}
	}

	componentDidMount(){
		const that = this;
		getPros(this.props.searchTerm).then(function(data) {
	    that.setState({
				pros: data,
				searchTerm: that.props.searchTerm,
				loading: false
			});
		}).catch(function(error) {
				that.setState({
					pros: [],
					searchTerm: that.props.searchTerm,
					loading: false
				})
		});
	}
	componentWillReceiveProps(nextProps){
		if (nextProps.searchTerm != this.state.searchTerm) {
			const that = this;
			that.setState({pros: []});

			getPros(nextProps.searchTerm).then(function(data) {
		    that.setState({
					pros: data,
					searchTerm: nextProps.searchTerm,
					loading: false
				})
			}).catch(function(error) {
					that.setState({
						pros: [],
						searchTerm: nextProps.searchTerm,
						loading: false
					})
			});
		}
	}
	render() {

		return (
			<div id="search" className="uk-container" >
				<Helmet
					title="Telmie | Search"
				/>
				<h2>Results for: <span>{this.props.searchTerm} </span><span className="count">{this.state.pros.length} {(this.state.pros.length == 1) ? 'pro' : 'pros'} found</span> </h2>
				<div id="searchContainer">
					<SideBar />
					{ (this.state.loading) ? (
						<Spinner />
					) : (
						<div>
							{this.state.pros.length > 0 ? (
								<div>
									<ProList pros = { this.state.pros } />
									<Pagination />
								</div>
							) : (
								<div className="empty">Sorry, no pros found for <span>{this.props.searchTerm}</span></div>
							)}
						</div>
					)}



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
