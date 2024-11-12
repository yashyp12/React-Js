import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // here count is a state , secount is a function , or its intial value is 0
  const [count, setCount] = useState(0)

  return (
    <>
      <div>The count is {count}</div>
      <button onClick={()=>{setCount(count+1)}} >Update</button>
    </>
  )
}

export default App
