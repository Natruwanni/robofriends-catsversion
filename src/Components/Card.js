import React from 'react';

const Card = ({name, email, id}) => {
	return (
			<div className='tc bg-light-green dib br1 pa1 ma2 grow bw2 shadow-5'>
				<img 
				alt='Cat' 
				src ={`https://robohash.org/${id * '50'}?set=set4&size100x100`}/>
				<div>
					<h2>{ name }</h2>
					<p>{ email }</p>
				</div>
			</div>
		);
}

export default Card;