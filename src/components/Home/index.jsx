import { useState, useEffect } from 'react'
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/core/styles';
import DialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import './styles.scss';
import level from '../../assets/home/level.png';
import articles from '../../assets/home/articles.png';
import instruction from '../../assets/home/instruction.png';
import clock from '../../assets/home/clock.png';
import starButtonActive from '../../assets/home/star_button_active.png';

const styles = () => ({
	closeButton: {
		position: 'absolute',
		right: '1rem',
		top: '0.5rem',
		color: '#000',
	},
});
export default function Home(props) {
	const [dialogStatus, setDialogStatus] = useState(false)
	useEffect(() => {
		console.log(props.history.block, "block")
		//防止页面后退
		// window.history.pushState(null, null, document.URL);
		// window.addEventListener('popstate', function () {
		// 	window.history.pushState(null, null, document.URL);
		// });
	}, []);
	const toTextPage = () => {
		props.history.push("/content-page")
	}
	const handleClose = () => {
		setDialogStatus(false);
	};
	const dialogOpen = () => {
		setDialogStatus(true);
	};
	const MDialogTitle = withStyles(styles)((props) => {
		const { classes } = props;
		return (
			<DialogTitle id="customized-dialog-title" onClose={handleClose}>
				<p>instruction</p>
				<IconButton aria-label="close" onClick={handleClose} className={classes.closeButton}>
					<CloseIcon />
				</IconButton>
			</DialogTitle>
		);
	});


	return (
		<div className="home-viewer">
			<div className="icon-area">
				<ul className="icon-list">
					<li>
						<div>
							<img src={level} alt="level" />
							<p>Level 3</p>
						</div>
						<div>
							<img src={articles} alt="level" />
							<p>Artciles No.2</p>
						</div>
					</li>
					<li className="right-icon">
						<div onClick={dialogOpen}>
							<img src={instruction} alt="level" />
							<p>Instructions</p>
						</div>
					</li>
				</ul>
			</div>
			<div className="center-area">
				<img src={clock} alt="clock" className="right-top-icon" />
				<div className="center-word">
					<p className="area-title">Speed Reading</p>
					<p className="area-subtitle">125 WORDS</p>
					<p className="score-num">75</p>
					<p className="score">Seconds</p>
					<div className="next-button" onClick={toTextPage}>
						<span>Challenge</span>
						<img className="button-star" src={starButtonActive} alt="starButtonActive" />
					</div>
				</div>
			</div>
			<Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={dialogStatus}>
				<MDialogTitle id="customized-dialog-title" onClose={handleClose} />
				<DialogContent dividers>
					<p>
						1.Lorem ipsum dolor sit amet consectetur adipisicing elit.
					</p>
					<p>
						2.Lorem ipsum dolor sit amet consectetur adipisicing elit.
					</p>
					<p>
						3.Lorem ipsum dolor sit amet consectetur adipisicing elit.
					</p>
				</DialogContent>
			</Dialog>
		</div>
	)
}

