import React from 'react'
import Link from 'next/link'

const signUp = () => {
  return (
    <main>
      <h1 className="h1Logo">CHECKMATE</h1>
      <form action="POST" className="loginForm">
      <input type="email" placeholder="Email" className="inputUsername" />
        <input type="text" placeholder="Username" className="inputUsername" />
        <input type="text" placeholder="Password" className="inputUsername" />
        <input type="button" value="CREATE ACCOUNT" className="createAccountBtn" />
      </form>
    </main>
  )
}

export default signUp
