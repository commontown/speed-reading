import * as echarts from 'echarts';
import { dispatch } from 'framework';
import { useCallback, useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import './styles.scss';

export default function Statistics() {
	const { stats } = useSelector(({ someone }) => someone.stats) || {};
	const [wpmData, setWpmData] = useState([])
	const [answerData, setAnswerData] = useState([])
	const [readingData, setReadingData] = useState([])
	const [scoreData, setScoreData] = useState([])
	const getData = useCallback(
		(myChart) => {
			let uid = 1
			// 指定图表的配置项和数据
			// setTimeout(() => {
			// 	initEchart(myChart)

			// }, 0)
			dispatch('someone/stats', { data: { stats: null } });
			dispatch('someone/fetch', { address: `getStats&id=${uid}&count=1000`, state: "stats" });
			// initEchart(myChart, _.groupBy(res.data, (item) => item.category.title))

		}, [])

	useEffect((myChart) => {
		if (stats) {
			let wpm = []
			let Answer = []
			let Reading = []
			let score = []
			stats.map((item) => {
				if (item.psg_id) {
					console.log(item.score)
					if_obj_is_null(item)
					if (wpm.length >= 20) {
						wpm.shift()
						Answer.shift()
						Reading.shift()
						score.shift()
					}
					score.push(item.score)
					wpm.push(item.speed_wpm)
					Answer.push(item.quiz_time)
					Reading.push(item.read_time)
				}
			})
			setWpmData(wpm)
			setAnswerData(Answer)
			setReadingData(Reading)
			setScoreData(score)
			console.log(score, wpm)
		}
	}, [stats])
	useEffect(() => {
		if (wpmData.length && answerData.length && readingData.length && scoreData.length) {
			initEchart(echarts.init(document.getElementById('chart-area')))
		}
	}, [wpmData, answerData, readingData, scoreData])
	useEffect(() => {
		getData()
	}, []);

	const if_obj_is_null = (obj) => {      // 判断一个对象下是否有空属性
		for (const key in obj) {
			if (obj.hasOwnProperty(key)) {
				if (obj[key] === null || obj[key] === '') {
					obj[key] = 0
				}
			}
		}
	}
	const initEchart = (myChart) => {
		let option;
		option = {
			tooltip: {
				trigger: 'axis',
				axisPointer: {
					type: 'cross',
					crossStyle: {
						color: '#999'
					}
				}
			},
			legend: [{
				data: ['Reading', 'Answer'],
				left: "10%",
				bottom: 10
			}, {
				data: ['wpm'],
				bottom: 10,
				right: "10%"
			},],
			xAxis: [
				{
					type: 'category',
					data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
					axisPointer: {
						type: 'shadow'
					},
				},
				{
					position: 'bottom',
					axisLabel: {
						margin: 20 //文字与坐标轴的间隔
					},
					name: "Score %",
					nameLocation: "start",
					nameTextStyle: {
						verticalAlign: "top",
						padding: [20, 0, 0, 0],
					},
					data: scoreData,
				}
			],
			yAxis: [
				{
					type: 'value',
					name: 'Time',
					min: 0,

					axisLabel: {
						formatter: '{value} second'
					},
					axisLine: {
						show: true
					},
					axisTick: {
						show: true
					},
				},

				{
					type: 'value',
					name: 'wpm',
					min: 0,
					axisLabel: {
						formatter: '{value}'
					},
					axisLine: {
						show: true
					},
					axisTick: {
						show: true
					},
				}
			],
			series: [
				{
					name: 'Reading',
					type: 'bar',
					itemStyle: {
						color: "#ffb283"
					},
					data: readingData
				},
				{
					name: 'Answer',
					type: 'bar',
					itemStyle: {
						color: "#5dceea"
					},
					data: answerData
				},
				{
					name: 'wpm',
					type: 'line',
					yAxisIndex: 1,
					symbol: 'circle',
					symbolSize: 6,
					itemStyle: {
						color: "#257bba"
					},
					data: wpmData
				}
			]
		};
		// 使用刚指定的配置项和数据显示图表。
		option && myChart.setOption(option);
	}

	return (
		<div className="statistics">
			<div id="chart-area"></div>
		</div>
	)
}
