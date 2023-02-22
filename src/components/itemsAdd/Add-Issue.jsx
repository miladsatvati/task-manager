import React, { useEffect, useRef, useState } from "react";
import TestCreateCSS from "../Test-Create/Test-Create.module.css";
import { axiosApi } from "../../defz";
import { AiOutlinePlusCircle } from "react-icons/ai";
import toast from "react-hot-toast";
import { Link, useParams } from "react-router-dom";

export default function AddIssue() {
  const { id } = useParams();

  const [issueTitle, setIssueTitle] = useState("");
  const [version, setVersion] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (issueTitle.length < 2 || version.length < 1) {
      toast.error("You must fill all the fields");
      return 0;
    }
    axiosApi(
      "api/user/add/issue",
      {
        psid: id,
        text: issueTitle,
        version,
      },
      localStorage.getItem("admin-token")
    ).then((res) => {
      toast.success(res.data.description);
      setTimeout(() => {
        window.location.reload(true);
      }, 2000);
    });
  };

  return (
    <div className={TestCreateCSS.container}>
      <h1>Add Issue</h1>
      <div className={TestCreateCSS.main}>
        <div className={TestCreateCSS.addBtn}>
          <AiOutlinePlusCircle />
          <Link to="#">Add New Test</Link>
        </div>
        <form action="#">
          <div className={TestCreateCSS.items}>
            <label htmlFor="Version">Issue Title</label>
            <input
              id="Version"
              className={TestCreateCSS.inp}
              onChange={(e) => setIssueTitle(e.target.value)}
            />
          </div>
          <div className={TestCreateCSS.items}>
            <label htmlFor="Version">Version</label>
            <input
              id="Version"
              className={TestCreateCSS.inp}
              onChange={(e) => setVersion(e.target.value)}
            />
          </div>
          <input
            className={TestCreateCSS.submit}
            type="submit"
            onClick={submit}
          />
        </form>
      </div>
    </div>
  );
}
