import React from 'react';
import { Link } from '@reach/router';
import axios from 'axios';

const ProductsList = (props) => {

    const { removeFromDom } = props;
    const deleteProduct = (pID) => {
        axios.delete('http://localhost:8000/api/products/' + pID)
            .then(res => {
                removeFromDom(pID)
            })
    }
    return (
        <div>
        {props.products.map((p, idx)=>{
                return (
                    
                <p key={idx}>
                    <Link to={`/products/${p._id}`} >{p.title}</Link> 

                    <button onClick={(e)=>{deleteProduct(p._id)}}>
                        Delete
                    </button>
                </p>) 
                
                
            })}
        </div>
    )
}

export default ProductsList
