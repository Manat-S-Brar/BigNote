import React from "react";

function Note(props) {
  const dateStyle = {
    fontSize: "0.8rem",
    color: "#888078",
    position: "relative",
    top: "35px",
  };

  function handleDelete() {
    props.onDelete(props.id);
  }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <p style={dateStyle}>{props.time}</p>
      <button onClick={handleDelete} className="btn-dark rounded-circle">
        <i className="fas fa-trash-alt"></i>
      </button>
    </div>
  );
}

export default Note;
