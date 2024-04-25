import React, { useState } from "react";
import Link from "next/link";

const list = () => {
  const [lists, setLists] = useState([
    { name: "Montenegro", id: 2 },
    { name: "2024-12-20", id: 2 },
  ]);
  return (
    <main>
      <h1 className="h1LogoLists">CHECKMATE</h1>
      {lists !== "" && (
        <div className="listBox">
          {lists.map((item) => (
            <React.Fragment key={item.id}>
              <Link href="/listitems">{item.name}</Link>
            </React.Fragment>
          ))}
        </div>
      )}

      <Link href="/list" className="createListBtn">
        CREATE NEW LIST
      </Link>
      <Link href="/signUp" className="signUpBtn">
        ARCHIVE
      </Link>
    </main>
  );
};

export default list;
