import React from 'react'
import linegrapghCss from './LineGraph.module.css'
import {Chart as ChartJS, BarElement, CategoryScale,LinearScale, Tooltip,Legend} from "chart.js";
import {Bar} from 'react-chartjs-2'

ChartJS.register(BarElement, CategoryScale,LinearScale, Tooltip,Legend)

const state = {
    labels: ['January', 'February', 'March',
             'April', 'May'],
    datasets: [
      {
        label: 'Rainfall',
        fill: false,
        lineTension: 0.5,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        barPercentage: 0.1,
        borderRadius: 10,
        data: [65, 59, 80, 81, 56]
      }
    ]
  }

export default function LineGraph() {
  return (
    <div className={linegrapghCss.container}>
        <div className={linegrapghCss.header}>
            <h1>Reports</h1>
        </div>
        <div className={linegrapghCss.main}>
            <div className={linegrapghCss.stats}>
                <ul>
                    <li className={linegrapghCss.item}>
                        Stat1
                    </li>
                    <li className={linegrapghCss.item}>
                        Stat2
                    </li>
                    <li className={linegrapghCss.item}>
                        Stat3
                    </li>
                </ul>
            </div>
            <div className={linegrapghCss.chartMain}>
                <Bar 
                data={state}
                options={{
                    title:{
                        display: true,
                        text: 'adjahjd',
                        fontSize:20
                    },
                    legend:{
                        display:true,
                        position:'right'
                    }
                }}
                width={90}
                height={45}
                />
            </div>
        </div>
    </div>
  )
}
