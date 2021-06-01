import React from "react";
import { Link } from "react-router-dom";

function Sidebar(props) {
  return (
    <Link to={props.path} style={{color:"black",textDecoration:"none"}}>
      <div className="side">
        <i className={props.icon} style={{ padding: "0 12px" }}></i>
        <span className="side-item">{props.item}</span>
      </div>
    </Link>
  );
}

export default Sidebar;
