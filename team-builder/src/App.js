import React, { useState } from 'react';
import TeamCard from './TeamCard';
import Form from './Form';

function App() {

    //Initial value
    const [teamMembers, setTeamMembers] = useState([{
        id: 1,
        name: 'Michael Sheets',
        email: 'michael.sheets83@gmail.com',
        role: 'Full Stack'
    }]);

    //Format for applying card to new member
    const addMember = card => {
        const newCard = {
            id: Date.now(),
            name: card.name,
            email: card.email,
            role: card.role,
        };
        setTeamMembers([...teamMembers, newCard]);
    }

    return (
        <div>
          <h1>Team Builder</h1>
            <Form addMember={addMember} />
            <TeamCard teamMembers={teamMembers} />
        </div>
    );

}

export default App;