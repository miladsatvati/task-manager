import React from 'react'
import AccessDeniedCSS from "./Access-denied.module.css"

export default function Accessdenied() {
  return (
      <div className={AccessDeniedCSS.container}>
        <h1>Sorry, you are not allowed to access this page!</h1>
    </div>
  )
}
