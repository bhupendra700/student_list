import React from "react";
import "./style.css";

const Addlist = (props) => {
  const {
    setAdd,
    f_name,
    m_name,
    l_name,
    setf_name,
    setm_name,
    setl_name,
    clas,
    session,
    Address,
    setclas,
    setsession,
    setAddress,
    submit,
    emptyfield,
    isEdit,
    setisEdit,
    update
  } = props;
  return (
    <>
      <section className="add-student-form">
        <form
          autoComplete="off"
          onSubmit={(event) => {
            event.preventDefault();
            if (
              f_name == "" ||
              m_name == "" ||
              l_name == "" ||
              clas == "" ||
              session == "" ||
              Address == ""
            ) {
            } else {
              submit();
              setAdd(false);
            }
          }}
        >
          <button
            className="form-close-btn"
            type="button"
            onClick={() => {
              setAdd(false);
              emptyfield();
            }}
          >
            <i className="ri ri-close-line" />
          </button>
          <div className="user-icon">
            <i className="ri ri-user-line" />
          </div>
          <div className="values">
            <input
              type="text"
              placeholder="First Name"
              required
              pattern="[A-Za-z]{1,}"
              value={f_name}
              onChange={(e) => {
                setf_name(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Middle Name"
              pattern="[A-Za-z]{1,}"
              required
              value={m_name}
              onChange={(e) => {
                setm_name(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Last Name"
              required
              pattern="[A-Za-z]{1,}"
              value={l_name}
              onChange={(e) => {
                setl_name(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Class"
              required
              pattern="[0-9]{1,}[a-z]{2}"
              title="Pattern is like 12th"
              value={clas}
              onChange={(e) => {
                setclas(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Session"
              required
              pattern="[0-9]{4}-[0-9]{2}"
              title="Pattern is like 2022-23"
              value={session}
              onChange={(e) => {
                setsession(e.target.value);
              }}
            />
            <textarea
              placeholder="Address"
              rows={2}
              defaultValue={""}
              value={Address}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            />
          </div>
          <div className="sub-res-btn">
            {isEdit ? <button type="button" className="submit" onClick={(e)=>{update() ; e.preventDefault()}}>Update</button> : <button type="submit" className="submit">Submit</button>}
            <button
              type="reset"
              className="reset"
              onClick={() => {
                setf_name("");
                setm_name("");
                setl_name("");
                setclas("");
                setsession("");
                setAddress("");
              }}
            >
              Reset
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Addlist;
