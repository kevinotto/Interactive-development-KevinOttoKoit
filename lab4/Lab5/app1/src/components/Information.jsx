import React from 'react'

const Information = (props) => {
  return (
    <div>
      <p>I'm student of {props.study}</p>
      <p>From {props.home}</p>
      <p>I like {props.like}</p>
    </div>
  )
}

export default Information
