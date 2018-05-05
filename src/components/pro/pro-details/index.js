import { h, Component } from 'preact';
import { Link } from 'preact-router';
import style from './style.scss';
import ReactStars from 'react-stars';
import { apiRoot } from '../../../api'
import { route } from 'preact-router';
import FontAwesome from 'react-fontawesome';
import YouTube from 'react-youtube';

export default class Pro extends Component {

	render({person}) {
		let youtubeOptions = {
			width: '1200',
			height: '600'
		}
		if (window.innerWidth < 880) {
		 	youtubeOptions = {
				width: '100%',
				height: '300px'
			}
		}
		return (
			<div class={style.person}>
				<div className={style.imageContainer}>
					<div className={style.image}>
						{ (person.avatar != null) ? (
							<img src={apiRoot + 'image/' + person.avatar.id} alt={person.name + ' ' + person.lastName} />
						) : (
							<img src="/assets/nouserimage.jpg" alt={person.name + ' ' + person.lastName} />
						)}
					</div>
					<span className={style.note}>In order to call pro, please download our <a target="_blank" href="https://itunes.apple.com/us/app/telmie/id1345950689">iOS app</a></span>
					{this.props.shortlisted ? (
						<span className={style.success}><span aria-hidden="true" class="fa fa-check"></span> Added</span>
					) : (
						<button  id={style.callPro} className="uk-button" onClick={() => {this.props.addToShortlist(person.id)}}>Shortlist</button>
					)}

				</div>
				<div className={style.info}>
					<div className={style.nameAndTitle}>
						<span className={style.proRoundel}>PRO</span>
						<h2>{person.name} {person.lastName}</h2>
						<h3>{person.pro.profession}</h3>
					</div>
					<div className={style.prof}>
						<div>{person.pro.category}</div>
						<FontAwesome name="angle-right"/>
						<div>{person.pro.profession}</div>
					</div>
					<p className="description">
						{person.pro.professionDescription}
					</p>
				</div>
				<div className={style.priceContainer}>
					<div className={style.price}>
						&pound;{person.pro.costPerMinute} /<span>min</span>
					</div>
					<div className={style.raiting}>
						<span>
							{(person.pro.review != null) ? person.pro.review.count : 0} sessions
						</span>
						<ReactStars
						  count={5}
						  value={(person.pro.review != null) ? person.pro.review.rating : 0}
							edit={false}
							size={25} />
					</div>
				</div>
				{person.pro.video && person.pro.video.length > 0 && (
					<div className={style.videoContainer}>
						<YouTube videoId={ person.pro.video } opts = {youtubeOptions} />
					</div>
				)}

			</div>
		)
	}
}
