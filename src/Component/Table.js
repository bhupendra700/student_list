import React from "react";

function Table(props) {
      console.log("Call useEffect");
  const { setView, data ,setViewIdx ,del ,setIndex,edit ,setAdd ,setisEdit} = props;
  return (
    <>
      {data.map((currEle , index) => {
        return (
            <tr className="table-value" key={index}>
              <td className="first-name-value">{currEle.fname}</td>
              <td className="middle-name-value">{currEle.mname}</td>
              <td className="last-name-value">{currEle.lname}</td>
              <td className="class-value">{currEle.Class}</td>
              <td className="session-value">{currEle.Session}</td>
              <td className="action-btn">
                <button type="button">
                  <i
                    className="ri ri-eye-line"
                    onClick={() => {
                      setViewIdx(index);
                      setView(true);
                    }}
                  />
                </button>
                <button type="button">
                  <i className="ri ri-edit-box-line" onClick={()=>{ setIndex(index) ;setAdd(true) ; setisEdit(true)}}/>
                </button>
                <button type="button">
                  <i className="ri ri-delete-bin-line" onClick={()=>{del(index)}}/>
                </button>
              </td>
            </tr>
        );
      })}
    </>
  );
}

export default Table;
