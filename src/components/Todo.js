import React, { useState } from "react";
import Todoli from "./Todoli";

function Todo() {
  const [listItem, setListItem] = useState("");

  function handleChange(event) {
    const value = event.target.value;
    setListItem(value);
  }

  const [itemsArray, setItemsArray] = useState([]);

  function handleClick() {
    if (listItem === "") {
    } else {
      setItemsArray((prev) => {
        return [...prev, listItem];
      });
      setListItem("");
    }
  }

  function handleDelete(id) {
    setItemsArray((prev) => {
      return prev.filter((item, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div className="todo">
      <h1>To-Do List</h1>
      <input onChange={handleChange} type="text" value={listItem} />
      <button className="btn-dark tbtn" onClick={handleClick}>
        ADD
      </button>
      <Todoli item="Dummy Item" onDelete={handleDelete} />
      {itemsArray.map((item, index) => {
        return (
          <Todoli key={index} id={index} item={item} onDelete={handleDelete} />
        );
      })}
    </div>
  );
}

export default Todo;
