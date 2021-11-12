import React from 'react';
import { Container } from 'react-bootstrap';
import useProducts from '../../hooks/useProducts';
import Products from '../Products/Products';

const ProductGallery = () => {
    const [products] = useProducts();
    return (
        <Container>
            <h1 className='heading'>Services</h1>
            <div className = 'product-container'>
            {
                products.map(product => <Products
                key={product._id}
                product = {product}
                ></Products>)
            }
            <br/>
            
        </div>
        </Container>
    );
};

export default ProductGallery;