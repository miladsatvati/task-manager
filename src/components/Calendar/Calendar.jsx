import React, { useState } from 'react'


export default function Calendar() {
    const [date, setDate] = useState()
  return (
    <>
      <p>D: {date}</p>
      <input type="date" onChange={e => setDate(e.target.value)} />
    </>
    )
}
