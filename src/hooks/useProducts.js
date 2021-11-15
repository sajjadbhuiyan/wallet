import { useEffect, useState } from "react";

const useProducts = () =>{
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://afternoon-brushlands-23558.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data));
        
    },[]);
    // return necessary things for product
    return [products];
}

export default useProducts;