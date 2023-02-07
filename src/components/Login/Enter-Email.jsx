import React from "react";
import { Link } from "react-router-dom";
import LoginformCSS from "./Login.module.css";

export default function EnterEmail() {
  return (
    <div className={LoginformCSS.container}>
      <h1>Enter email to recieve verification code</h1>
      <input type="text" placeholder="Email" />
      <button>Continue</button>
      <Link id="link" to="/change-pass">
        change pass
      </Link>
      <p>Email is not Valid</p>
    </div>
  );
}
