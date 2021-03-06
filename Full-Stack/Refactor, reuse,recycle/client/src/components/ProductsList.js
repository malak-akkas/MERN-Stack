import React from 'react';
import { Link } from '@reach/router';
import axios from 'axios';
import DeleteButton from './DeleteButton';


const ProductsList = (props) => {

    const { removeFromDom } = props;
    return (
        <div>
        {props.products.map((p, idx)=>{
                return (
                    
                <p key={idx}>
                    <Link to={`/products/${p._id}`} >{p.title}</Link> 

                    <DeleteButton pId={p._id} successCallback={()=>removeFromDom(p._id)}/>

                </p>) 
                
                
            })}
        </div>
    )
}

export default ProductsList
