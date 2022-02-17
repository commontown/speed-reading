import { useEffect, useState } from "react";
import { useSelector } from "react-redux"
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { dispatch } from 'framework';
import { config } from 'config'
import './question.scss';
import QuizArrowLeft from '../../assets/contentPage/quiz_arrow_left.png';
import QuizArrowRight from '../../assets/contentPage/quiz_arrow_right.png';

const Alert = (props) => {
	return <MuiAlert elevation={6} variant="filled" {...props} />;
}
let timer
export default function Question(props) {
	const { questionTimeTotal, read_time } = useSelector(({ counter }) => counter) || {};
	const { result } = useSelector(({ someone }) => someone.score) || {};
	const [questionIndex, setQuestionIndex] = useState(0)
	const [alertOpen, setAlertOpen] = useState(false);
	const [alertText, setAlertText] = useState("this is first quiz");
	const { articleInfo } = useSelector(({ article }) => article) || {};
	// const { questionList } = useSelector(({ article }) => article.articleInfo) || {};
	const { quiz_content } = useSelector(({ article }) => article.speedread.passage) || {};
	const [doneBtn, setdoneBtn] = useState(false);					//" I'm Done "按钮是否禁用的状态
	const [alertValidate, setAlertValidate] = useState(false); // 弹窗提示是否打开的状态
	const { passage } = useSelector(({ article }) => article.speedread) || {};
	const [initQuestionTime, setInitQuestionTime] = useState(0)

	useEffect(() => {
		setInitQuestionTime(questionTimeTotal)
		timer = setInterval(() => {
			dispatch('counter/incr_delay', { data: { delta: 1 } });
		}, 1000)
	}, []);
	useEffect(() => {
		if (questionTimeTotal <= 0) {
			clearInterval(timer)
			// 计算答题选项
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
			dispatch('counter/changePageStatus', { status: 3 });
			const quiz_time = initQuestionTime - questionTimeTotal
			dispatch('counter/usedQuizTime', { quiz_time: quiz_time });
			// 向completePassage接口发送数据
			dispatch('someone/score', { data: { score: null } });
			dispatch('someone/fetch', { address: `completePassage&pid=${passage._id}&read_time=${read_time}&quiz_time=${quiz_time}&ans=${stuAnswers}`, state: "score" });
			fetch(`${config.api.someone.index}/completePassage&pid=${passage._id}&read_time=${read_time}&quiz_time=${quiz_time}&ans=${stuAnswers}`, {
				method: "GET",
				credentials: "include"
			}).then(res=>{
				props.history.push("/question-end")
			}).catch((e)=>{
				console.log(e)
			})
		}
	}, [questionTimeTotal]);
	// 卸载组件清除定时器
	useEffect(() => {
		return () => {
			clearInterval(timer)
		}
	}, [])
	/**
	 *  效验问题选项的status状态
	 * */
	const handleValidate = () => {
		let Check = []
		quiz_content.forEach((item) => {
			item.choices.forEach((subitem) => {
				if (subitem.status == true) {
					Check.push(subitem.status)
				}
			})
		})
		if (Check.length === quiz_content.length) {
			setdoneBtn(true)
		}
	}
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
		if (questionIndex < quiz_content.length - 1) {
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
		quiz_content[questionIndex].choices.forEach(item => {
			item.status = false
		})
		quiz_content[questionIndex].choices[index].status = true
		dispatch('article/setArticle', { article })
		handleValidate()
	};
	const toQuestionEndPage = () => {
		if (doneBtn) {
			clearInterval(timer)
			// 计算答题选项
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
			// 计算答题时间
			const quiz_time = initQuestionTime - questionTimeTotal
			dispatch('counter/usedQuizTime', { quiz_time: quiz_time });
			// 向completePassage接口发送数据
			dispatch('someone/score', { data: { score: null } });
			dispatch('someone/fetch', { address: `completePassage&pid=${passage._id}&read_time=${read_time}&quiz_time=${quiz_time}&ans=${stuAnswers}`, state: "score" });
			fetch(`${config.api.someone.index}/completePassage&pid=${passage._id}&read_time=${read_time}&quiz_time=${quiz_time}&ans=${stuAnswers}`, {
				method: "GET",
				credentials: "include"
			}).then(res=>{
				props.history.push("/question-end")
			}).catch((e)=>{
				console.log(e)
			})
		} else {
			setAlertValidate(true)
		}
	}
	/**
	 *	关闭弹窗提示
	 */
	const handleCloseAlertValidate = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}
		setAlertValidate(false)
	};
	return (
		<div className="right-question">
			<div className="title-area">
				{
					questionIndex == 0 ?
						<img src={QuizArrowLeft} alt="QuizArrowLeft" onClick={toPreQuestion} style={{ visibility: "hidden" }} />
						: <img src={QuizArrowLeft} alt="QuizArrowLeft" onClick={toPreQuestion} />
				}
				<span>{`Questions ${questionIndex + 1}  of ${quiz_content.length}`}</span>
				{
					questionIndex == quiz_content.length - 1 ?
						<img src={QuizArrowRight} alt="QuizArrowLeft" onClick={toNextQuestion} style={{ visibility: "hidden" }} />
						: <img src={QuizArrowRight} alt="QuizArrowLeft" onClick={toNextQuestion} />
				}
			</div>
			{
				<p className="content-area">{quiz_content[questionIndex].body}</p>
			}
			<div className="option-area">
				<ul>
					{
						quiz_content[questionIndex].choices.map((item, index) => {
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
				questionIndex == quiz_content.length - 1 ?
					<div className="btn-area" onClick={toQuestionEndPage}>
						<div className={doneBtn ? "done-button" : "nodone-button"}>I'm Done</div>
					</div> : null
			}

			<Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center' }} open={alertOpen} autoHideDuration={3000} onClose={handleClose}>
				<Alert severity="warning" onClose={handleClose}>
					{alertText}
				</Alert>
			</Snackbar>
			<Snackbar className="Validate-tips" anchorOrigin={{ vertical: 'top', horizontal: 'center' }} open={alertValidate} autoHideDuration={3000} onClose={handleCloseAlertValidate}>
				<Alert severity="info" onClose={handleCloseAlertValidate}>
					There are still questions left unselected
				</Alert>
			</Snackbar>
		</div>
	)
}
