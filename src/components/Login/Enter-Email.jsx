import React, { useState } from "react";
import { axiosApi } from "../../defz";
import LoginformCSS from "./Login.module.css";

export default function EnterEmail() {
  const [email, setEmail] = useState("")

  const getMail = () => {
    axiosApi(
      "api/user/forget/password",
      { email },
      ""
    )
    .then(res => console.log(res))
  }


  return (
    <div className={LoginformCSS.container}>
      <h1>Enter your Email to reset password</h1>
      <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <button onClick={getMail}>Continue</button>
    </div>
  );
}
