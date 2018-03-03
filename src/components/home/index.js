import { h } from 'preact';
import style from './style.scss';

export default () => {
	return (
		<div className="uk-container uk-container-large" id={style.home}>
			<h2 class="uk-heading-primary" id={style.mainTitle}>
				Hi, I am Telmie
			</h2>
		</div>
	);
};
