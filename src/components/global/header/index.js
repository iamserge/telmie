import { h, Component } from 'preact';
import { Link } from 'preact-router';
import style from './style.scss';
import Search from '../search';
import { connect } from 'preact-redux';
import { bindActionCreators } from 'redux';
import { hideSearchBox } from '../../../actions';
import { apiRoot } from '../../../api';
import FontAwesome from 'react-fontawesome';


class Header extends Component {
	render() {
		const user = this.props.userData;
		return (
			<header id={style.header} className='uk-navbar uk-navbar-container'>
				<div className="uk-navbar-left">
					<Link href="/" id={style.logo}>
						<img src="/assets/logo.png" alt="Telmie App" />
					</Link>
					<ul className="uk-navbar-nav" id={style.leftNav}>
						<li><Link href="/">Home</Link></li>
						<li><Link href="/about-us">About us</Link></li>
						<li><Link href="/help">FAQ</Link></li>
					</ul>
				</div>

				<div className="uk-navbar-right">
					<Search hiddenSearchBox = {this.props.hiddenSearchBox} hideSearchBox = { this.props.hideSearchBox }/>
					 { (Object.keys(user).length === 0)  ? (
						<nav>
							<ul className="uk-navbar-nav">
								<li><Link href="/" id={style.signUp}>Sign up</Link></li>
								<li><Link href="/log-in">Login</Link></li>
							</ul>
						</nav>
					) : (
						<div className={style.loggedInContainer}>
							<div className={style.greeting}>
								{ user.name } { user.lastName }
							</div>
							<FontAwesome name='caret-down' />
							<div className={style.avatar}>

								{(user.avatar != null) ? (
									<img src={apiRoot + 'image/' + user.avatar.id} alt={user.name + ' ' + user.lastName} />
								) : (
									<img src="/assets/nouserimage.jpg" alt={user.name + ' ' + user.lastName} />
								)}

							</div>
							<div className={style.dropdown + ' uk-dropdown'}>
							    <ul className="uk-nav uk-dropdown-nav">
							        <li><Link href="/profile">My Account</Link></li>
											<li><Link href="/activity">Activity</Link></li>
											<li><Link href="/transactions">Transactions</Link></li>
											<li><Link href="/edit-profile">Edit Profile</Link></li>
							        <li className="uk-nav-divider"></li>
							        <li><a href="#">Log out</a></li>
							    </ul>
							</div>

						</div>
					)}
				</div>


			</header>
		);
	}
}




const mapStateToProps = (state) => ({
	hiddenSearchBox: state.hiddenSearchBox,
	userData: state.loggedInUser
});


const mapDispatchToProps = dispatch => bindActionCreators({
	hideSearchBox
}, dispatch);


export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Header);
