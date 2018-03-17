import { h, Component } from 'preact';
import { Link } from 'preact-router';
import style from './style.scss';
import Spinner from '../../global/spinner';
import Activity from '../activity'

export default class AllActivity extends Component {

	render({allActivity}) {
		return (
			<div className={style.activityList}>
				<div className={style.inner}>
					<div className={style.header}>
						<div className={style.type}>Type</div>
						<div className={style.contact}>Contact</div>
						<div className={style.date}>Date</div>
						<div>Duration</div>
						<div>Price</div>
						<div>Status</div>
					</div>
					{ allActivity.length > 0 && allActivity.map(activity => (
						<Activity key={ activity.id } activity={ activity }/>
					))}
					{ allActivity.length == 0 && (
						<div className={style.empty}>No recent activity</div>
					)}
				</div>
			</div>
		)
	}
}
