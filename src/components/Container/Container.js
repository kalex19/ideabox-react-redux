import React from 'react';
import Card from '../Card/Card';

export default function Container({ ideas, deleteIdea }){
	const cards = ideas.map(idea => {
		return <Card deleteIdea={deleteIdea} {...idea} key={idea.id} />;
	});
	return <div> {cards} </div>;
}
