import React from 'react';
import { Link } from 'react-router-dom';
import './Products.css';

const Products = ({product}) => {
    console.log(product);
    const {_id,serviceTitle,image} = product;
    return (
        <div className='product'>
            <img src={image} alt=""/>
            <h3>{serviceTitle}</h3>
            <Link to={`/product/${_id}`}><button className='btn btn-success product_btn'>More Detail</button></Link>
        </div>
    );
};

export default Products;