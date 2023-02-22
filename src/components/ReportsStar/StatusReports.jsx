import React, { useEffect, useState } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import StatusCss from './StatusReports.module.css'
import { Pie } from 'react-chartjs-2'
import { axiosApi } from '../../defz'
import { NavLink } from 'react-router-dom';

ChartJS.register(ArcElement, Tooltip, Legend)


export default function StatusReports() {
    const [hex, setHex] = useState('#ffffff')
    const [StatusData, setStatusData] = useState({})
    const [percentages, setPersentages] = useState([])
    const [colorArr, setColorArr] = useState([])
    let state = {
        labels: StatusData?.data,
        datasets: [
            {
                label: 'rainfall',
                backgroundColor: colorArr,
                hoverBackgroundColor: 'black',
                data: percentages
            }
        ]
    }

    useEffect(() => {
        let sum = 0
        let arr = []
        let colorArr1=[]
        axiosApi(
            'api/report/finder/status',
            "",
            localStorage.getItem('admin-token')
        )
            .then(res => {
                for (let i = 0; i < res.data.count.length; i++) {
                    sum += res.data.count[i]
                }
                res.data.count.map((item) => {
                    arr.push((item/sum) * 100)
                })
                setPersentages(arr)
                setStatusData(res.data)
                
                    for (let y = 0 ; y < res.data.data.length; y++) {
                        let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
                        setHex(randomColor)
                        colorArr1.push(randomColor)
                    }
                    setColorArr(colorArr1)
                console.log(colorArr);
                
            })
    }, [])
    
    return (
        <div className={StatusCss.container}>
            <h1>Reports</h1>
            <div className={StatusCss.main}>
                <div className={StatusCss.stats}>
                    <ul>
                        <li className={StatusCss.item}>
                            <NavLink to='/LinegraphPsPage'>stat1</NavLink>
                        </li>
                        <li className={StatusCss.item}>
                            <NavLink to='/ReportCountriesPage'>stat2</NavLink>
                        </li>
                        <li className={StatusCss.item}>
                            <NavLink to='/ReportsStatusPage'>stat3</NavLink>
                        </li>
                    </ul>
                </div>
                <div className={StatusCss.chartMain}>
                    <h2>Status</h2>
                    <div className={StatusCss.test1}>
                    <Pie
                        data={state}
                        options={{
                            title: {
                                display: true,
                                Text: 'wwwww',
                                fontSize: 20
                            },
                            legend: {
                                display: true,
                                position: 'right'
                            }
                        }}
                        width={700}
                        height={700}
                    />
                    </div>
                </div>
            </div>
        </div>
    )
}
