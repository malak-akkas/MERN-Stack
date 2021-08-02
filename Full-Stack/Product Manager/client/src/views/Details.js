import React, { useEffect, useState } from 'react'
import { Link } from '@reach/router';

import axios from 'axios';
const Details = ({id}) => {
    const [product, setProduct] = useState({})
    useEffect(() => {
        axios.get("http://localhost:8000/api/products/"+id)
            .then(res => setProduct(res.data))
    }, [id])
    return (
        <div>
            <p>Product: {product.title}</p>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>

            <Link to={"/products/" + product._id + "/edit"}>
    Edit
</Link>
        </div>  
)
}

export default Details
