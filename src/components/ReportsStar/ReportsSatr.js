import React from 'react'
import reportCss from './ReportsStar.module.css'
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js'
import {Pie, Doughnut} from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

const state = {
    labels: ['US', 'Germany', 'UK', 'Austraia', 'Irland', 'Others'],
    datasets: [
        {
            label: 'rainfall',
            backgroundColor: [
                '#B21F00',
                '#C9DE00',
                '#2FDE00',
                '#00A6B4',
                '#6800B4'
            ],
            hoverBackgroundColor: [
                '#501800',
                '#4B5000',
                '#175000',
                '#003350',
                '#35014F'
            ],
            data: [65, 59, 80, 81, 56]
        }
    ]
}
export default function ReportsSatr() {
  return (
    <div className={reportCss.container}>
        <div className={reportCss.header}>
            <h1>Reports</h1>
        </div>
        <div className={reportCss.main}>
            <div className={reportCss.stats}>
                <ul>
                    <li className={reportCss.item}>
                        Stat1
                    </li>
                    <li className={reportCss.item}>
                        Stat2
                    </li>
                    <li className={reportCss.item}>
                        Stat3
                    </li>
                </ul>
            </div>
            <div className={reportCss.chartMain}>
                <Pie 
                    data= {state}
                    options={{
                        title: {
                            display: true,
                            Text: 'wwwww',
                            fontSize: 20
                        },
                        legend: {
                            display:true,
                            position: 'right'
                        }
                    }}
                    width={200}
                    height={200}
                    />
            </div>
        </div>
    </div>
  )
}
