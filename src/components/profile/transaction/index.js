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

	if (minutes.length == 1) minutes = '0' + minutes;
	if (seconds.length == 1) seconds = '0' + seconds;
	return minutes + ':' + seconds;

}
export default class transaction extends Component {

	render({transaction}) {
		const contact = transaction.contact;
		return (
			<div className={style.transaction + ' ' + ( transaction.moneyCame > 0 && style.profit )}>
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
				<div className={style.date}> { convertDate(transaction.date) }</div>
				<div>
					{transaction.duration != null ? (
						<span>
							{convertDuration(transaction.duration)}
						</span>
					) : (
						<span>00:00</span>
					)}
				</div>
				<div>
					<span>
						{ transaction.moneyCame > 0 ? (
							<span>
						 		+&pound;{transaction.moneyCame.toFixed(2)}
							</span>
						) : (
							<span>
							 -&pound;{transaction.moneyGone.toFixed(2)}
							</span>
						)}

					</span>
				</div>

			</div>
		)
	}
}
