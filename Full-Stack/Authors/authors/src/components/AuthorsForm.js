import React, { useEffect, useState } from 'react'
import { Link } from '@reach/router';
export default props => {
    const { initialName, onSubmitProp, errors } = props;
    const [name, setName] = useState(initialName);
    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({name});
        console.log(errors)
    }
        
    return (
        <form onSubmit={onSubmitHandler}> 
            <p>
                <label>Name</label><br />
                <input 
                    type="text" 
                    name="name" value={name} 
                    onChange={(e) => { setName(e.target.value) }} />
            </p>
            <input type="submit" value = "Submit" />
            <button><Link to = "/authors">Cancel</Link></button>
            {errors.map((err, index) => <p key={index}> {err} </p>)}

        </form>
    )
}