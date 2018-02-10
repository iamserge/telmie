import { h, Component } from 'preact';
import { Link } from 'preact-router';
import style from './style.scss';
import ReactStars from 'react-stars'
import { apiRoot } from '../../../api'


export default class Pro extends Component {
	render({person}) {
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
					<h3>{person.pro.profession} <span>{person.pro.category}</span></h3>
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
				<div className={style.price}>
					&pound;{person.pro.costPerMinute} /<span>min</span>
				</div>
			</div>
		)
	}
}
