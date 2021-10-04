import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';

const Service = (props) => {
    // destracturing data 
    const { name, image, fee, type, details, level, mentor } = props.service;
    return (
        // single service card with details 
        <Col>
            <Card>
                <Card.Img variant="top" src={image} className='w-100 mainCard images' />
                <div className="d-flex justify-content-between m-2 fw-bold">
                    <small className="highlight">{type}</small> <small className="highlight">{level}</small>
                </div>
                <h5 className="text-success fw-bold">{fee} Taka</h5>

                <Card.Body className="p-1">
                    <Card.Title className="fw-bold">{name}</Card.Title>
                    <Card.Text className="text-start">{details}</Card.Text>
                    <h6><span className="fw-bold"><i className="fas fa-chalkboard-teacher text-danger"></i> Teacher : </span><span className="text-success">{mentor}</span></h6>
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