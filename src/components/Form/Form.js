import React, { Component } from 'react';

export class Form extends Component {
	constructor() {
		super();
		this.state = {
			title: '',
			body: ''
		};
	}

	handleChange = e => {
		const { name, value } = e.target;
		this.setState({
			[name]: value
		});
	};

	handleSubmit = e => {
		e.preventDefault();
		const newIdea = {
			...this.state,
			id: Date.now()
		};
		this.props.addIdea(newIdea);
		this.setState({
			title: '',
			body: ''
		});
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
				<input type="text" name="body" value={this.state.body} onChange={this.handleChange} /> <button> Submit </button>
			</form>
		);
	}
}

export default Form;
