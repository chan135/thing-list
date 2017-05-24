import React from 'react'
import './AddThings.css'

const AddThings = (props) => {
  return (
    <button className="add-thing" onClick={props.addThing}>Add Thing</button>
  )
}

export default AddThings