import React, { useEffect, useState } from "react";
import TestListCSS from "./Test-List.module.css";
import { axiosApi } from "../../defz";
import { Link } from "react-router-dom";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiFillCaretDown } from "react-icons/ai";
import Loader from "../../components/Loader/Loader";
import { Pagination } from "@mui/material";
import { toast } from "react-hot-toast";

export default function TestList() {
  const [TestData, setTestData] = useState([]);
  const [load, setLoad] = useState(false);
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(0)


  const fetch = () => {
    setLoad(true);
    axiosApi(
      "api/user/get/test",
      { number: page },
      localStorage.getItem("admin-token")
    ).then((res) => {
      setLoad(false);
      setTestData(res.data.info);
    })
    .catch(res => toast.error("Fail to connect to server"))
  }

  useEffect(() => {
    fetch()
    // eslint-disable-next-line
  }, [page]);

  const handleChange = (e, p) => {
    setPage(p);
  }

  const handleStatus = (id, status) => {
    axiosApi(
      "api/up/del",
      {
        col: "test",
        action: "update",
        id: id,
        state: status === "verified" ? "verify" : "verified"
      },
      localStorage.getItem("admin-token")
      )
      .then(res => fetch())
  }

  return (
    <div className={TestListCSS.container}>
      {load && <Loader />}
      <h1>Tests</h1>
      <div className={TestListCSS.items}>
        <div className={TestListCSS.addBtn}>
          <AiOutlinePlusCircle />
          <Link to="/add-test">Add New Test</Link>
        </div>
        <table>
          <thead>
            <tr>
              <th className={TestListCSS.mainTitleRow}>
                No
                <AiFillCaretDown color="gray" />
              </th>
              <th className={TestListCSS.mainTitleRow}>
                Version
                <AiFillCaretDown color="gray" />
              </th>
              <th className={TestListCSS.mainTitleRow}>
                Created
                <AiFillCaretDown color="gray" />
              </th>
              <th className={TestListCSS.mainTitleRow}>
                State
                <AiFillCaretDown color="gray" />
              </th>
              <th className={TestListCSS.mainTitleRow}>
                Ps
                <AiFillCaretDown color="gray" />
              </th>
              <th className={TestListCSS.mainTitleRow}>
                RN
                <AiFillCaretDown color="gray" />
              </th>
              <th className={TestListCSS.mainTitleRow}>
                RN2
                <AiFillCaretDown color="gray" />
              </th>
              <th className={TestListCSS.mainTitleRow}>
                Type
                <AiFillCaretDown color="gray" />
              </th>
              <th className={TestListCSS.mainTitleRow}>
                Files
                <AiFillCaretDown color="gray" />
              </th>
            </tr>
          </thead>
          <tbody>
            {TestData.map((item, index) => {
              return (
                <tr key={index} className={TestListCSS.row}>
                  <th className={TestListCSS.info}>{index + 1}</th>
                  <th className={TestListCSS.info}>{item.version}</th>
                  <th className={TestListCSS.info}>{item.time}</th>
                  <th className={TestListCSS.info}>{item.state}</th>
                  <th className={TestListCSS.info}>{item.ps}</th>
                  <th className={TestListCSS.info}>
                    <Link to={item.RN1}>{item.RN1.split("/").slice(-1)}</Link>
                  </th>
                  <th className={TestListCSS.info}>
                    <Link to={item.RN2}>{item.RN2.split("/").slice(-1)}</Link>
                  </th>
                  <th className={TestListCSS.info}>{item.type}</th>
                  <th className={TestListCSS.info}>
                    <Link to={item.file}>{item.file.split("/").slice(-1)}</Link>
                  </th>
                  <th className={TestListCSS.infoBtn}>
                    <button onClick={() => handleStatus(item._id, item.state)}>{item.state}</button>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
        <footer className={TestListCSS.Pagination}>
          <Pagination count={20} color="primary" onChange={handleChange} />
        </footer>
      </div>
    </div>
  );
}
