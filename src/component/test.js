import Mreact from '../utils'
const { Component } = Mreact

export default class SmallHeader extends Component {
    constructor(props) {
        super(props)
        console.log(this.props.ppp)
    }
    componentDidMount() {

    }
    componengReceiveProps(p,s){
console.log(p,s)
    }
    render() {
        console.log(this.props)
        return (
            <h5>{this.props.ppp} +++ 这是内部component</h5>
        )
    }
}
