import React, { useEffect, useState } from 'react'
import { Link, navigate } from '@reach/router';
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import DeleteButton from '../components/DeleteButton';


const Update = (props) => {
    const { id } = props;
    const [products, setProducts] = useState();
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]);


    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => {
                setProducts(res.data);
                setLoaded(true);
            })
    }, [])

    const updateProduct = products => {
        axios.put('http://localhost:8000/api/products/'+ id, products)
            .then(res => console.log(res))
            .catch(err=>{
                const errorResponse = err.response.data.errors; 
                const errorArr = []; 
                for (const key of Object.keys(errorResponse)) { 
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })            
    
            .then (navigate("/products"))

    }
    return (
        <div>
            <h1>Update a Product</h1>
            {loaded && (
    <ProductForm
    errors = {errors }
        onSubmitProp={updateProduct}
        initialTitle={products.title}
        initialPrice={products.price}
        initialDescription = {products.description}

        
    />

)}

        </div>
    )
}

export default Update
