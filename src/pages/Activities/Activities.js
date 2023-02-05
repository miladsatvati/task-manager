import React from 'react'
import ActivitiesCSS from "./Activities.module.css"
import Activitiesinfo from '../../components/Activities-Info/Activitie-info'

export default function Activities() {
  return (
    <div className={ActivitiesCSS.container}><Activitiesinfo /></div>
  )
}
