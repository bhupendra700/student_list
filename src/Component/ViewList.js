import React, { useEffect } from 'react'
import './style.css'

const ViewList = ({setView , idx , data})=>{
  let cur = 0;
  {cur = data.filter((element , index)=>{
    return index == idx;
  })};
  console.log(cur);

  return (
    <>
      <section className="view-student-data">
    <div className="view-box">
      <div className="student-name-box student-box">
        Name:
        <div className="student-name student-data">{`${cur[0].fname} ${cur[0].mname} ${cur[0].lname}`}</div>
      </div>
      <div className="student-class-box student-box">
        Class: <div className="student-class student-data">{cur[0].Class}</div>
      </div>
      <div className="student-session-box student-box">
        Session: <div className="student-session student-data">{cur[0].Session}</div>
      </div>
      <div className="student-address-box student-box">
        Address:
        <div className="student-address student-data">
          {cur[0].address}
        </div>
      </div>
      <button type="button" className="view-close-btn" onClick={()=>{setView(false)}}>
        OK
      </button>
    </div>
  </section>
    </>
  )
}

export default ViewList
