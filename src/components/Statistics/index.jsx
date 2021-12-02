import * as echarts from 'echarts';
import { useEffect } from "react";
import './styles.scss';

export default function Statistics() {
	useEffect(() => {
		let chartDom = document.getElementById('chart-area');
		let myChart = echarts.init(chartDom);
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
			legend: {
				data: ['Reading', 'Answer', 'wpm'],
				bottom: 10
			},
			xAxis: [
				{
					type: 'category',
					data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
					axisPointer: {
						type: 'shadow'
					}
				}
			],
			yAxis: [
				{
					type: 'value',
					name: 'Time',
					min: 0,
					max: 250,
					interval: 50,
					axisLabel: {
						formatter: '{value} min'
					}
				},
				{
					type: 'value',
					name: 'wpm',
					min: 0,
					max: 25,
					interval: 5,
					axisLabel: {
						formatter: '{value}'
					}
				}
			],
			series: [
				{
					name: 'Reading',
					type: 'bar',
					itemStyle: {
						color: "#ffb283"
					},
					data: [
						2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3
					]
				},
				{
					name: 'Answer',
					type: 'bar',
					itemStyle: {
						color: "#5dceea"
					},
					data: [
						2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3
					]
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
					data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
				}
			]
		};

		option && myChart.setOption(option);
	}, []);
	return (
		<div className="statistics">
			<div id="chart-area"></div>
		</div>
	)
}
