import React, { useEffect, useState } from 'react'
import { Link } from '@reach/router';

const PlayerForm = (props) => {
    const { initialName, initialPosition, onSubmitProp, errors } = props;
    const [name, setName] = useState(initialName);
    
    const [position, setPosition] = useState(initialPosition);


    const onSubmitHandler = e => {
        e.preventDefault();
        console.log(position)
        onSubmitProp({name,position});
        console.log(errors)
    }
        
    return (
    <fieldset >
<legend> <h1>Add a Player:</h1></legend>

        <form onSubmit={onSubmitHandler}> 
            <p>
                <label>Name: </label><br />
                <input 
                    type="text" 
                    name="name" value={name} 
                    onChange={(e) => { setName(e.target.value) }} />
            </p>
            <p>
                <label>Preferred Position: </label><br />
                <input 
                    type="text" 
                    name="position" value={position} 
                    onChange={(e) => { setPosition(e.target.value) }} />
            </p>
            <input type="submit" value = "Submit" />

            {errors.map((err, index) => <p key={index}> {err} </p>)}

        </form>

        </fieldset>
    )
}

export default PlayerForm
