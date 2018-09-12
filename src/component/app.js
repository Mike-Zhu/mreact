import Mreact from '../utils'
const { Component } = Mreact
import SmallHeader from './test'

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isTest: false,
            first: 1,
            inputValue: '',
            two: 1,
            color: {
                color: "red"
            },
            ullist: [
                {
                    key: "a",
                    value: "a++"
                },
                {
                    key: "b",
                    value: "b++"
                },
                {
                    key: "c",
                    value: "c++"
                },
                {
                    key: "d",
                    value: "d++"
                }
            ]
        }
    }

    componentDidMount() {
        this.setState({
            first: 2
        })
        this.setState({
            first: ++this.state.first,
            ullist: [{
                key: "g",
                value: "g++"
            },
            {
                key: "d",
                value: "d++bianhua"
            },
            {
                key: "e",
                value: "e++"
            },
            {
                key: "a",
                value: "a++"
            },
            {
                key: "c",
                value: "a++本来是c"
            },
            {
                key: "f",
                value: "f++"
            }]
        })
        setInterval(() => {
            this.setState({
                two: ++this.state.two
            })
        }, 1000)
    }

    alert = () => {
        this.setState({
            first: this.state.first + 1
        })
        this.setState({
            first: this.state.first + 2
        })
        this.setState({
            first: this.state.first + 3,
            isTest: true
        })
    }
    cons(event, key) {
        console.log('target')
        console.log(event.target)
        console.log("res.key => ", key)
    }
    testChange = (event, str) => {
        console.log(event.target.value)
        this.setState({
            inputValue: event.target.value
        })
    }
    render() {
        return (
            <div>
                {'this.state.first =>' + this.state.first}
                <span>
                    <ul>
                        {this.state.ullist.map(res =>
                            <li key={res.key}
                                onClick={event => this.cons(event, res.key)}
                            >{res.value}</li>
                        )}
                    </ul>
                    <input
                        onChange={event => this.testChange(event, 'str')}
                        value={this.state.inputValue} />
                    <h1 style={this.state.color}
                        onClick={this.alert}
                    >Heading 1</h1>
                    <h2 >Heading 2 {this.state.first}</h2>
                    <div>
                        <h1>{this.state.first}</h1>
                        <h2>2</h2>
                        <h3>3</h3>
                    </div>
                </span>
                <h3>Heading 3</h3>
                <SmallHeader ppp={this.state.two} />
            </div>
        )
    }
}

function Allow({ ppp }) {
    return <div>{ppp} + 这是纯函数</div>
}
