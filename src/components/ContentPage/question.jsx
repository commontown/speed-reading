import { useEffect, useState } from "react";
import { useSelector } from "react-redux"
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { dispatch } from 'framework';
import './question.scss';
import QuizArrowLeft from '../../assets/contentPage/quiz_arrow_left.png';
import QuizArrowRight from '../../assets/contentPage/quiz_arrow_right.png';

const Alert = (props) => {
	return <MuiAlert elevation={6} variant="filled" {...props} />;
}
let timer
export default function Question(props) {
	const { questionTimeTotal } = useSelector(({ counter }) => counter) || {};
	const [questionIndex, setQuestionIndex] = useState(0)
	const [alertOpen, setAlertOpen] = useState(false);
	const [alertText, setAlertText] = useState("this is first quiz");
	const { articleInfo } = useSelector(({ article }) => article) || {};
	const { questionList } = useSelector(({ article }) => article.articleInfo) || {};
	useEffect(() => {
		timer = setInterval(() => {
			dispatch('counter/incr_delay', { data: { delta: 1 } });
		}, 1000)
	}, []);
	useEffect(() => {
		if (questionTimeTotal < 1) {
			clearInterval(timer)
			dispatch('counter/changePageStatus', { status: 3 });
		}
	}, [questionTimeTotal]);

	// 上一题
	const toPreQuestion = () => {
		if (questionIndex > 0) {
			let index = questionIndex - 1
			setQuestionIndex(index)
		} else {
			setAlertOpen(true)
		}
	}
	// 下一题
	const toNextQuestion = () => {
		if (questionIndex < questionList.length - 1) {
			let index = questionIndex + 1
			setQuestionIndex(index)
		} else {
			setAlertText("this is last quiz")
			setAlertOpen(true)
		}
	}
	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}
		setAlertOpen(false)
	};
	const hendleClickOptionItem = (index, e) => {
		let arrStr = JSON.stringify(articleInfo)
		let article = JSON.parse(arrStr)
		article.questionList[questionIndex].options.forEach(item => {
			item.status = false
		})
		article.questionList[questionIndex].options[index].status = true
		dispatch('article/setArticle', { article })
	};
	const toQuestionEndPage = () => {
		props.history.push("/question-end")
	}
	return (
		<div className="right-question">
			<div className="title-area">
				{
					questionIndex == 0 ?
						<img src={QuizArrowLeft} alt="QuizArrowLeft" onClick={toPreQuestion} style={{ visibility: "hidden" }} />
						: <img src={QuizArrowLeft} alt="QuizArrowLeft" onClick={toPreQuestion} />
				}
				<span>{`Questions ${questionIndex + 1}  of ${questionList.length}`}</span>
				{
					questionIndex == questionList.length - 1 ?
						<img src={QuizArrowRight} alt="QuizArrowLeft" onClick={toNextQuestion} style={{ visibility: "hidden" }} />
						: <img src={QuizArrowRight} alt="QuizArrowLeft" onClick={toNextQuestion} />
				}
			</div>
			{
				<p className="content-area">{questionList[questionIndex].question}</p>
			}
			<div className="option-area">
				<ul>
					{
						questionList[questionIndex].options.map((item, index) => {
							return (
								<li
									key={index}
									className={item.status ? "option-item-active" : "option-item"}
									onClick={(e) => hendleClickOptionItem(index, e)}
								>
									{item.title}
								</li>
							)
						})
					}
				</ul>
			</div>
			{
				questionIndex == questionList.length - 1 ?
					<div className="btn-area" onClick={toQuestionEndPage}>
						<div className="done-button">I'm Done</div>
					</div> : null
			}

			<Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center' }} open={alertOpen} autoHideDuration={3000} onClose={handleClose}>
				<Alert severity="warning" onClose={handleClose}>
					{alertText}
				</Alert>
			</Snackbar>
		</div>
	)
}
