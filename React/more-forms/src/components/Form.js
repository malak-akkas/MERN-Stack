import React, { useState } from 'react'

const Form=(props)=>{
    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confPassword,setConfPassword] = useState("");

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 1) {
            setFirstNameError("First name is required!");
        } else if(e.target.value.length < 2) {
            setFirstNameError("First name must be 2 characters or longer!");
        }
    }
    const handleLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 1) {
            setLastNameError("Last name is required!");
        } else if(e.target.value.length < 2) {
            setLastNameError("Last name must be 2 characters or longer!");
        }
    }
    const handleEmail=(e)=>{
        setEmail(e.target.value);
        if(e.target.value.length<5){
            setEmailError("Email must be at least 5 characters!");
        }
    }

    const handlePassword=(e)=>{
        setPassword(e.target.value);
        if(e.target.value.length<8){
            setPasswordError("Password must be at least 8 characters!")
        }
    }

    const handleConfirmPassword=(e)=>{
        setConfPassword(e.target.value);
        if(e.target.value.length<8){
            setConfirmPasswordError("Passwords must match!");
        }
    }
    return(
        <>
    
        <form   onSubmit={ (e) => e.preventDefault() }  >
            <div>
                <label>First name: </label> 
                <input type="text" onChange={handleFirstName} />
                {
                    firstNameleError ?
                    <p style={{color:'red'}}>{ firstNameleError }</p> :
                    ''
                }
            
            </div>
            <div>
                <label>Last name: </label> 
                <input type="text" onChange={handleLastName}  />
                {
                    lasttNameleError ?
                    <p style={{color:'red'}}>{ lastNameleError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ handleEmail }   />
                {
                    emaileError ?
                    <p style={{color:'red'}}>{ emaileError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={handlePassword}  />
                {
                    passwordError ?
                    <p style={{color:'red'}}>{ passwordError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Password confirmation: </label>
                <input type="text" onChange={handleConfirmPassword}  />
                {
                    confPasswordError ?
                    <p style={{color:'red'}}>{ confPasswordError }</p> :
                    ''
                }
            </div>
            <input type="submit" value="Create User" />
        </form>

            {/* <div>
                <h2>Your form data:</h2>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confPassword}</p>
            </div> */}
        </>
    );
}

export default Form;