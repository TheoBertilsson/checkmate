import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='loginMain'>
      <h1 className='h1Logo'>CHECKMATE</h1>
      <form action="POST" className='loginForm'>
        <input type="text" placeholder='Username' className='inputUsername'/>
        <input type="text" placeholder='Password' className='inputUsername'/>
        <input type="button" value='LOGIN' className='loginBtn'/>
      </form>
      <a href="" className='signUpBtn'>Sign up</a>
    </main>
  )
}

export default App
