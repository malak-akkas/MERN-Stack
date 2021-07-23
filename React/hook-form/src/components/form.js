import React, { useState } from 'react'

const Form=(props)=>{
    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confPassword,setConfPassword] = useState("");

    return(
        <>
    
        <form>
            <div>
                <label>First name: </label> 
                <input type="text" onChange={ (e) => setFirstName(e.target.value) } />
            </div>
            <div>
                <label>Last name: </label> 
                <input type="text" onChange={ (e) => setLastName(e.target.value) } />
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <div>
                <label>Password confirmation: </label>
                <input type="text" onChange={ (e) => setConfPassword(e.target.value) } />
            </div>
            <input type="submit" value="Create User" />
        </form>

            <div>
                <h2>Your form data:</h2>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confPassword}</p>
            </div>
        </>
    );
}

export default Form;