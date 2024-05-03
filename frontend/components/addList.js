import React, { useState } from "react";
import { XSquare } from "react-bootstrap-icons";

const addList = ({ addListPopUp, setaddListPopUp, token, getLists }) => {
  const [listName, setListName] = useState("");
  const [errorAddingList, setErrorAddingList] = useState(false);
  function addListPressed() {
    setaddListPopUp(true);
  }
  function addListToDB() {
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
        if (data[0].account_id !== undefined && listName.length > 0) {
          fetch("http://localhost:8080/addlist", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              listName: listName,
              id: data[0].account_id,
            }),
          })
            .then((response) => {
              console.log(response);
              if (response.ok) {
                console.log("Created list");
                setErrorAddingList(false);
                setaddListPopUp(false);
                getLists(data[0].account_id);
              } else {
                console.error("Error1:", response.statusText);
              }
            })
            .catch((error) => {
              console.error("Error2:", error);
            });
        } else {
          setErrorAddingList(true);
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
        onClick={addListPressed}
        style={addListPopUp === true ? { filter: "blur(5px)" } : {}}
      >
        Create New List
      </button>
      {addListPopUp === true && (
        <div className="addListBox">
          <XSquare
            onClick={() => {
              setaddListPopUp(false);
            }}
          />
          <input
            placeholder="List Name"
            type="text"
            className="addListName"
            onChange={(event) => setListName(event.target.value)}
            style={errorAddingList === true ? { border: "red 4px solid" } : {}}
          />
          <button
            className="addListBtn"
            onClick={addListToDB}
            disabled={!listName}
          >
            Add List
          </button>
        </div>
      )}
    </>
  );
};

export default addList;
