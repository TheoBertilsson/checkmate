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
      </form>
      <Link href="/list" className="createAccountBtn">
        CREATE ACCOUNT
      </Link>
    </main>
  )
}

export default signUp
