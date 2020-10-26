import React, { useState } from 'react'

import TaskList from './TaskList';
import Header from './Header'
import Footer from './Footer'

import './App.css';
const listOfTasks = [
  { text: "Give a lecture", is_completed: false },
  { text: "Sing a song", is_completed: false },
  { text: "Do bad puns", is_completed: true },
  { text: "Talk about chickens", is_completed: true }
]


function App() {
  const [tasks, setTasks] = useState(listOfTasks)
  return (
    <div className="App">
      <Header time={new Date().toLocaleTimeString()} />
      <TaskList tasks={tasks} />
      <Footer />
    </div>
  );
}

export default App;
