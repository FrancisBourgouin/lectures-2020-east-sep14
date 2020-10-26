import Header from './Header'
import Footer from './Footer'
import TaskForm from './TaskForm'
import TaskList from './TaskList'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <TaskForm />
        <TaskList />
      </main>
      <Footer />
    </div>
  );
}

export default App;


const superFunction = () => {

  return 1
  return 2
  return 3

  // instead

  return [1, 2, 3]
}