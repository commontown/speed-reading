import { useEffect, useState } from "react";
import { useSelector } from "react-redux"
import { dispatch } from "framework"
import './content.scss';

let timer
export default function Content() {
	const { contentTimeTotal } = useSelector(({ counter }) => counter) || {};
	const { passage } = useSelector(({ article }) => article.speedread) || {};
	const [initContentTime, setInitContentTime] = useState(0)
const [content, setcontent] = useState([])
	useEffect(() => {
		let newContent = passage?.psg_content.split('<br/>')
		setcontent(newContent)
		setInitContentTime(contentTimeTotal)
		timer = setInterval(() => {
			dispatch('counter/incr_delay', { data: { delta: 1 } });
		}, 1000)
	}, []);
	// 卸载组件清除定时器
	useEffect(() => {
		return () => {
			clearInterval(timer)
		}
	}, [])
	useEffect(() => {
		if (contentTimeTotal <= 0) {
			clearInterval(timer)
			const read_time = initContentTime - contentTimeTotal
			dispatch('counter/usedReadTime', { read_time: read_time });
			setTimeout(() => {
				dispatch('counter/changePageStatus', { status: 2 });
			}, 3000)
		}
	}, [contentTimeTotal]);
	const changePageStatus = () => {
		clearInterval(timer)
		const read_time = initContentTime - contentTimeTotal
		console.log(read_time)
		dispatch('counter/usedReadTime', { read_time: read_time });
		dispatch('counter/changePageStatus', { status: 3 });
	}

	return (
		<div className="right-content">
			<div className="right-content-main">
			<p className="content-tit">
				{passage && passage.title}
			</p>
			<div className="content" /* dangerouslySetInnerHTML={{ __html: passage && passage.psg_content }} */>
				{content.map((item)=><p key={item}>{item}</p>)}
			</div>
			<div className="done-button" onClick={changePageStatus}>
				I'm Done
			</div>
			</div>
		</div>
	)
}
