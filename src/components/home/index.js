import { h } from 'preact';
import style from './style.scss';

export default () => {
	return (
		<div className="uk-container uk-container-large" id={style.home}>
			<h2 class="uk-heading-primary" id={style.mainTitle}>
				Professional services in one place.<br/>
				<span>Search, select, call</span>
			</h2>
		</div>
	);
};
