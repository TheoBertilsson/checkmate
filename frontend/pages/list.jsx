import React, { useState } from "react";
import Link from "next/link";
import AddList from "../components/addList";

const list = () => {
  const [addListPopUp, setaddListPopUp] = useState(false);
  const [lists, setLists] = useState([
    { name: "Montenegro", id: 2 },
    { name: "2024-12-20", id: 3 },
  ]);
  return (
    <main>
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
              <Link href={"/listitems/" + item.name + "?id=" + item.id}>
                {item.name}
              </Link>
            </React.Fragment>
          ))}
        </div>
      )) || <p>Add a new list!</p>}
      <AddList addListPopUp={addListPopUp} setaddListPopUp={setaddListPopUp} />
      <Link
        href="/signUp"
        className="signUpBtn"
        style={addListPopUp === true ? { filter: "blur(5px)" } : {}}
      >
        ARCHIVE
      </Link>
    </main>
  );
};

export default list;
