
import './questionEnd.scss';
import greatLeft from '../../assets/contentPage/great_left.png';
import greatRight from '../../assets/contentPage/great_right.png';

export default function QuestionEnd(props) {
	const toTextPage = () => {
		props.history.push("/")
	}
	const toLeaderboard = () => {
		props.history.push("/leader-board")
	}

	return (
		<div className="questionEnd-viewer">
			<div className="center-area">

				<div className="center-word">
					<div className="center-top">
						<img src={greatLeft} alt="greatLeft" />
						<p className="area-title">GREAT!</p>
						<img src={greatRight} alt="greatRight" />
					</div>
					<p className="area-subtitle">Your Total Point is</p>
					<p className="score-num">900</p>
					<div className="score-detail">
						<p className="score-detail-tit">Reading</p>
						<div>
							<span>Time: </span>
							<span className="blue">60 Seconds,</span>
							<span>Point: </span>
							<span className="blue">500</span>
						</div>
						<p className="score-detail-tit">Answering</p>
						<div>
							<span>Time: </span>
							<span className="blue">110 Seconds,</span>
							<span>Score: </span>
							<span className="blue">4/5,</span>
							<span>Point: </span>
							<span className="blue">400</span>
						</div>
					</div>
					<div className="btn-area">
						<div className="Retry-button" onClick={toTextPage}>
							<span>Retry</span>
						</div>
						<div className="Leaderboard-button" onClick={toLeaderboard}>
							<span>Leaderboard</span>
						</div>
						<div className="Stats-button" onClick={toTextPage}>
							<span>Stats</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

