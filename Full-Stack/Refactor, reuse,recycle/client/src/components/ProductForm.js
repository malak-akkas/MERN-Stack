import React, { useEffect, useState } from  'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const ProductForm = (props) => {
    const { initialTitle, initialPrice, initialDescription, errors, onSubmitProp } = props;
    const [title, setTitle] = useState(initialTitle);
    const [price, setPrice] = useState(initialPrice);
    const [description, setDescription] = useState(initialDescription);
    


    
    
const onSubmitHandler = (e) => {
        e.preventDefault();
        onSubmitProp({title, price, description});
        console.log(errors);
    }

    
return (
        <form onSubmit={onSubmitHandler}>
            {errors.map((err, index) => <p key={index}> {err} </p>)}
            
            <p>
                <label>Title: </label><br/>
                <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title}/>
            </p>
            <p>
                <label>Price: </label><br/>
                <input type="text" onChange={(e)=>setPrice(e.target.value)} value={price}/>
            </p>

            <p>
                <label>Description: </label><br/>
                <input type="text" onChange={(e)=>setDescription(e.target.value)} value={description}/>
            </p>
<input type="submit"/> 

</form>
    )
};
export default ProductForm