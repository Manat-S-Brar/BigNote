import React, { useState } from "react";

function Todoli(props) {
  function handleDelete() {
    props.onDelete(props.id);
  }

  const [isDone, setIsDone] = useState(false);

  function handleIsDone() {
    setIsDone((prev) => {
      return !prev;
    });
    console.log(isDone);
  }
  return (
    <div style={{ margin: "10px" }}>
      <li
        onClick={handleIsDone}
        style={isDone ? { textDecoration: "line-through" } : null}
      >
        {props.item}
        <button
          onClick={handleDelete}
          className="btn-dark"
          style={{
            float: "right",
            border: "none",
            borderRadius: "5px",
          }}
        >
          <i className="fas fa-trash-alt"></i>
        </button>
      </li>
    </div>
  );
}

export default Todoli;
