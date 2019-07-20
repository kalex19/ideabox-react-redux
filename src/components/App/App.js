import './App.css';
import Form from '../Form/Form';
import Container from '../Container/Container';
import React, { Component } from 'react';

export class App extends Component {
	constructor() {
		super();
		this.state = {
			ideas: []
		};
	}

	addIdea = newIdea => {
		this.setState({
			ideas: [ ...this.state.ideas, newIdea ]
		});
	};

	deleteIdea = id => {
		const { ideas } = this.state;
		const filteredIdea = ideas.filter(idea => id !== idea.id);
		this.setState({
			ideas: filteredIdea
		});
	};

	render() {
		return (
			<div>
				<Form addIdea={this.addIdea} />
				<Container deleteIdea={this.deleteIdea} ideas={this.state.ideas} />
			</div>
		);
	}
}

export default App;
