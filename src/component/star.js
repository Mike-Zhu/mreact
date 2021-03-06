import Mreact, { Component } from '../utils'

const SEARCH = '//api.github.com/search/repositories';

export default class Foo extends Component {
	async componentDidMount() {
		let res = await fetch(`${SEARCH}?q=mreact`),
			json = await res.json(),
			results = json && json.items || [];
		this.setState({ results });
	}

	render({ }, { results=[] }) {
		return (
			<div>
				<h1 style="text-align:center;">Example</h1>
				<div class="list">
					{ results.map( result => (
						<Result result={result} />
					)) }
				</div>
			</div>
		);
	}
}

const Result = ({ result }) => (
	<div style={{
		padding: 10,
		margin: 10,
		background: 'white',
		boxShadow: '0 1px 5px rgba(0,0,0,0.5)'
	}}>
		<div>
			<a aaa="da" href={result.html_url} target="_blank">
				{result.full_name}
			</a>
			🌟<strong>{result.stargazers_count}</strong>
		</div>
		<p onclick ={e => console.log(result.description)}>{result.description}</p>
	</div>
);