import React from "react";

const Lists = (props) => {

    if(props.text==="") return;
    return (
        <>
            <div className="listItemDiv">
                <i onClick={()=>{
                props.onSelect(props.id); 
                }} className="delete fa-solid fa-xmark"></i>
                <li> {props.text}</li>
            </div>
        </>
    )
}
export default Lists;