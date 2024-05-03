import React, { useState, useEffect } from "react";
import { XSquare } from "react-bootstrap-icons";

const addItem = ({ addItemPopUp, setaddItemPopUp, token, id, getItems }) => {
  const [itemName, setItemName] = useState("");
  const [errorAddingItem, setErrorAddingItem] = useState(false)
  function addItemPressed() {
    setaddItemPopUp(true);
  }
  function addItemToDB() {
    fetch("http://localhost:8080/authenticate?token=" + token)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error(response.status);
        }
      })
      .then((data) => {
        console.log[data[0]];
        if (data[0].account_id !== undefined && itemName.length > 0) {
          fetch("http://localhost:8080/addtasks", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              itemName: itemName,
              id: data[0].account_id,
              listID: id,
            }),
          })
            .then((response) => {
              console.log(response);
              if (response.ok) {
                console.log("Created list");
                setErrorAddingItem(false);
                setaddItemPopUp(false);
                getItems(id);
              } else {
                console.error("Error1:", response.statusText);
              }
            })
            .catch((error) => {
              console.error("Error2:", error);
            });
        } else {
          setErrorAddingItem(true);
          throw new Error("Account ID not found in response");
        }
      })
      .catch((error) => {
        console.error("Error3:", error);
      });
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
          <input
            placeholder="Item Name"
            type="text"
            className="addListName"
            onChange={(event) => setItemName(event.target.value)}
            style={errorAddingItem === true ? { border: "red 4px solid" } : {}}
          />
          <button className="addListBtn" onClick={addItemToDB}>
            Add Item
          </button>
        </div>
      )}
    </>
  );
};

export default addItem;
