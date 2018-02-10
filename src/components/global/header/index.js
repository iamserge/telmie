import { h, Component } from 'preact';
import { Link } from 'preact-router';
import style from './style.scss';
import Search from '../search';

export default class Header extends Component {
	render() {
		return (
			<header id={style.header} className='uk-navbar uk-navbar-container'>
				<div className="uk-navbar-left">
					<Link href="/" id={style.logo}>
						<img src="/assets/logo.png" alt="Telmie App" />
					</Link>
					<ul className="uk-navbar-nav" id={style.leftNav}>
						<li><Link href="/about-us">Home</Link></li>
						<li><Link href="/about-us">About us</Link></li>
						<li><Link href="/faq">FAQ</Link></li>
					</ul>
				</div>

				<div className="uk-navbar-right">
					<Search />
					<nav>
						<ul className="uk-navbar-nav">
							<li><Link href="/" id={style.signUp}>Sign up</Link></li>
							<li><Link href="/profile">Login</Link></li>
						</ul>
					</nav>
				</div>
			</header>
		);
	}
}
