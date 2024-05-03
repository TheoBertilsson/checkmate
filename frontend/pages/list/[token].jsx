import React, { useState, useEffect } from "react";
import Link from "next/link";
import AddList from "../../components/addList";
import { useRouter } from "next/router";
import { BoxArrowInLeft } from "react-bootstrap-icons";

const list = () => {
  const router = useRouter();
  const { token } = useRouter().query;
  const [addListPopUp, setaddListPopUp] = useState(false);
  const [accountID, setAccountID] = useState(0);
  const [lists, setLists] = useState([]);
  function logout() {
    fetch("http://localhost:8080/authenticate?token=" + token)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error(response.status);
        }
      })
      .then((result) => {
        fetch(
          "http://localhost:8080/logout?accountID=" + result[0].account_id,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            console.log("Logged out");
            router.push(`/`);
          })
          .catch((error) => {
            console.error(
              "There was a problem with the fetch operation:",
              error
            );
          });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  function getLists(x) {
    fetch("http://localhost:8080/getLists?accountID=" + x)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error(response.status);
        }
      })
      .then((result) => {
        console.log(result);
        setLists(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  useEffect(() => {
    console.log(token + " Account:" + accountID);
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
          getLists(result[0].account_id);
          setAccountID(result[0].account_id);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);
  return (
    <main>
      <BoxArrowInLeft
        onClick={() => {
          logout(token);
        }}
      />
      <h1
        className="h1LogoLists"
        style={addListPopUp === true ? { filter: "blur(5px)" } : {}}
      >
        YOUR LISTS
      </h1>
      {(lists !== "" && (
        <div
          className="listBox"
          style={addListPopUp === true ? { filter: "blur(5px)" } : {}}
        >
          {lists.map((item) => (
            <React.Fragment key={item.id}>
              <Link
                href={
                  "/listitems/" +
                  item.list_name +
                  "?token=" +
                  token +
                  "&id=" +
                  item.id
                }
              >
                {item.list_name}
              </Link>
            </React.Fragment>
          ))}
        </div>
      )) || <p>Add a new list!</p>}
      <AddList
        addListPopUp={addListPopUp}
        setaddListPopUp={setaddListPopUp}
        token={token}
        getLists={getLists}
      />
    </main>
  );
};

export default list;
