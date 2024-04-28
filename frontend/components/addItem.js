import React, { useState } from "react";
import CloseBtn from "./closeBtn";
import { XSquare } from "react-bootstrap-icons";

const addItem = ({ addItemPopUp, setaddItemPopUp }) => {
  function addItemPressed() {
    setaddItemPopUp(true);
  }
  function addItemToDB() {
    setaddItemPopUp(false);
  }
  return (
    <>
      <button
        className="createListBtn"
        onClick={addItemPressed}
        style={addItemPopUp === true ? { filter: "blur(5px)" } : {}}
      >
        Add item
      </button>
      {addItemPopUp === true && (
        <div className="addListBox">
          <XSquare
            onClick={() => {
              setaddItemPopUp(false);
            }}
          />
          <input placeholder="Item Name" type="text" className="addListName" />
          <button className="addListBtn" onClick={addItemToDB}>
            Add Item
          </button>
        </div>
      )}
    </>
  );
};

export default addItem;
