import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductsList from '../components/ProductsList';
const Main = () => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]);
    
    useEffect(()=>{
        axios.get('http://localhost:8000/api/products')
            .then(res=>{
                setProducts(res.data);
                setLoaded(true);
            });
    },[products])

    const createProduct = product => {
        axios.post('http://localhost:8000/api/products/new', product)
            .then(res=>{
                setProducts([...products, res.data])
        
        })
        
        .catch(err=>{
            const errorResponse = err.response.data.errors; 
            const errorArr = []; 
            for (const key of Object.keys(errorResponse)) { 
                errorArr.push(errorResponse[key].message)
            }
            // Set Errors
            setErrors(errorArr);
        })                 

    
    }

    const removeFromDom = pId => {
        setProducts(products.filter(product => product._id != pId));
    }
    return (
        <div>
            <ProductForm onSubmitProp={createProduct} initialTitle="" initialPrice="" initialDescription="" errors={errors} />
            <hr/>
            <h1>All Products:</h1>
        {loaded && <ProductsList products={products}   removeFromDom={removeFromDom} />}
        </div>
    )
}

export default Main