import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function Home() {
  const router = useRouter();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loginFailed, setLoginFailed] = useState(false);
  const [token, setToken] = useState("");
  function login() {
    fetch(
      "http://localhost:8080/login?username=" +
        userName +
        "&password=" +
        password +
        ""
    )
      .then((response) => {
        if (response.status === 201) {
          return response.json();
        } else {
          throw new Error(response.status);
        }
      })
      .then((result) => {
        setLoginFailed(false);
        console.log(result.token);
        router.push(`/list?token=${result.token}`);
      })
      .catch((error) => {
        console.log(error);
        setLoginFailed(true);
      });
  }
  return (
    <main>
      <h1 className="h1Logo">CHECKMATE</h1>
      <form action="POST" className="loginForm">
        <input
          type="text"
          placeholder="Username"
          className="inputUsername"
          onChange={(event) => setUserName(event.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="inputUsername"
          onChange={(event) => setPassword(event.target.value)}
        />
      </form>
      {loginFailed === true && <p className="errorLogin">Login Failed</p>}

      <button className="loginBtn" onClick={login}>
        LOGIN
      </button>
      <Link legacyBehavior href="/signUp">
        <a className="signUpBtn">Sign Up</a>
      </Link>
    </main>
  );
}

export default Home;
