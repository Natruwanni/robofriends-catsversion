import React from 'react';
import Card from './Card';

const CardList = ({ Cats }) => {
	return (
			<div>
				{
					Cats.map((user, i) => {
							return (
							<Card 
								key={i} 
								id={Cats[i].id} 
								name={Cats[i].name} 
								email={Cats[i].email}
							/>
						);
					})
				}
			</div>
		)
}

export default CardList;