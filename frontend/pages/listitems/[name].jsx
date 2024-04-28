import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import AddItem from "../../components/addItem.js";

const listitems = () => {
  const { name } = useRouter().query;
  const [addItemPopUp, setaddItemPopUp] = useState(false);
  const [clickedItem, setclickedItem] = useState(false)
  const [itemList, setitemList] = useState([
    { name: "Charger", priority: 1, id: 1 },
    { name: "Underwear", priority: 1, id: 2 },
    { name: "makeup", priority: 1, id: 3 },
    { name: "tshirts", priority: 1, id: 4 },
  ]);

  return (
    <>
      <main>
        <h2
          className="h2List"
          style={addItemPopUp === true ? { filter: "blur(5px)" } : {}}
        >
          {name}
        </h2>
        {itemList !== "" && (
          <div
            className="listItemsBox"
            style={addItemPopUp === true ? { filter: "blur(5px)" } : {}}
          >
            {itemList.map((item) => (
              <React.Fragment key={item.id}>
                <p
                  key={item.id}
                  className="itemBox"
                  style={
                    clickedItem === true
                      ? {
                          backgroundColor: "#606C3842",
                          textDecoration: "line-through",
                        }
                      : {}
                  }
                  onClick={()=>{style={
                    backgroundColor: "#606C3842"}
                  }}
                >
                  {item.name}
                </p>
              </React.Fragment>
            ))}
          </div>
        )}
        <AddItem
          addItemPopUp={addItemPopUp}
          setaddItemPopUp={setaddItemPopUp}
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
