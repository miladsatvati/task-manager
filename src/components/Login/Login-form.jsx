import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import LoginformCSS from "./Login.module.css";
import { axiosApi } from "../../defz";

export default function Loginform() {
  const navigate = useNavigate();

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const LoginData = {
    user: username,
    pas: password,
  };

  const Login = (e) => {
    e.preventDefault();
    axiosApi("api/admin/login", LoginData).then((res) => {
      if (res.data.status_code === 200) {
        localStorage.setItem("admin-token", res.data.admin_token);
        navigate("./dashboard");
      } else {
        toast.error(res.data.description);
        setUserName("")
        setPassword("")
      }
    });
  };

  return (
    <form className={LoginformCSS.container}>
      <input
        type="text"
        placeholder="Email"
        value={username}
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" onClick={Login}>
        Log In
      </button>
      <Link id="link" to="/send-email">
        Forgot Password?
      </Link>
    </form>
  );
}
