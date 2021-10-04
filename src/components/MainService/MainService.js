import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import './MainService.css'

const MainService = (props) => {
    const { name, image, fee, details, type, level, classes, duration, mentor } = props.mainservice;
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={image} className='w-100 mainCard' />
                <div className="d-flex justify-content-between m-2">
                    <small className="highlight">{type}</small> <small className="highlight">{level}</small>
                </div>
                <h5 className="text-success fw-bold">{fee} Taka</h5>
                <Card.Body className="p-1">
                    <Card.Title className="fw-bold p-0">{name}</Card.Title>
                    <hr className="p-1 m-1" />
                    <Card.Text className="text-start">
                        <h6 className="p-1">{details}</h6>
                        <small><span className="fw-bold">Total Class : </span>{classes}</small>
                        <br />
                        <small><span className="fw-bold">Total Class : </span>{duration}</small>
                        <br />
                        <small><span className="fw-bold">Total Class : </span>{mentor}</small>
                    </Card.Text>
                    <Button>Enroll Now</Button>
                </Card.Body>
            </Card>
        </Col >
    );
};

export default MainService;