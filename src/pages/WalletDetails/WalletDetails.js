import React, { useEffect, useState } from 'react';
import { Container, Image } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import './WalletDetails.css';

const WalletDetails = () => {

    const {productId} = useParams();
    const [product, setProduct] = useState({})
        
        useEffect(() => {
            fetch(`https://afternoon-brushlands-23558.herokuapp.com/products/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data));
        },[])

    const {serviceTitle,image,serviceDescription,moreDetails} = product;
    console.log(product)
    return (
        <Container>
            <div className='service_details'>
            <div>
            <Image className='mt-3' style={{borderRadius: '10px'}} src={image} fluid alt=""/>
            <h1 className='pt-2'>{serviceTitle}</h1>
            <h6 className='pt-3'>{serviceDescription}</h6>
            <p className='pt-4 pb-5'>{moreDetails}</p>
            <Link to={`/placeorder/${productId}`} className='btn btn-info'>Place Order</Link>      
        </div>
        </div>
        </Container>
    );
};

export default WalletDetails;