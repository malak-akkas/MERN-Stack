import react, { useState } from 'react';

    
const NewBox = (props) => {
    const [clr, setClr] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSend(clr);
    };
    
    return (
        <>
        <form onSubmit={ handleSubmit }>
            <h1>Add a Color</h1>
            <textarea 
    
                placeholder=" Any color you want "
                onChange={ (e) => setClr(e.target.value) }
            ></textarea> <br></br>
            <input type="submit" value="Add" />
        </form>

        </>
    );
};
    
export default NewBox;