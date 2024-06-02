import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import Addlist from "./Addlist";
import Addbtn from "./Addbtn";
import ViewList from "./ViewList";
import Table from "./Table";

function Studentlist() {
  const [Add, setAdd] = useState(false);
  const [View, setView] = useState(false);
  const [ViewIdx, setViewIdx] = useState(0);
  const [Index, setIndex] = useState(0);
  const [isEdit, setisEdit] = useState(false);

  const [f_name, setf_name] = useState("");
  const [m_name, setm_name] = useState("");
  const [l_name, setl_name] = useState("");
  const [clas, setclas] = useState("");
  const [session, setsession] = useState("");
  const [Address, setAddress] = useState("");

  const [data, setData] = useState([]);

  const submit = () => {
    console.log("Submit is call");
    let obj = {
      fname: f_name,
      mname: m_name,
      lname: l_name,
      Class: clas,
      Session: session,
      address: Address,
    };
    setData([...data, obj]);
    emptyfield();
  };

  const emptyfield = () => {
    setf_name("");
    setm_name("");
    setl_name("");
    setclas("");
    setsession("");
    setAddress("");
  };

  const del = (id) => {
    setData(
      data.filter((element, index) => {
        return index != id;
      })
    );
  };

  const edit = () => {
    let obj = data[Index];
    setf_name(obj.fname);
    setm_name(obj.mname);
    setl_name(obj.lname);
    setclas(obj.Class);
    setsession(obj.Session);
    setAddress(obj.address);
  };

  useEffect(() => {
    console.log(Index);
    if(isEdit){
    edit();
    }
  }, [Index ,isEdit]);

  const update = () => {
    let obj = {
      fname: f_name,
      mname: m_name,
      lname: l_name,
      Class: clas,
      Session: session,
      address: Address,
    };
    data[Index] = obj;
    setisEdit(false);
    setAdd(false);
  };

  return (
    <>
      <header>
        <button className="menubar">
          <i className="ri ri-menu-fill" />
        </button>
        <div className="title">
          Vidyavardhini's college of Engeneering &amp; Technology
        </div>
        <button type="button" className="admin-btn">
          Admin <i className="ri ri-admin-line" />
        </button>
      </header>
      <h2>Student List</h2>
      <main>
        <table>
          <tbody>
            <tr className="table-header">
              <th>First Name</th>
              <th>Middle Name</th>
              <th>Last Name</th>
              <th>Class</th>
              <th>Session</th>
              <th>Action</th>
            </tr>
            {data.length === 0 ? <tr><td colSpan="6" className="nodata">No Data...</td></tr> : <Table
              setView={setView}
              data={data}
              setViewIdx={setViewIdx}
              del={del}
              setIndex={setIndex}
              edit={edit}
              setAdd={setAdd}
              setisEdit={setisEdit}
            />}
          </tbody>
        </table>
      </main>
      <Addbtn setAdd={setAdd} setisEdit={setisEdit} />
      {Add && (
        <Addlist
          setAdd={setAdd}
          f_name={f_name}
          m_name={m_name}
          l_name={l_name}
          setf_name={setf_name}
          setm_name={setm_name}
          setl_name={setl_name}
          clas={clas}
          session={session}
          Address={Address}
          setclas={setclas}
          setsession={setsession}
          setAddress={setAddress}
          submit={submit}
          emptyfield={emptyfield}
          isEdit={isEdit}
          setisEdit={setisEdit}
          update={update}
        />
      )}
      {View && <ViewList setView={setView} idx={ViewIdx} data={data} />}
    </>
  );
}

export default Studentlist;
