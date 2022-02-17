import { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './styles.scss';
import ButtonActive from '../../assets/leaderBoard/button_active.png';
import Order1 from '../../assets/leaderBoard/order1.png';
import Order2 from '../../assets/leaderBoard/order2.png';
import Order3 from '../../assets/leaderBoard/order3.png';
import Order4 from '../../assets/leaderBoard/order4.png';
import Order5 from '../../assets/leaderBoard/order5.png';
import Order6 from '../../assets/leaderBoard/order6.png';
import Order7 from '../../assets/leaderBoard/order7.png';
import Order8 from '../../assets/leaderBoard/order8.png';
import Order9 from '../../assets/leaderBoard/order9.png';
import Order10 from '../../assets/leaderBoard/order10.png';
import { useSelector } from 'react-redux';
import { dispatch } from 'framework';

const useStyles = makeStyles({
	tableHeadItem1: {
		color: "#fff",
		textAlign: "center",
		backgroundColor: "#58c1f1",
		paddingLeft: "70px"
	},
	tableHeadItem: {
		color: "#fff",
		textAlign: "center",
		paddingLeft: "44px !important",
		backgroundColor: "#58c1f1"
	}
});
function createData(Name, Point, Speed, Attempts) {
	return { Name, Point, Speed, Attempts };
}
const rows = [
	// createData('Jeff', 3500, 400, 20),
	// createData('John', 3200, 350, 25),
	// createData('Wendy', 3100, 330, 24),
	// createData('Richard', 2500, 300, 21),
	// createData('Wenyang', 2300, 280, 15),
	// createData('Gilfford', 3500, 400, 20),
	// createData('Keith', 3200, 350, 25),
	// createData('Jianfeng', 3100, 330, 24),
	// createData('Weiqi', 2500, 300, 21),
	// createData('Eric', 2300, 280, 15),
];
const getImgPath = (index) => {
	let img
	switch (index) {
		case 1:
			img = Order1
			break;
		case 2:
			img = Order2
			break;
		case 3:
			img = Order3
			break;
		case 4:
			img = Order4
			break;
		case 5:
			img = Order5
			break;
		case 6:
			img = Order6
			break;
		case 7:
			img = Order7
			break;
		case 8:
			img = Order8
			break;
		case 9:
			img = Order9
			break;
		default:
			img = Order10
			break;
	}
	return img
}
export default function LeaderBoard() {
	const classes = useStyles();
	const { board } = useSelector(({ someone }) => someone.results) || {};
	const [rows, setRows] = useState([])
	useEffect(() => {
		setTimeout(() => {
			dispatch('someone/fetch', { address: "getLeaderboard", state: "results" });
		}, 0);
	}, []);
	useEffect(() => {
		setRows(board)

	}, [board])
	const [btnList, setBtnList] = useState([
		{
			text: "Class",
			className: "class-btn",
			starIcon: true
		},
		{
			text: "School",
			className: "school-btn",
			starIcon: false
		}
	])
	const [orderStatus, setOrderStatus] = useState('asc')
	const handleClickToggleBtn = (index, className) => {
		let type = className.split("-")[0]
		dispatch('someone/store', { data: { results: null } });
		dispatch('someone/fetch', { address: `getLeaderboard&type=${type}`, state: "results" });
		let list = [...btnList]
		list.forEach((item, listIndex) => {
			item.starIcon = false
			if (listIndex === index) {
				item.starIcon = true
			}
		})
		setBtnList(list)
	};
	const createSortHandler = (property) => (event) => {

		let arr = [...rows]


		if (orderStatus === 'asc') {
			setOrderStatus('desc')
			function compare(p) { //这是比较函数
				return function (m, n) {
					let a = m[p];
					let b = n[p];
					return a - b; //小的在第一行
				}
			}
			arr.sort(compare(property));
			setRows(arr)
		} else {
			setOrderStatus('asc')
			function compare(p) { //这是比较函数
				return function (m, n) {
					let a = m[p];
					let b = n[p];
					return b - a; //大的在第一行
				}
			}
			arr.sort(compare(property));
			setRows(arr)

		}
	};

	return (
		<div className="leader-board-area">
			<div className="btn-area">
				{
					btnList.map((item, index) => {
						return (
							<div
								className={item.className}
								onClick={(e) => handleClickToggleBtn(index, item.className)}
								key={item.text}
							>
								<span>{item.text}</span>
								{
									item.starIcon ?
										<img src={ButtonActive} alt="ButtonActive" className="starIcon" />
										: null
								}
							</div>
						)
					})
				}
			</div>
			<TableContainer component={Paper} className="table-area">
				<Table stickyHeader>
					<TableHead>
						<TableRow>
							<TableCell className={classes.tableHeadItem1}>Name</TableCell>
							<TableCell className={classes.tableHeadItem}>
								<TableSortLabel
									active={false}
									direction={orderStatus}
									onClick={createSortHandler('points')}
									style={{ color: "#fff" }}
								>
									Point
								</TableSortLabel>
							</TableCell>
							<TableCell className={classes.tableHeadItem}>
								<TableSortLabel
									active={false}
									direction={orderStatus}
									onClick={createSortHandler('speed')}
									style={{ color: "#fff" }}
								>
									Speed(wpm)
								</TableSortLabel>
							</TableCell>
							<TableCell className={classes.tableHeadItem}>
								<TableSortLabel
									active={false}
									direction={orderStatus}
									onClick={createSortHandler('attempts')}
									style={{ color: "#fff" }}
								>
									Attempts
								</TableSortLabel>
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows && rows.map((row, index) => (
							<TableRow key={row.uid}>
								<TableCell
									component="th"
									scope="row"
									style={{ display: "flex", alignItems: "center" ,justifyContent: "center"}}
								>
									<div className='name'>						
													<img
										src={getImgPath(index + 1)}
										alt={`Order${index + 1}`}
										className="order-icon"
									/>
									<span>{row.fname}</span>
									</div>
	
								</TableCell>
								<TableCell align="center">{row.points}</TableCell>
								<TableCell align="center">{row.speed}</TableCell>
								<TableCell align="center">{row.attempts}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	)
}
