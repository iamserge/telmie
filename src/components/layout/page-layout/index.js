import { h, Component } from 'preact';
import Helmet from 'preact-helmet';
import pageLayout from './style';
import { getPageLayout } from '../../../localactions/layout';

import Slot from '../layout-slot';

export default class PageLayout extends Component {
	constructor(props){
		super(props);

		this.state = {
			layout: {},
			loading: true
		};
	}

	componentDidMount(){
		getPageLayout(this.props.pageName).then(layout => {
			this.setState({
				layout,
				loading: false
			});
		});
	}

	render({ }, { layout={}, loading }) {
		return (
			<div>
				{ !loading ? (
					<div class={pageLayout.layoutWrapper}>
						{
							layout.metaData &&
							<Helmet
								title={layout.metaData.title}
								meta={[
									{ name: 'description', content: layout.metaData.metaDescription },
									{ name: 'keywords', content: layout.metaData.metaKeyword }
								]}
							/>
						}
						{layout.widgets && Object.keys(layout.widgets).map(slot => (<Slot slot={slot} espots={layout.widgets[slot]} />))}
					</div>
				) : (
					<div className="spinner" />
				)}
			</div>
		);
	}
}
