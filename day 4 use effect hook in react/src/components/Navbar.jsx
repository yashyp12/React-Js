import React from 'react'
import { useEffect } from 'react'


const Navbar = ({color}) => {

  
    // Case 1: run on every render

    useEffect(() => {
      alert("i will run on every render")
    })
    
  // Case 2 : run only on first render 
    useEffect(() => {
      alert("hey welcome , this is first render ")
      setColor(color+1)
    })
  
    // Case 3 : run only when certain values changed 
    useEffect(() => {
      alert("running beacuase color was changesd")
    }, [color ])

    
// example of cleanup function
    useEffect(() => {
      alert("hey welcome to my pae, this is first render of app.jsx")
    
      return () => {
        alert("component was unmounted")
      }
    }, [ ])
    
   
  return (
    <div>
      i am Navbar of {color}
    </div>
  )
}

export default Navbar
