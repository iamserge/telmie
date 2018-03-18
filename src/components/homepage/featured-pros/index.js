import { h, Component } from 'preact';
import { Link } from 'preact-router';
import style from './style.scss';
import { route } from 'preact-router';
import FontAwesome from 'react-fontawesome';
import YouTube from 'react-youtube';
import Carousel from 'nuka-carousel';

export default class FeaturedPros extends Component {
	constructor(props) {
		super(props);
		this.renderPro = this.renderPro.bind(this);
	}
	extractProInfo(pro){
		let proInfo = pro.name_profession_videoid_userid.split('_');
		return {
			name: proInfo[0],
			profession: proInfo[1],
			videoId: proInfo[2],
			userId: proInfo[3]
		}
	}
	renderPro(pro) {
		let proInfo = this.extractProInfo(pro);
		return (
			<div className={style.pro}>
				<Link href={"/pro/" + proInfo.userId}>
					<img src={"https://img.youtube.com/vi/" + proInfo.videoId  + "/mqdefault.jpg"} alt={proInfo.name} />
					<h3>{proInfo.name},</h3>
					<h4>{proInfo.profession}</h4>
				</Link>
			</div>
		)
	}
	render() {
		let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1
    };
		return (
			<div className={style.featuredPros}>
				<div  className="uk-container uk-container-small uk-container-inner" >
					<h2>Featured Pros</h2>
				</div>
				<div  className="uk-container uk-container-full uk-container-inner" >
					<Carousel slidesToShow={5} initialSlideHeight ="300" >
						{ this.props.pros.map(pro => this.renderPro(pro))}
					</Carousel>
				</div>

			</div>
		)
	}
}
