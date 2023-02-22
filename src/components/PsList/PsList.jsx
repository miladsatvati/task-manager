import React, { useEffect, useState } from 'react'
import PsListCSS from "../PsList/PsList.module.css"
import { Link } from 'react-router-dom'
import { AiFillPlusCircle } from "react-icons/ai";
import { AiOutlineUsergroupDelete } from "react-icons/ai";
import { AiTwotoneFlag } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
// import { axiosApi } from '../../defz';
import { axiosApi } from '../../defz';
import { Pagination } from '@mui/material'


function PsList() {
  const color = ["#e57373", "#ba68c8", "#90caf9", "#4db6ac", "#dce775", "#ffb74d", "#b0bec5", "#81c784"]
  const [psData, setPsData] = useState([])
  const [page, setPage] = useState(1)
  const [maxPage, setMaxPage] = useState(0)
  const [psId, setPsId] = useState("")
  let navigate = useNavigate();



  const routeChange = (d) => {
    navigate(`/items/${d}`)
  }

  useEffect(() => {
    axiosApi(
      'api/user/get/ps',
      { number: 1 },
      localStorage.getItem('admin-token')
    )
      // .then(res => console.log(res))
      .then((res) => {
        setPsData(res.data.data)
        setMaxPage(res.data.max_page)
      })

  }, [page])
  const handleChange = (e, p) => {
    setPage(p)
  }

  return (
    <div className={PsListCSS.container}>
      <h1>Ps</h1>
      <div className={PsListCSS.main}>
        <div className={PsListCSS.header}>
          <ul className={PsListCSS.items}>
            <li>
              <Link to='#' className={PsListCSS.headerLink}>List Of Us</Link>
            </li>
            <li>
              <Link to='#' className={PsListCSS.headerLink}>List Of Items</Link>
            </li>
          </ul>
          <Link to='/createPsPage' className={PsListCSS.additem}><AiFillPlusCircle className={PsListCSS.headerIcon} />Add New Item</Link>
        </div>
        <div className={PsListCSS.mainChild}>
          {psData.map((item, index) => {
            return (
              <div key={index} className={PsListCSS.ps} onClick={() => routeChange(item._id)}>
                <div className={PsListCSS.headerPS}>
                  <div style={{ backgroundColor: `${color[Math.floor(Math.random() * (color.length - 1) + 1)]}` }} className={PsListCSS.PsProfile}></div>
                  <p style={{ "fontSize": 20 }}>{item.name}</p>
                </div>
                <div className={PsListCSS.Psmain}>
                  <div className={PsListCSS.row}>
                    <p>Version</p>
                    <p>{item.test_version}</p>
                  </div>
                  <div className={PsListCSS.row}>
                    <p>U</p>
                    <input type="checkbox" />
                    <p>{item.state}</p>
                  </div>
                  <div className={PsListCSS.footer}>
                    <p><AiTwotoneFlag />6</p>
                    <p><AiOutlineUsergroupDelete />10</p>
                  </div>
                </div>
              </div>
            )
          })}

        </div>
        <div className={PsListCSS.PaginationPs}>
          <Pagination count={maxPage} color="primary" onChange={handleChange}> </Pagination>
        </div>

      </div>
      <div>

      </div>

    </div>
  )
}

export default PsList
