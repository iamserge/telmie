import { h, Component } from 'preact';
import { Link } from 'preact-router';
import style from './style.scss';
import { route } from 'preact-router';
import FontAwesome from 'react-fontawesome';
import Vimeo from 'react-vimeo';
const PlayButton = <button className={style.playButton}>
	<h2>
		How it works
		<span>Play video</span>
	</h2>
</button>;

export default class Video extends Component {

	render() {
		return (

			<div className={style.videoContainer} >
				<Vimeo videoId={ this.props.videoId } playButton={PlayButton}/>
			</div>
		)
	}
}
