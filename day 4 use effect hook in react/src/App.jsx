import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)
  const [first, setfirst] = useState(0)
  const [color, setColor] = useState(0)

  // useEffect(() => {
  //   alert("color has been changed ")
  //   setColor(color+1)
  // }, [count])
 

// useEffect(() => {
//   alert("hey welcome to my pae, this is first render of app.jsx")

//   return () => {
//     alert("component was unmounted")
//   }
// }, [ ])

  


  return (
    <>

{/* <Navbar color={"red" + "blue"} /> */}

      <div>
        <a href=" " target="">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
      </div>
      
    </>
  )
}

export default App
