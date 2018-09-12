import Mreact, { Component } from '../utils'
export default class TodoList extends Component {
    state = { todos: [], text: '' };
    setText = e => {
        this.setState({ text: e.target.value });
    };
    addTodo = (e) => {
        let { todos, text } = this.state;
        todos = todos.concat({ text });
        this.setState({ todos, text: '' });
        e.preventDefault()
    };
    render({ }, { todos, text }) {
        console.log(text)
        return (
            <form onSubmit={this.addTodo} action="javascript:">
                <input value={text} onInput={this.setText} />
                <button type="submit">Add</button>
                <ul>
                    {todos.map(todo => (
                        <li>{todo.text}</li>
                    ))}
                </ul>
            </form>
        );
    }
}