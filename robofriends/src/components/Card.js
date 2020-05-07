import React from 'react';

const Card= (props) => {
	const {id, name, email} = props;
	return (
			<div className="tc bg-light-green dib grow ma2 pa2 shadow-1">
			  <img alt="Robot" src={`https://robohash.org/${id}?size=200x200`}/>
				<h3> {name} </h3>
				<p> {email} </p>
			</div>
		);
}

export default Card;
