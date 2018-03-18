import { h, Component } from 'preact';
import Helmet from 'preact-helmet';
import { bindActionCreators } from 'redux';
import { connect } from 'preact-redux';
import Prismic from 'prismic-javascript';
import PrismicReact from 'prismic-reactjs';
import Spinner from '../../components/global/spinner';
import HomeTitle from '../../components/homepage/home-title';
import Minutes from '../../components/homepage/minutes';
import FeaturedPros from '../../components/homepage/featured-pros';
import FeaturedServices from '../../components/homepage/featured-services';
import Video from '../../components/homepage/video';
import MoreInfo from '../../components/homepage/more-info';

import style from './style.scss';

class HomePage extends Component {
	constructor(props){
		super(props);
		this.state =  {
	    doc: null,
	    notFound: false,
	  }
	}
	componentDidMount(){
	//	window.scrollTo(0, 0);
		this.fetchPage(this.props);
	}
	componentWillReceiveProps(nextProps){
		if (this.props.prismicCtx == null && nextProps.prismicCtx != null) {
			this.fetchPage(nextProps);
		}

	}

	fetchPage(props) {
    if (props.prismicCtx) {
      // We are using the function to get a document by its uid
      return props.prismicCtx.api.getByID(props.uid).then((doc, err) => {
        if (doc) {
					console.log(doc);
          // We put the retrieved content in the state as a doc variable
          this.setState({ doc });
        } else {
          // We changed the state to display error not found if no matched doc
          this.setState({ notFound: !doc });
        }
      });
			/*
			return props.prismicCtx.api.query('').then(function(response) {
			   console.log(response);
			});*/
    }
    return null;
  }
	render() {

		if (this.state.doc) {
			const pageData = this.state.doc.data;
			return (
				<div id="homepage">
						{ typeof pageData.main_title != 'undefined' && pageData.main_title.length > 0 && typeof pageData['main_sub-title'] != 'undefined' && pageData['main_sub-title'].length > 0 && (
							<HomeTitle
								main_title = { pageData.main_title[0].text }
								main_sub-title = { pageData["main_sub-title"][0].text }
								/>
						) }
						<Minutes />
						<FeaturedPros pros = { pageData.featured_pros } />
						<FeaturedServices services = { pageData.featured_services } />
						<Video videoId = { pageData.main_video.video_id } />
						<MoreInfo />
				</div>

			);
		}
		return (
			<div  className="uk-container uk-container-small" id="staticPage" >
				<Spinner />
			</div>

		);

	}
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(HomePage);
