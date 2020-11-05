import React from 'react'

const Commit = props => {
  return (
    <li>
      <h1>{props.commit.commit.message}</h1>
      <h2>{props.commit.commit.author.name}</h2>
    </li>
  )
}

export default Commit