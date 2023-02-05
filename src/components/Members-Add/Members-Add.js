import React from 'react'
import MembersAddCSS from './Members-Add.module.css'

export default function MembersAdd() {
  return (
    <div className={MembersAddCSS.container}>
    <h1>Add Members</h1>
    <div className={MembersAddCSS.items}>
              <form>
                  <div>
            <label>Type</label>
            <select>
                <option>Type 1</option>
                <option>Type 2</option>
                <option>Type 3</option>
                  </select>
                  </div>
                  <div>
            <label>Admin</label>
            <select>
                <option>Yes</option>
                <option>No</option>
                  </select>
                  </div>
                  <div>
            <label>Name</label>
                      <input className={MembersAddCSS.inp} />  
                  </div>
                  <div>
            <label>Organization</label>
                      <input className={MembersAddCSS.inp} />  
                  </div>
                  <div>
            <label>Email</label>
                      <input className={MembersAddCSS.inp} />
                      </div>
            <input className={MembersAddCSS.submit} type="submit"/>      
      </form>
    </div>
  </div>
  )
}
