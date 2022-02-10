import { useSelector } from "react-redux"
import { useEffect, useState } from "react";
import './styles.scss';
import NextArrows from '../../assets/menu/next_arrows.png';
import QuizTimer from '../../assets/menu/quiz_timer.png';
import Rocket from '../../assets/menu/rocket.png';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle'
import { dispatch } from "framework";
let countNum
export default function Menu(props) {
	const { contentTimeTotal, questionTimeTotal, pageStatus } = useSelector(({ counter }) => counter) || {};
	const [open, setOpen] = useState(false)
	useEffect(() => {
		if (pageStatus == 1) {
			countNum = contentTimeTotal
		} else {
			countNum = questionTimeTotal
		}

	}, [contentTimeTotal, questionTimeTotal, pageStatus]);

	const goBack = () => {
		dispatch('counter/Reset', { contentTimeTotal: 30, questionTimeTotal: 20, pageStatus: 1 });
		props.history.push("/")
	};

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};
	return (
		<div className="menu">
			<img src={NextArrows} alt="NextArrows" className="left-icon" onClick={handleClickOpen} />
			<div className="clock-icon-area">
				<img src={QuizTimer} alt="QuizTimer" className="clock-icon" />
				{
					countNum <= 10 ? <span> : {countNum}</span> : null
				}
			</div>
			<img src={Rocket} alt="Rocket" className="rocket-icon" />
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle id="alert-dialog-title">{"Back to start page?"}</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-description">
						You will lose your progress.
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color="primary" autoFocus>
						No
					</Button>
					<Button onClick={goBack} color="primary" >
						Yes
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	)
}
