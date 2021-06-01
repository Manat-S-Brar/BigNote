import React, { useState } from "react";

function Notebox(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
    time: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prev) => {
      return {
        ...prev,
        [name]: value,
        time: new Date().toLocaleString(),
      };
    });
  }

  function handleClick(event) {
    if (note.title === "" && note.content === "") {
    } else {
      props.sendNote(note);
      setNote(() => {
        return {
          title: "",
          content: "",
        };
      });
    }
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          value={note.title}
          type="text"
          name="title"
          placeholder="Title"
        />
        <textarea
          onChange={handleChange}
          value={note.content}
          name="content"
          placeholder="Take a note..."
          rows="2"
        />
        <button onClick={handleClick} className="btn-dark rounded-circle">
          <i className="fas fa-plus"></i>
        </button>
      </form>
    </div>
  );
}

export default Notebox;
