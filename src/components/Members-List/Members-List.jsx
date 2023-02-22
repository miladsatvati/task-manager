import React, { useEffect, useState } from "react";
import MembersListCSS from "./Members-List.module.css";
import { axiosApi } from "../../defz";
import { Link } from "react-router-dom";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiFillCaretDown } from "react-icons/ai";
import Loader from "../../components/Loader/Loader";
import { Pagination } from "@mui/material";
import { toast } from "react-hot-toast";

export default function MembersList() {
  const [membersData, setMembersData] = useState([])
  const [load, setLoad] = useState(false)
  const [page, setPage] = useState(1)
  const [selectedId, setSelectedId] = useState("")
  const [modal, setModal] = useState(false)

  const fetch = () => {
    setLoad(true)
    axiosApi(
      "api/user/get/member",
      {number: page},
      localStorage.getItem("admin-token"))
      .then((res) => {
        setLoad(false)
        setMembersData(res.data.info)
    })
    .catch((res) => toast.error("Cannot connect to server"))
  }

  useEffect(() => {
    fetch()
    // eslint-disable-next-line
  }, [page])

    const handleChange = (e, p) => {
    setPage(p);
  }

  const handleStatus = (id, status) => {
    axiosApi(
      "api/up/del",
      {
        col: "user",
        action: "update",
        id: id,
        status: status === true ? false : true
      },
      localStorage.getItem("admin-token")
      )
      .then(res => fetch())
  }

  const handleDelete = (id) => {
    axiosApi(
      "api/up/del",
      {
        col: "user",
        action: "delete",
        id: id
      },
      localStorage.getItem("admin-token")
    )
      .then(res => fetch())
  }


  return (
    <div className={MembersListCSS.container}>
      { load && <Loader /> }
      <h1>Members</h1>
      <div className={MembersListCSS.items}>
        <div className={MembersListCSS.addBtn}>
          <AiOutlinePlusCircle />
          <Link to="/add-members">Add Member</Link>
        </div>
        <div className={modal ? `${MembersListCSS.modalBox} ${MembersListCSS.showModalBox}` : MembersListCSS.modalBox}>
            <div className={MembersListCSS.modal}>
              <h2>Are you sure you want to delete this user?</h2>
              <button onClick={() => setModal(false)}>No</button>
            <button onClick={() => {
              setModal(false)
              handleDelete(selectedId)
            }}>Yes</button>
              </div>
          </div>
        <table>
          <thead>
            <tr>
              <th>
                No
                <AiFillCaretDown color="gray" />
              </th>
              <th>
                Name
                <AiFillCaretDown color="gray" />
              </th>
              <th>
                Added
                <AiFillCaretDown color="gray" />
              </th>
              <th>
                State
                <AiFillCaretDown color="gray" />
              </th>
              <th>
                Type
                <AiFillCaretDown color="gray" />
              </th>
              <th>
                Email
                <AiFillCaretDown color="gray" />
              </th>
              <th>
                Verified
                <AiFillCaretDown color="gray" />
              </th>
              <th>
                Organization
                <AiFillCaretDown color="gray" />
              </th>
            </tr>
          </thead>
          <tbody>
            {membersData.slice(0,9).map((item, index) => {
              return (
                <tr key={index} className={MembersListCSS.row}>
                  <th className={MembersListCSS.info}>{index + 1}</th>
                  <th className={MembersListCSS.info}>{item.user}</th>
                  <th className={MembersListCSS.info}>{item.time}</th>
                  <th className={MembersListCSS.info}>{item.status === true ? "Active" : "not active"}</th>
                  <th className={MembersListCSS.info}>{item.type}</th>
                  <th className={MembersListCSS.info}>{item.email}</th>
                  <th className={MembersListCSS.info}>{item.verified}</th>
                  <th className={MembersListCSS.info}>{item.organizartion}</th>
                  <th className={MembersListCSS.infoBtn}>
                    <button onClick={() => handleStatus(item._id, item.status)}>{ item.status === true ? "Deactivate" : "Activate" }</button>
                    <button onClick={() => {
                      setModal(true)
                      setSelectedId(item._id)
                    }}>Delete</button>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
        <footer className={MembersListCSS.Pagination}>
          <Pagination count={20} color="primary" onChange={handleChange} />
        </footer>
      </div>
    </div>
  );
}
