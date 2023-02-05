import React from "react";
import MembersListCSS from "./Members-List.module.css";
import { Link } from "react-router-dom";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiFillCaretDown } from "react-icons/ai";
import { MembersListData } from "./Members-List-Data";

export default function MembersList() {
    return (
        <div className={MembersListCSS.container}>
        <h1>Members</h1>
        <div className={MembersListCSS.items}>
          <div className={MembersListCSS.addBtn}>
            <AiOutlinePlusCircle />
            <Link to="#">Add Member</Link>
          </div>
                <table>
                <thead>
            <tr>
              <th>No<AiFillCaretDown color='gray'/></th>
              <th>Name<AiFillCaretDown color='gray'/></th>
              <th>Added<AiFillCaretDown color='gray'/></th>
              <th>State<AiFillCaretDown color='gray'/></th>
              <th>Type<AiFillCaretDown color='gray'/></th>
              <th>Admin<AiFillCaretDown color='gray'/></th>
              <th>Verified<AiFillCaretDown color='gray'/></th>
              <th>Organization<AiFillCaretDown color='gray'/></th>
                        </tr>
                    </thead>
                    <tbody>
            {MembersListData.map((item, index) => {
              return (
                <tr key={index} className={MembersListCSS.row}>
                  <th className={MembersListCSS.info}>{item.number}</th>
                  <th className={MembersListCSS.info}>{item.name}</th>
                  <th className={MembersListCSS.info}>{item.added}</th>
                  <th className={MembersListCSS.info}>{item.state}</th>
                  <th className={MembersListCSS.info}>{item.type}</th>
                  <th className={MembersListCSS.info}>{item.admin}</th>
                  <th className={MembersListCSS.info}>{item.verified}</th>
                  <th className={MembersListCSS.info}>{item.organization}</th>
                  <th className={MembersListCSS.infoBtn}><button>Deactivate</button><button>Delete</button></th>
                  </tr>
                  
        )
            })}
            </tbody>
        </table>
        </div>
      </div>
    )
}
