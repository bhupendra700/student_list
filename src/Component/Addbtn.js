import React from "react";

const Addbtn = (props)=>{
  return (
    <>
      <button type="button" className="add-btn" onClick={()=>{props.setAdd(true) ; props.setisEdit(false)}}>
        <i className="ri ri-add-large-fill" />
      </button>
    </>
  );
}

export default Addbtn;

