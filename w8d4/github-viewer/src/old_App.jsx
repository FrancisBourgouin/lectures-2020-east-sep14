import { Component } from 'react'
import logo from './logo.svg';
import './App.css';

// useEffect
// useState
// useReducer

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      message: 'YAS'
    }
  }

  updateTodaysMessage = () => this.setState(prev => ({ ...prev, message: "Potato" }))

  componentDidMount() {
    console.log('Component did mount yay !')
  }

  componentDidUpdate(oldProps, oldState) {
    if (oldState.message !== this.state.message) {
      console.log('Component did update', oldState, oldProps)
    }
  }
  render() {
    console.log('RE RENDER !!!');

    return (
      <div>
        <h1>Hello I am a Class Component</h1>
        <h2>Time is {this.props.time}</h2>
        <h3 onClick={this.updateTodaysMessage}> Today's message is {this.state.message}</h3>
      </div>
    )
  }
}

function OldApp(props) {
  return (
    <h1>Something</h1>
  )
}
export default App;
