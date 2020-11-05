import { Component } from 'react'

export default class RepoForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      repoName: ""
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.updateRepoName(this.state.repoName)
  }

  handleChange = (event) => {
    console.log(event.target.value)
    this.setState({ repoName: event.target.value })
    // this.setState(prev => ({ ...prev, repoName: event.target.value }))
  }

  render() {

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.repoName}
          onChange={this.handleChange}
        />
        <button type="submit">Update repo</button>
      </form>
    )
  }
}