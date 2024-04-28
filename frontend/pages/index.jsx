import { useState } from "react";
import Link from "next/link";

function Home() {
  return (
    <main>
      <h1 className="h1Logo">CHECKMATE</h1>
      <form action="POST" className="loginForm">
        <input type="text" placeholder="Username" className="inputUsername" />
        <input type="password" placeholder="Password" className="inputUsername" />
      </form>
      <Link href="/list" className="loginBtn">
        LOGIN
      </Link>
      <Link href="/signUp" className="signUpBtn">
        Sign Up
      </Link>
    </main>
  );
}

export default Home;
