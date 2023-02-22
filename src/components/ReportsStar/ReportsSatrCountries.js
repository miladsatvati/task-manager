import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import reportCss from './ReportsSatrCountries.module.css'
import { Pie } from 'react-chartjs-2'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import { axiosApi } from '../../defz'

ChartJS.register(ArcElement, Tooltip, Legend)


export default function ReportsSatrCountries() {

    const [hex, setHex] = useState('#ffffff')
    const [StatusData, setStatusData] = useState({})
    const [percentages, setPersentages] = useState([])
    const [colorArr, setColorArr] = useState([])


    const state = {
        labels: StatusData?.data,
        datasets: [
            {
                label: 'rainfall',
                backgroundColor: colorArr,
                hoverBackgroundColor: [
                    '#501800',
                    '#4B5000',
                    '#175000',
                    '#003350',
                    '#35014F'
                ],
                data: percentages
            }
        ]
    }

    useEffect(() => {
        let sum = 0
        let arr = []
        let colorArr1=[]
        axiosApi(
            'api/report/finder/contry',
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
        <div className={reportCss.container}>
            <h1>Reports</h1>
            <div className={reportCss.main}>
                <div className={reportCss.stats}>
                    <ul>
                        <li className={reportCss.item}>
                            <NavLink to='/LinegraphPsPage'>stat1</NavLink>
                        </li>
                        <li className={reportCss.item}>
                            <NavLink to='/ReportCountriesPage'>stat2</NavLink>
                        </li>
                        <li className={reportCss.item}>
                            <NavLink to='/ReportsStatusPage'>stat3</NavLink>
                        </li>
                    </ul>
                </div>
                <div className={reportCss.chartMain}>
                    <h2>Countries</h2>
                    <div>
                    <Pie
                    className={reportCss.countryChart}
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
