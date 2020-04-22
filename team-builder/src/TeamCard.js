import React from 'react';

//Create card
const TeamCard = props => {

	return(

		<div>
			{props.teamMembers.map(card => (
				<div key={card.id}>
					<h2>&nbsp;{card.name} - {card.role}</h2>
					<p>&nbsp;&nbsp;📧&nbsp;{card.email}</p>
				</div>
			))}
		</div>
	);
};

export default TeamCard;