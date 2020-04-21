import React, { useState } from 'react';

const Form = props => {

    //Card structure
    const [card, setCard] = useState({
        name: '',
        email: '',
        role: '',
    });

    //Keeps track of changes
    const eventHandler = event => {
        console.log(event);
        setCard({ ...card, [event.target.name]: event.target.value });
    };

    //Submits data and creates new card
    const submitForm = event => {
        event.preventDefault();  
    //addMember is defined in app.js
        props.addMember(card);
    };

    return (
        <div>
            <form onSubmit={submitForm}>

                <label>&nbsp;Name:&nbsp;&nbsp;
                <input
                        onChange={eventHandler}
                        name="name"
                        type="text"
                        placeholder="name" />
                </label>
                <label>&nbsp;Email:&nbsp;&nbsp;&nbsp;
                <input
                        onChange={eventHandler}
                        type="text"
                        name="email"
                        placeholder="email" />
                </label>
                <label>&nbsp;Role:&nbsp;&nbsp;&nbsp;&nbsp;
                <select
                        onChange={eventHandler}
                        name="role"
                        value={card.role}
                        placeholder="pickone">
                        <option value="FrontEnd">Front End</option>
                        <option value="BackEnd">Back End</option>
                        <option value="Data Sciene">Data Science</option>
                        <option value="Full Stack Web Dev.">Full Stack Web Dev.</option>
                        </select>
                </label>

                &nbsp;&nbsp;<button type="submit">Submit</button>

            </form>
        </div>
    );
}

export default Form;