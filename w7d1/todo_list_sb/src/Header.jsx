import React from 'react'

const Header = props => {
  return (
    <header>
      <h1>I AM HEADER</h1>
      {props.time && <h2>and time is {props.time}</h2>}
    </header>
  )
}

export default Header