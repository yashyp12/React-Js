import React from 'react'
import '../components/Card.css'

// we need to accept the propers in const card as an oject 
const Card = (props) => {
    return (
        <div className="card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2IvqP70cY91OIkh7X2EorACOE3CuH49IL_Q&s" alt="" style={{border: "2px solid red"}} />
      
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </div>
    )
}

export default Card
