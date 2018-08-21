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
    let first = 1
    setTimeout(() => {
      this.setState({
        first: ++first,
      })
    }, 200)
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
      <div>
        {this.state.first}
        <span>
          <h1 style={this.state.color} >Heading 1</h1>
          <SmallHeader />
          <h2 >Heading 2 {this.state.first}</h2>
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
      aaa: 1
    }
    let aaa = 1
    setTimeout(() => {
      this.setState({
        aaa: ++aaa
      })
    }, 300)
  }
  compomentDidMount() {

  }
  render() {
    return (
      <h5>{this.state.aaa}</h5>
    )
  }
}

Mreact.render(<App />, document.getElementById('root'))