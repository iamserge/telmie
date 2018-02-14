import { h, Component } from 'preact';
import { Link } from 'preact-router';
import style from './style.scss';
import Switch from 'react-toggle-switch'

export default class Pagination extends Component {
	constructor(props){
		super(props);
	}

	toggleSwitch(switchName){
		this.setState({
			switched: switchName
		})
	}

	render() {
		return (
			<div id={style.pagination}>
				<a href="#" id={style.first}>First</a>
				<div id={style.pages}>
					<a href="#">Previous</a>
					<a href="#">1</a>
					<a href="#">2</a>
					<a href="#">Next</a>
				</div>
				<a href="#"  id={style.last}>Last</a>

			</div>
		)
	}
}
