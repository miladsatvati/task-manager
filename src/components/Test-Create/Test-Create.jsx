import React, { useEffect, useRef, useState } from "react";
import TestCreateCSS from "./Test-Create.module.css";
import { axiosApi } from "../../defz";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai";
import toast from "react-hot-toast";

import { Link } from "react-router-dom";
import axios from "axios";

export default function TestCreate() {
  const UPLOAD = "https://laboratory-usa.iran.liara.run/api/boto3";

  const [type, setType] = useState("");
  const [version, setVersion] = useState("");
  const [rn, setRn] = useState("");
  const [rn2, setRn2] = useState("");
  const [files, setFiles] = useState("");
  const [psInfo, setPsInfo] = useState([])
  const [psId, setPsId] = useState("")
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();

  useEffect(() => {
    axiosApi(
      "api/user/get/ps",
      { number: 1 },
      localStorage.getItem("admin-token")
    ).then((res) => setPsInfo(res.data.data))
  }, []);

  const testData = {
    psid: psId,
    type,
    version,
    RN1: rn,
    RN2: rn2,
    file: files
  }

  const uploadAndGetUrl = (e, type) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("file", e.target.files[0]);
    axios
      .post(UPLOAD, formData, {
        headers: {
          "content-type": "multipart/form-data",
          Accept: "*/*",
        },
      })
      .then((res) => {
        console.log(res);
        if (res.data.status_code === 200) {
          if (type === "1") {
            setRn(res.data.link);
          } else if (type === "2") {
            setRn2(res.data.link);
          } else {
            setFiles(res.data.link);
          }
        } else {
          console.log("sorry");
        }
      });
  }  

  const submit = () => {
    if (psId.length < 5) {
      toast.error("Please select a Ps");
      return 0;
    }
    if (type.length === 0) {
      toast.error("Please select a type");
      return 0;
    }
    if (version.length < 2) {
      toast.error("Please insert version");
      return 0;
    }
    if (rn.length < 10) {
      toast.error("Please Choose RN 1");
      return 0;
    }
    if (rn2.length < 10) {
      toast.error("Please Choose RN 2");
      return 0;
    }
    if (files.length < 10) {
      toast.error("Please Choose a File");
      return 0;
    }
    axiosApi(
      "api/user/add/test",
      testData,
      localStorage.getItem("admin-token")
    ).then((res) => {
      toast.success(res.data.description)
      setTimeout(() => {
        window.location.reload(true)
      }, 2000);
    });
  };

  return (
    <div className={TestCreateCSS.container}>
      <h1>Add Test</h1>
      <div className={TestCreateCSS.main}>
        <div className={TestCreateCSS.addBtn}>
          <AiOutlinePlusCircle />
          <Link to="#">Add New Test</Link>
        </div>
        <form action="#">
          <div className={TestCreateCSS.items}>
            <label>Ps Name</label>
            <select
              onChange={(e) => setPsId(e.target.value)}
              defaultValue="Choose">
              <option disabled hidden>
                Choose
              </option>
              {psInfo.map((item, index) => {
                return (
                  <option key={index} value={item._id}>
                    {item.name}
                  </option>
                )
              })}
            </select>
            <label>Type</label>
            <select
              onChange={(e) => setType(e.target.value)}
              defaultValue="Choose">
              <option disabled hidden>
                Choose
              </option>
              <option>R</option>
              <option>H</option>
            </select>
          </div>
          <div className={TestCreateCSS.items}>
            <label htmlFor="Version">Version</label>
            <input
              id="Version"
              className={TestCreateCSS.inp}
              onChange={(e) => setVersion(e.target.value)}
            />
          </div>
          <div className={TestCreateCSS.items}>
            <label htmlFor="RN1">Upload RN1</label>
            <button
              className={`${TestCreateCSS.inp} ${TestCreateCSS.inpBtn}`}
              onClick={() => ref1.current.click()}>
              Browse
            </button>
            <p>
              {rn && (
                <AiOutlineCloseCircle
                  onClick={() => setRn("")}
                  style={{ verticalAlign: "middle", cursor: "pointer" }}
                />
              )}
              {rn && rn.split("/").slice(-1)}
            </p>
            <input
              type="file"
              id="RN1"
              ref={ref1}
              style={{ display: "none" }}
              onChange={(e) => uploadAndGetUrl(e, "1")}
            />
          </div>
          <div className={TestCreateCSS.items}>
            <label htmlFor="RN2">Upload RN2</label>
            <button
              className={`${TestCreateCSS.inp} ${TestCreateCSS.inpBtn}`}
              onClick={() => ref2.current.click()}>
              Browse
            </button>
            <p>
              {rn2 && (
                <AiOutlineCloseCircle
                  onClick={() => setRn2("")}
                  style={{ verticalAlign: "middle", cursor: "pointer" }}
                />
              )}
              {rn2 && rn2.split("/").slice(-1)}
            </p>
            <input
              type="file"
              id="RN2"
              ref={ref2}
              style={{ display: "none" }}
              onChange={(e) => uploadAndGetUrl(e, "2")}
            />
          </div>
          <div className={TestCreateCSS.items}>
            <label htmlFor="Files">Upload Files</label>
            <button
              className={`${TestCreateCSS.inp} ${TestCreateCSS.inpBtn}`}
              onClick={() => ref3.current.click()}>
              Browse
            </button>
            <p>
              {files && (
                <AiOutlineCloseCircle
                  onClick={() => setFiles("")}
                  style={{ verticalAlign: "middle", cursor: "pointer" }}
                />
              )}
              {files && files.split("/").slice(-1)}
            </p>
            <input
              type="file"
              id="Files"
              ref={ref3}
              style={{ display: "none" }}
              onChange={(e) => uploadAndGetUrl(e, "3")}
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
