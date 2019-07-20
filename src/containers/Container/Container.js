import React, { Component } from 'react';
import Card from '../Card/Card';
import { connect } from 'react-redux';

export class Container extends Component {
	render() {
		// const { ideas } = this.props;
		const cards = this.props.ideas.map(idea => {
			return <Card {...idea} key={idea.id} />;
		});

		return <div> {cards} </div>;
	}
}

const mapStateToProps = state => ({
	ideas: state.ideas
});

export default connect(mapStateToProps)(Container);
