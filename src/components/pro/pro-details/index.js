import { h, Component } from 'preact';
import { Link } from 'preact-router';
import style from './style.scss';
import ReactStars from 'react-stars'
import { apiRoot } from '../../../api'
import { route } from 'preact-router';
import FontAwesome from 'react-fontawesome';
import YouTube from 'react-youtube';

export default class Pro extends Component {

	render({person}) {
		const youtubeOptions = {
			width: '1200',
			height: '600'
		}
		return (
			<div class={style.person}>
				<div className={style.image}>
					{ (person.avatar != null) ? (
						<img src={apiRoot + 'image/' + person.avatar.id} alt={person.name + ' ' + person.lastName} />
					) : (
						<img src="/assets/nouserimage.jpg" alt={person.name + ' ' + person.lastName} />
					)}
				</div>
				<div className={style.info}>
					<h2>{person.name} {person.lastName}</h2>
					<h3>{person.pro.profession}</h3>
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
