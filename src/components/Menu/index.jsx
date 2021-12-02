import { useSelector } from "react-redux"
import { useEffect } from "react";
import './styles.scss';
import NextArrows from '../../assets/menu/next_arrows.png';
import QuizTimer from '../../assets/menu/quiz_timer.png';
import Rocket from '../../assets/menu/rocket.png';
let countNum
export default function Menu(props) {
	const { contentTimeTotal, questionTimeTotal, pageStatus } = useSelector(({ counter }) => counter) || {};
	useEffect(() => {
		if (pageStatus == 1) {
			countNum = contentTimeTotal
		} else {
			countNum = questionTimeTotal
		}
	}, [contentTimeTotal, questionTimeTotal, pageStatus]);

	const goBack = () => {
		props.history.goBack();
	};
	return (
		<div className="menu">
			<img src={NextArrows} alt="NextArrows" className="left-icon" onClick={goBack} />
			<div className="clock-icon-area">
				<img src={QuizTimer} alt="QuizTimer" className="clock-icon" />
				{
					countNum <= 10 ? <span> : {countNum}</span> : null
				}
			</div>
			<img src={Rocket} alt="Rocket" className="rocket-icon" />
		</div>
	)
}
