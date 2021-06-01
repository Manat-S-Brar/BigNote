import React, { useState } from "react";
import Notebox from "./Notebox";
import Note from "./Note";

function Notesapp() {
  const [notesArray, setNotesArray] = useState([]);

  function addNote(note) {
    // console.log(note);
    setNotesArray((prev) => {
      return [...prev, note];
    });
  }

  function deleteNote(id) {
    setNotesArray((prev) => {
      return prev.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Notebox sendNote={addNote} />
      <Note
        title="Note 1"
        content="Dummy Note"
        onDelete={deleteNote}
        time="11:18:40 AM"
      />
      {notesArray.map((item, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={item.title}
            content={item.content}
            time={item.time}
            onDelete={deleteNote}
          />
        );
      })}
    </div>
  );
}

export default Notesapp;
