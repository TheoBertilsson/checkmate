import React, { useState } from "react";
import CloseBtn from "./closeBtn";
import { XSquare } from "react-bootstrap-icons";

const addList = ({ addListPopUp, setaddListPopUp }) => {
  function addListPressed() {
    setaddListPopUp(true);
  }
  function addListToDB() {
    setaddListPopUp(false);
  }
  function closeAddBox() {
    setaddListPopUp(false);
  }
  return (
    <>
      <button
        className="createListBtn"
        onClick={addListPressed}
        style={addListPopUp === true ? { filter: "blur(5px)" } : {}}
      >
        Create New List
      </button>
      {addListPopUp === true && (
        <div className="addListBox">
          <XSquare onClick={() => {setaddListPopUp(false)}} />
          <input placeholder="List Name" type="text" className="addListName" />
          <button className="addListBtn" onClick={addListToDB}>
            Add List
          </button>
        </div>
      )}
    </>
  );
};

export default addList;
