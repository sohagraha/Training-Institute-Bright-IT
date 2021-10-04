import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';

const Service = (props) => {
    const { name, image, fee, type, details, level } = props.service;
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={image} className='w-100 mainCard images' />
                <div className="d-flex justify-content-between m-2">
                    <small className="highlight">{type}</small> <small className="highlight">{level}</small>
                </div>
                <h5 className="text-success fw-bold">{fee} Taka</h5>
                <Card.Body className="p-1">
                    <Card.Title className="fw-bold">{name}</Card.Title>
                    <Card.Text className="text-start">{details}</Card.Text>
                    <div className="d-flex justify-content-between m-2">
                        <Button className="btn-back">Enroll Now</Button>
                        <Button className="btn-back"><i className="fas fa-info-circle"></i> Details</Button>
                    </div>

                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;