import React from 'react'
import TestCSS from "./Test.module.css"
import Testlist from '../../components/Test-List/Test-list'

export default function Test() {
  return (
    <div className={TestCSS.testContainer}>
        <Testlist />  
    </div>
  )
}
