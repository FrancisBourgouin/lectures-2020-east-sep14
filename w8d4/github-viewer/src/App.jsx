import { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import Axios from 'axios'
import Commit from './Commit'
import RepoForm from './RepoForm';
import Spy from './Spy';

// useEffect
// useState
// useReducer

class App extends Component {

  // const [commits, setCommits] ...
  constructor(props) {
    super(props)
    this.state = {
      repoName: "lectures-2020-east-sep14",
      commits: [],
      foundSpy: false
    }
  }

  getRidOfSpy = () => {
    this.setState(prev => ({ ...prev, foundSpy: true }))
  }
  updateRepoName = (name) => {
    this.setState(prev => ({ ...prev, repoName: name }))
  }

  updateCommits = function (data) {
    this.setState(prev => ({ ...prev, commits: data }))
  }

  fetchCommits = () => {
    Axios
      .get(`https://api.github.com/repos/FrancisBourgouin/${this.state.repoName}/commits`)
      .then(res => this.updateCommits(res.data))
  }

  componentDidMount() {
    this.fetchCommits()
  }

  componentDidUpdate(oldProps, oldState) {
    if (oldState.repoName !== this.state.repoName) {
      this.fetchCommits()
    }
  }

  render() {
    console.log(this.state, this.commits)
    const { commits, foundSpy } = this.state
    const { time } = this.props

    return (
      <div>
        <h1>Github viewer of commits</h1>
        <h2>Date is {time}</h2>
        <RepoForm updateRepoName={this.updateRepoName} />
        <ul>
          {commits && commits.map(commit => <Commit commit={commit} />)}
        </ul>
        {!foundSpy && <Spy getRidOfSpy={this.getRidOfSpy} />}
      </div>
    )
  }
}

export default App;
