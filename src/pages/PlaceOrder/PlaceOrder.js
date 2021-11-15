import React from 'react';
import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap';
import locationImg from '../../images/location.jpg';

const PlaceOrder = () => {
    return (
        <Container>
            <Row>
                <Col xs={12} md={6}>
                <hr className='mb-5 mt-5'/>
            <h1>Please Give Your Address</h1>
            <Form>
            <Form.Floating className="mb-3">
                <Form.Control
                    id="floatingPasswordCustom"
                    type="text"
                    placeholder="Your Name"
                />
                    <label htmlFor="floatingPasswordCustom">Your Name</label>
            </Form.Floating>
            <Form.Floating className="mb-3">
                <Form.Control
                    id="floatingInputCustom"
                    type="email"
                    placeholder="name@example.com"
                />
                    <label htmlFor="floatingInputCustom">Email address</label>
            </Form.Floating>
            <Form.Floating>
                <Form.Control
                    id="floatingPasswordCustom"
                    type="text"
                    placeholder="Location"
                />
                    <label htmlFor="floatingPasswordCustom">Location</label>
            </Form.Floating>

            <Button className='mt-4' variant="primary" type="submit">
                    Order Place
            </Button>
            </Form>
            <hr className='mt-5'/>
                </Col>
                <Col xs={12} md={6}>
                    <Image src={locationImg} fluid></Image>
                </Col>
            </Row>
</Container>
    );
};

export default PlaceOrder;