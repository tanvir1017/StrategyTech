import React from 'react';
import { Col } from 'react-bootstrap';

const MyOrderCard = ({ order }) => {
    const { img, name } = order;
    return (
        <Col sm={6}>
            <h3>{name}</h3>
            <img width='100%' src={img} alt="" />
        </Col>
    );
};

export default MyOrderCard;