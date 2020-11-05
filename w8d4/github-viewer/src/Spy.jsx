import { Component } from 'react'

export default class Spy extends Component {
  // constructor(props) {
  //   super(props)
  // }

  report = (e) => {
    console.log(e.clientX, e.clientY)
  }
  componentDidMount() {
    document.addEventListener('click', this.report)
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.report)
  }

  found = (e) => {
    this.props.getRidOfSpy()
  }

  render() {
    return <h1 style={{ fontSize: "0.5em", marginLeft: '0.5em' }} onClick={this.found}>🤖</h1>
  }
}