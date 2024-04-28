import React, { useState } from "react";
import { useRouter } from "next/router";

const signUp = () => {
  const router = useRouter();
  const [createUserName, setCreateUserName] = useState("");
  const [createEmail, setCreateEmail] = useState("");
  const [createPassword, setCreatePassword] = useState("");
  function createAccount() {
    console.log(createEmail, createPassword, createUserName);
    fetch("http://localhost:8080/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: createEmail,
        password: createPassword,
        username: createUserName,
      }),
    })
      .then((response) => {
        if (response.ok) {
          router.push(`/`);
          console.log("Created account");
        } else {
          console.error("Error:", response.statusText);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  return (
    <main>
      <h1 className="h1Logo">CHECKMATE</h1>
      <form action="POST" className="loginForm">
        <input
          type="email"
          placeholder="Email"
          className="inputUsername"
          onChange={(event) => setCreateEmail(event.target.value)}
        />
        <input
          type="text"
          placeholder="Username"
          className="inputUsername"
          onChange={(event) => setCreateUserName(event.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="inputUsername"
          onChange={(event) => setCreatePassword(event.target.value)}
        />
      </form>
      <button href="/list" className="createAccountBtn" onClick={createAccount}>
        CREATE ACCOUNT
      </button>
    </main>
  );
};

export default signUp;
