import React from 'react'
import Task from './Task'

const TaskList = props => {
  const parsedTasks = props.tasks && props.tasks.map(task => <Task task={task} />)
  return (
    <ul>
      I AM LIST
      {parsedTasks}
    </ul>
  )
}

export default TaskList