import Mreact from '../utils'
const { Component } = Mreact
import SmallHeader from './test'

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            first: 1,
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
        let first = 1
        setTimeout(() => {
            this.setState({
                first: ++first,
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
        }, 2000)
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                first: 2
            })
        }, 1000)
    }

    alert = () => {
        console.log(1)
    }
    render() {
        return (
            <div>
                {this.state.first}
                <span>
                    <ul>
                        {this.state.ullist.map(res =>
                            <li key={res.key}>{res.value}</li>
                        )}
                    </ul>
                    <h1
                        style={this.state.color}
                        onClick={this.alert}
                    >Heading 1</h1>
                    <SmallHeader />
                    <Allow ppp={this.state.first} />
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

function Allow({ ppp }) {
    return <div>{ppp} + 这是纯函数</div>
}