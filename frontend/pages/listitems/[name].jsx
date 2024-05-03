import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import AddItem from "../../components/addItem.js";

const listitems = () => {
  const router = useRouter();
  const { token } = router.query;
  const { id } = useRouter().query;
  const { name } = useRouter().query;
  const [addItemPopUp, setaddItemPopUp] = useState(false);
  const [accountID, setAccountID] = useState(0);
  const [itemList, setitemList] = useState([]);
  const [checkItemList, setCheckItemList] = useState([]);
  function getItems(x) {
    fetch("http://localhost:8080/getItems?listID=" + x)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error(response.status);
        }
      })
      .then((result) => {
        console.log(result);
        setitemList(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  function getCheckedItems(x) {
    fetch("http://localhost:8080/getCheckedItems?listID=" + x)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error(response.status);
        }
      })
      .then((result) => {
        setCheckItemList(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  function removeItem(itemID) {
    fetch("http://localhost:8080/removeItem?itemID=" + itemID, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        console.log("Removed");
        getItems(id);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }
  function addCheckedItem(itemID) {
    fetch("http://localhost:8080/getCheckedItem?itemID=" + itemID)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error(response.status);
        }
      })
      .then((result) => {
        console.log(result);
        fetch("http://localhost:8080/addCheckedItem", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            itemName: result[0].task,
            listID: id,
          }),
        })
          .then((response) => {
            console.log(response);
            if (response.ok) {
              console.log("Checked item");
              removeItem(itemID);
              getCheckedItems(id);
            } else {
              console.error("Error1:", response.statusText);
            }
          })
          .catch((error) => {
            console.error("Error2:", error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    console.log(token);
    if (accountID === 0) {
      fetch("http://localhost:8080/authenticate?token=" + token)
        .then((response) => {
          if (response.status === 200) {
            return response.json();
          } else {
            throw new Error(response.status);
          }
        })
        .then((result) => {
          getItems(id);
          getCheckedItems(id);
          setAccountID(result[0].account_id);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  return (
    <>
      <main>
        <h2
          className="h2List"
          style={addItemPopUp === true ? { filter: "blur(5px)" } : {}}
        >
          {name}
        </h2>
        {itemList.length + checkItemList.length !== 0 && (
          <div
            className="listItemsBox"
            style={addItemPopUp === true ? { filter: "blur(5px)" } : {}}
          >
            {itemList.map((item) => (
              <React.Fragment key={item.id}>
                <p
                  key={item.id}
                  className="itemBox"
                  onClick={() => {
                    addCheckedItem(item.id);
                  }}
                >
                  {item.task}
                </p>
              </React.Fragment>
            ))}
            {checkItemList.map((item) => (
              <React.Fragment key={item.id}>
                <p key={item.id} className="checkedItemBox" onClick={() => {}}>
                  {item.task}
                </p>
              </React.Fragment>
            ))}
          </div>
        )}

        <AddItem
          addItemPopUp={addItemPopUp}
          setaddItemPopUp={setaddItemPopUp}
          token={token}
          id={id}
          getItems={getItems}
        />
        <Link
          href="/list"
          className="signUpBtn"
          style={addItemPopUp === true ? { filter: "blur(5px)" } : {}}
        >
          Mark as Complete
        </Link>
      </main>
    </>
  );
};

export default listitems;
