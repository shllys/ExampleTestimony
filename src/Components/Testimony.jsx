import React from 'react'

function Testimony(props) {
  return (
    <div className='testimony'>

        <img 
        className='photo' 
        src={props.img} 
        alt={props.userName} />

        <p className="comment">{props.comment}</p>

        <span className="name">{props.name}</span>
        <p className="for">{props.for}</p>

    </div>
  )
}

export default Testimony