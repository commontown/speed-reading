import { useEffect } from "react";
import { useSelector } from "react-redux"
import { dispatch } from "framework"
import './styles.scss';
import Content from './content';
import TimeOver from './timeOver';
import Question from './question';
import background from '../../assets/background.png'
// let timer
export default function ContentPage(props) {
	const { pageStatus } = useSelector(({ counter }) => counter) || {};
	const { passage } = useSelector(({ article }) => article.speedread) || {};
	// useEffect(() => {
	// 	dispatch('article/fetch');
	// }, []);
	const getPageView = (status) => {
		let view
		switch (status) {
			case 1:
				view = <Content />
				break;
			case 2:
				view = <TimeOver {...props} />
				break;
			case 3:
				view = <Question {...props} />
				break;
			default:
				break;
		}
		return view
	}

	return (
		<div className="ContentPage">
			<div className="left-img">
				<img src={passage.image_url ? `https://dd.ca4dev.url3.net${passage.image_url}` : background} alt="" />
			</div>
			{
				getPageView(pageStatus)
			}
		</div>
	)
}
