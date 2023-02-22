import React, { useState } from "react";
import MembersAddCSS from "./Members-Add.module.css";
import { axiosApi } from "../../defz";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function MembersAdd() {
  const navigate = useNavigate();

  const [type, setType] = useState(0);
  const [name, setName] = useState("");
  const [org, setOrg] = useState("");
  const [email, setEmail] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleEmailChange = (e) => {
    const email = e.target.value
    setEmail(email)
  }

  const memberFormData = {
    user: name,
    type,
    org,
    email,
  };

  const submitCreate = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      toast.error("Please enter valid mail")
      return 0
    }
    if (org.length === 0) {
      toast.error("You must fill all the fields");
      return 0;
    }
    if (name.length < 3) {
      toast.error("Name must have 3 characters at least");
      return 0;
    }
    axiosApi(
      "api/admin/create/user",
      memberFormData,
      localStorage.getItem("admin-token")
    ).then((res) => {
      if (res.data.status_code === 200) {
        toast.success(res.data.description);
        setTimeout(() => {
          navigate("/members");
        }, 3000);
      } else {
        // toast.error(res.data.description);
        console.log(res)
      }
    });
  };

  return (
    <div className={MembersAddCSS.container}>
      <h1>Add Members</h1>
      <div className={MembersAddCSS.items}>
        <form className={MembersAddCSS.addMemberForm} action="#">
          <div>
            <label>Type:</label>
            <select onChange={(e) => setType(e.target.value)}>
              {/* change to comment */}
              <option>Admin</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>
          <div>
            <label>Name:</label>
            <input
              className={MembersAddCSS.inp}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label>Organization:</label>
            <input
              className={MembersAddCSS.inp}
              onChange={(e) => setOrg(e.target.value)}
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              className={MembersAddCSS.inp}
              onChange={handleEmailChange}
            />
          </div>
          <input
            className={MembersAddCSS.submit}
            type="submit"
            onClick={submitCreate}
          />
        </form>
      </div>
    </div>
  );
}
