import React from 'react';

export default function Card({ title, body, id, deleteIdea }){
	return (
		<div>
			<h2>{title}</h2>
			<p>{body}</p>
			<button onClick={() => deleteIdea(id)}>X</button>
		</div>
	);
}
