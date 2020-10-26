import React, { useState } from 'react'
import './Task.css'

const Task = (props) => {
  const { task, updateTask } = props
  const [completed, setCompleted] = useState(task.is_completed)
  console.log(updateTask)
  const handleClick = (event) => {
    setCompleted(!completed)
    updateTask(!completed)
  }
  return (
    <li key={task.text} className={completed ? 'completed' : 'incomplete'} onClick={handleClick}>
      <article>
        <h1>{task.text}</h1>
        {task.is_completed && <p>Task is completed</p>}
        {!task.is_completed && <p>Task is not completed</p>}

        {/* {task.is_completed ? <p>Task is completed</p> : <p>Task is not completed</p>} */}
      </article>
    </li>
  )
}

export default Task