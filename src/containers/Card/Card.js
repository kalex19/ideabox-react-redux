import React from 'react';
import { connect } from 'react-redux';
import { deleteIdea } from '../../actions';

function Card({ title, body, id, deleteIdea }){
	return (
		<div>
			<h2> {title} </h2> <p> {body} </p> <button onClick={() => deleteIdea(id)}> X </button>
		</div>
	);
}

const mapDispatchToProps = dispatch => ({
	deleteIdea: id => dispatch(deleteIdea(id))
});

export default connect(null, mapDispatchToProps)(Card);
