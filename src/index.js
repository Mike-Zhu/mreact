import Mreact from './utils'
const { Component } = Mreact
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      first: 1,
      color: {
        color: "red"
      }
    }

    setTimeout(() => {
      this.setState({
        first: 2,
        color: {
          color: "yellow"
        }
      })
    }, 1000)
  }
  // compomentDidMount() {
  //   setTimeout(() => {
  //     this.setState({
  //       first: 2
  //     })
  //   }, 1000)
  // }

  render() {
    return (
      <div style={this.state.color}>
        {this.state.first}
        <span>
          <h1  >Heading 1</h1>
          <SmallHeader />
          <h2 style={{ color: 'yellow' }} >Heading 2</h2>
          <div>
            <h1>{this.state.first}</h1>
            <h2>2</h2>
            <h3>3</h3>
          </div>
        </span>
        <h3>Heading 3</h3>
      </div>
    )
  }
}

class SmallHeader extends Component {
  constructor(props) {
    super(props)
    this.state = {
      aaa: 22
    }
  }
  // compomentDidMount() {
  //   setTimeout(() => {
  //     this.setState({
  //       aaa: 333
  //     })
  //   }, 3000)
  // }
  render() {
    return (
      <h5>{this.state.aaa}</h5>
    )
  }
}

Mreact.render(<App />, document.getElementById('root'))