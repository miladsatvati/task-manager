import React from "react";
import { Link } from "react-router-dom";
import LoginformCSS from "./Login.module.css";

export default function ChangePass() {
  return (
    <div className={LoginformCSS.container}>
      <h1>Reset your password</h1>
      <input type="password" placeholder="New Password" />
      <input type="password" placeholder="Re-Enter New Passwoed" />
      <button>Continue</button>
      <Link id="link" to="/dashboard">
        To Dashboard
      </Link>
      <p>Field must have same passwords</p>
    </div>
  );
}
