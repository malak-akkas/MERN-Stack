import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductsList from '../components/ProductsList';
const Main = () => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/products')
            .then(res=>{
                console.log("www"+res)
                setProducts(res.data);
                setLoaded(true);
            });
    },[products])

    const removeFromDom = pId => {
        setProducts(products.filter(product => product._id != pId));
    }
    return (
        <div>
            <ProductForm />
            <hr/>
            <h1>All Products:</h1>
        {loaded && <ProductsList products={products}   removeFromDom={removeFromDom} />}
        </div>
    )
}

export default Main