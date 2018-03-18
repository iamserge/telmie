import { h, Component } from 'preact';
import { Link } from 'preact-router';
import style from './style.scss';
import { route } from 'preact-router';
import FontAwesome from 'react-fontawesome';
import YouTube from 'react-youtube';

export default class Minutes extends Component {

	render() {
		return (
			<div className={style.minutes}>
				<div>
						<span>2545</span> minutes served
				</div>
			</div>
		)
	}
}
