import { h, Component } from 'preact';
import { Link } from 'preact-router';
import style from './style.scss';
import { route } from 'preact-router';
import FontAwesome from 'react-fontawesome';
import YouTube from 'react-youtube';
import Carousel from 'nuka-carousel';

export default class FeaturedServices extends Component {
	constructor(props) {
		super(props);
	}
	renderService(service) {
		let serviceTitle = service.featured_service[0].text;
		let serviceText = service.featured_service[1].text;
		return (
			<div className={style.service}>
				<div className={style.left}>
					{serviceTitle}
				</div>
				<div className={style.right}>
					{serviceText}
				</div>
			</div>
		)
	}
	render() {

		return (
			<div className="uk-container uk-container-small uk-container-inner">
				<div className={style.featuredServices}>
					<h2>Featured services</h2>
					<div className={style.servicesContainer}>
						{ this.props.services.map(service => this.renderService(service))}
					</div>
				</div>
			</div>
		)
	}
}
