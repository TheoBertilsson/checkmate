import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import AddItem from "../../components/addItem.js";

const listitems = () => {
  const { name } = useRouter().query;
  const [addItemPopUp, setaddItemPopUp] = useState(false);
  const [clickedItem, setclickedItem] = useState(false);
  const [itemList, setitemList] = useState([
  ]);
  const [checkItemList, setCheckItemList] = useState([{ name: "Charger", priority: 1, id: 1 }]);

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
                    setclickedItem(true);
                  }}
                >
                  {item.name}
                </p>
              </React.Fragment>
            ))}
            {checkItemList.map((item) => (
              <React.Fragment key={item.id}>
                <p
                  key={item.id}
                  className="checkedItemBox"
                  onClick={() => {
                    setclickedItem(true);
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
