
import './questionEnd.scss';
import greatLeft from '../../assets/contentPage/great_left.png';
import greatRight from '../../assets/contentPage/great_right.png';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { dispatch } from 'framework';

export default function QuestionEnd(props) {
	const { result } = useSelector(({ someone }) => someone.score) || {};
	const { quiz_content, answers } = useSelector(({ article }) => article.speedread.passage) || {};
	const [stuTF, setStuTF] = useState([])
	const [readingPoint, setReadingPoint] = useState(500)
	const [AnsweringPoint, setAnsweringPoint] = useState(0)

	const { quiz_time, read_time, contentTimeTotal, questionTimeTotal } = useSelector(({ counter }) => counter) || {};
	useEffect(() => {
		// 前端需要再次计算正确的答案，
		let stuAnswers = []
		let letterArr = []
		for (let i = 65; i < 91; i++) {
			letterArr.push(String.fromCharCode(i))
		}

		quiz_content.forEach((item) => {
			item.choices.forEach((subitem, index) => {
				if (subitem.status == true) {
					stuAnswers.push(letterArr[index])
				}
			})
		})
		if (!stuAnswers) {
			for (let index = 0; index < quiz_content.length; index++) {
				stuAnswers.push(false)

			}
		}
		if (answers) {
			answers.split(',').forEach((item, index) => {
				stuAnswers[index] = item == stuAnswers[index]
			})
		}
		// console.log(stuAnswers)

		setStuTF(stuAnswers)
	}, [])



	useEffect(() => {
		let read_score = readingPoint + contentTimeTotal * 10
		setReadingPoint(read_score)
		let quiz_score = handlecalculate() * 100 + questionTimeTotal * 10
		console.log(handlecalculate());
		setAnsweringPoint(quiz_score)
	}, [stuTF])
	const toTextPage = () => {
		// 重置时间
		dispatch('counter/Reset', { contentTimeTotal: 30, questionTimeTotal: 20, pageStatus: 1 });
		props.history.push("/")
	}
	const toLeaderboard = () => {
		props.history.push("/leader-board")
	}

	const toStats = () => {
		props.history.push("/statistics")
	}

	/**
	 * 
	 * @returns 答对的个数 没有答对的返回 0
	 */
	const handlecalculate = () => {
		var countedNames = stuTF.reduce((obj, name) => {
			if (name in obj) {
				obj[name]++
			} else {
				obj[name] = 1
			}
			return obj
		}, {})
		if (!countedNames.true) {
			return 0
		}
		return countedNames.true
	}

	/**
 * 计算百分比
 * @param   {number} num   分子
 * @param   {number} total 分母
 * @returns {number} 返回数百分比
 */
	function Percentage(num, total) {
		if (num == 0 || total == 0) {
			return 0;
		}
		return ((num / total * 10000) / 100.00);// 小数点后两位百分比
	}

	/**
	 * 
	 * @returns encouraging words (鼓励词)
	 */
	const handleEncouragingWords = () => {
		let EncouragingWords = {
			"0-49": "TRY HARDER!",
			"50-69": "GOOD!",
			"70-99": "GREAT!",
			"100-100": "PERFECT!"
		}
		let stuPercentage = result
		if (0 <= stuPercentage && stuPercentage < 50) {
			return EncouragingWords["0-49"]
		} else if (50 <= stuPercentage && stuPercentage < 70) {
			return EncouragingWords["50-69"]
		} else if (70 <= stuPercentage && stuPercentage < 100) {
			return EncouragingWords["70-99"]
		} else if (100 <= stuPercentage && stuPercentage <= 100) {
			return EncouragingWords["100-100"]
		}
	}

	/**
	 * 计算得分 score
	 * @returns Total Point
	 */
	const TotalPoint = () => {
		let total_score = readingPoint + AnsweringPoint
		return String(total_score)
	}
	return (
		<div className="questionEnd-viewer">
			<div className="center-area">

				<div className="center-word">
					<div className="center-top">
						<img src={greatLeft} alt="greatLeft" />
						<p className="area-title">{handleEncouragingWords()}</p>
						<img src={greatRight} alt="greatRight" />
					</div>
					<p className="area-subtitle">Your Total Point is</p>
					<p className="score-num">{TotalPoint()}</p>
					<div className="score-detail">
						<p className="score-detail-tit">Reading</p>
						<div>
							<span>Time: </span>
							<span className="blue">{read_time} Second,&nbsp;</span>
							<span>Point: </span>
							<span className="blue">{String(readingPoint)}</span>
						</div>
						<p className="score-detail-tit">Answering</p>
						<div>
							<span>Time: </span>
							<span className="blue">{quiz_time} Second,&nbsp;</span>
							<span>Score: </span>
							<span className="blue">{handlecalculate()}/{quiz_content.length},&nbsp;</span>
							<span>Point: </span>
							<span className="blue">{AnsweringPoint}</span>
						</div>
					</div>
					<div className="btn-area">
						<div className="Retry-button" onClick={toTextPage}>
							<span>Retry</span>
						</div>
						<div className="Leaderboard-button" onClick={toLeaderboard}>
							<span>Leaderboard</span>
						</div>
						<div className="Stats-button" onClick={toStats}>
							<span>Stats</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

