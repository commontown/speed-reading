import { useSelector } from "react-redux"
import './styles.scss';
import Content from './content';
import TimeOver from './timeOver';
import Question from './question';

// let timer
export default function ContentPage(props) {
	const { pageStatus } = useSelector(({ counter }) => counter) || {};
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
				<img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic205.nipic.com%2Ffile%2F20190130%2F20614752_112211857000_2.jpg&refer=http%3A%2F%2Fpic205.nipic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639122695&t=ef9da40ddaf0a63111da4b8ef587a637" alt="" />
			</div>
			{
				getPageView(pageStatus)
			}
		</div>
	)
}
