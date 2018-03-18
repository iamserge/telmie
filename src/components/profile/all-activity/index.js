import { h, Component } from 'preact';
import { Link } from 'preact-router';
import style from './style.scss';
import Spinner from '../../global/spinner';
import Activity from '../activity'
import Pagination from '../pagination'

export default class AllActivity extends Component {

	render({activity}) {
		return (
			<div className={style.activityList}>
				<div className={style.activityHeader}>
					<button onClick={()=>{this.props.showConsulted()}} className={ !this.props.proCalls && style.selected }>I consulted</button>
					<button onClick={()=>{this.props.showConsultedMe()}} className={ this.props.proCalls && style.selected }>Consulted me</button>
				</div>
				<div className={style.inner}>
					<div className={style.header}>
						<div className={style.type}>Type</div>
						<div className={style.contact}>Contact</div>
						<div className={style.date}>Date</div>
						<div>Duration</div>
						<div>Price</div>
						<div>Status</div>
					</div>
					{ activity.length > 0 && activity.map(activity => (
						<Activity key={ activity.id } activity={ activity }/>
					))}
					{ activity.length == 0 && !this.props.loading && (
						<div className={style.empty}>No recent activity</div>
					)}

					{ activity.length == 0 && this.props.loading && (
						<div className={style.spinnerContainer}>
							<Spinner />
						</div>
					)}

				</div>
					{ activity.length > 0 && (
						<Pagination
							list = { this.props.allActivity }
							changePage = { this.props.changePage }
							nextPage = { this.props.nextPage }
							previousPage = { this.props.previousPage }
							currentPage = { this.props.currentPage }
							max = {this.props.max}
							/>
					)}
			</div>
		)
	}
}
