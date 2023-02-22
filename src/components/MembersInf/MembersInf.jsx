import React from 'react'
import MembersInfCSS from './MembersInf.module.css'


export default function MembersInf() {
  return (
    <div className={MembersInfCSS.container}>
        <section className={MembersInfCSS.items}>
            <div className={MembersInfCSS.item}>
                <button className={MembersInfCSS.item1}>1</button>
                <p>Total Users</p>
            </div>
            <div className={MembersInfCSS.item}>
                <button className={MembersInfCSS.item2}>2</button>
                <p>Type 3 Users</p>
            </div>
            <div className={MembersInfCSS.item}>
                <button className={MembersInfCSS.item3}>3</button>
                <p>Type 2 Users</p>
            </div>
            <div className={MembersInfCSS.item}>
                <button className={MembersInfCSS.item4}>4</button>
                <p>Type 1 Users</p>
            </div>
            <div className={MembersInfCSS.item}>
                <button className={MembersInfCSS.item5}>5</button>
                <p>Admins</p>
            </div>
        </section>
    </div>
  )
}
