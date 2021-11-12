import React from 'react';
import { Container } from 'react-bootstrap';
import useProducts from '../../hooks/useProducts';
import Products from '../../pages/Products/Products';
import './HomeProducts.css';

const HomeProducts = () => {
    const [products] = useProducts();
    return (
        <Container>
            <h1 className='heading'>Services</h1>
            <div className = 'product-container'>
            {
                products.slice(0,6).map(product => <Products
                key={product._id}
                product = {product}
                ></Products>)
            }
            <br/>
            
        </div>
        </Container>
    );
};

export default HomeProducts;