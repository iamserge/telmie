import { h, Component } from 'preact';
import style from './style.scss';
import Spinner from '../../global/spinner';
import { Link } from 'preact-router';
import FontAwesome from 'react-fontawesome';
import { apiRoot } from '../../../api';
const convertDate = (date) => {
	let oldDate = new Date(date),
			newDate;
	newDate = (oldDate.getMonth() + 1) + '/' + oldDate.getDate() + '/' +  oldDate.getFullYear() + ' ' + oldDate.getHours() + ':' + oldDate.getMinutes();
	return newDate;

}

const convertDuration = (totalSeconds) => {
	let minutes = parseInt(totalSeconds / 60),
			seconds = totalSeconds - (minutes * 60);

	if (minutes.toString().length == 1) minutes = '0' + minutes;
	if (seconds.toString().length == 1) seconds = '0' + seconds;
	return minutes + ':' + seconds;

}
export default class Activity extends Component {

	render({activity}) {
		const contact = activity.contact;
		return (
			<div className={style.activity}>
				<div className={style.type}>
					{(activity.type == 'PRO') ? (
						<span aria-hidden="true" class="fa fa-arrow-right" title="You contacted"></span>
					) : (
						<span aria-hidden="true" class="fa fa-arrow-left" title="Contacted you"></span>
					)}
				</div>
				<div className={style.contact}>
					<div className={style.avatar}>
						{(contact.avatar != null) ? (
							<img src={apiRoot + 'image/' + contact.avatar.id} alt={contact.name + ' ' + contact.lastName} />
						) : (
							<img src="/assets/nouserimage.jpg" alt={contact.name + ' ' + contact.lastName} />
						)}
					</div>
					<div className={style.info}>
						<h3>{contact.name + ' ' + contact.lastName}</h3>

							{contact.pro != null && (
								<div>
									{contact.pro.profession} <span className={style.profession}>{contact.pro.category}</span>
								</div>
							)}
					</div>
				</div>
				<div className={style.date}> { convertDate(activity.date) }</div>
				<div>
					{activity.duration != null ? (
						<span>
							{convertDuration(activity.duration)}
						</span>
					) : (
						<span>00:00</span>
					)}
				</div>
				<div>
					{activity.amount != null ? (
						<span>
							£{activity.amount.toFixed(2)}
						</span>
					) : (
						<span>
							£0.00
						</span>
					)}
				</div>
				<div>{activity.status}</div>
			</div>
		)
	}
}
