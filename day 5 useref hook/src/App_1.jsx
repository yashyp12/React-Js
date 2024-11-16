import { useEffect, useState, useRef} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  //when we use ref hook , the use effect not re render , or there is no contnet is renrenered ony the value get updated
  let a = useRef(0);
  
 
useEffect(() => {
  //we use current gor updating latest value , 
  a.current = a.current + 1;
 console.log(`re rendering and the value of a is ${a.current}.. `)
} );



  return (
    <>
      <div>
       
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
