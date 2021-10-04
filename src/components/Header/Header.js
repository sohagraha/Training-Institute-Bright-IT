import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    const url = `https://media-exp1.licdn.com/dms/image/C4E0BAQEfADtrIoRugw/company-logo_200_200/0/1625224437159?e=2159024400&v=beta&t=YF8LTe9ie0OfIYvuAIvUqpP1qONn7qEM4LMPjvDRHwU`;
    return (
        <div>
            {/* header image  */}
            <img src="https://lh3.googleusercontent.com/proxy/B3XagCC_xdBReHKjgkk0BqtNL_p4uEZ2ZrhkZ9A9p_GE70wgxEXr4LwKNe5ZmBL5yM_tgzwIT01a1Z0QHln6JNf3tptpQpPMHDYbhPseyL2lSIah3POOgY7BF76-aJGOwuOwSVR3q8depJV2" alt="" />
            {/* Navbar  */}
            <Navbar className='p-0 mt-2' bg="dark" variant="dark">
                <Container className="d-flex justify-content-between">
                    <div className="m-3">
                        <Navbar.Brand variant="outline-primary">
                            <NavLink to='/home'><img
                                src={url}
                                width="40"
                                height="40"
                                className="d-inline-block align-top"
                                alt="React Bootstrap logo"
                            /></NavLink>
                        </Navbar.Brand>
                    </div>
                    <div>
                        <Nav className="me-auto p-0">
                            <Nav.Link><NavLink to='/home'><Button variant="outline-primary" className="text-white">Home</Button></NavLink></Nav.Link>

                            <Nav.Link><NavLink to='/services'><Button variant="outline-primary" className="text-white">Services</Button></NavLink></Nav.Link>

                            <Nav.Link><NavLink to='/about-us'><Button variant="outline-primary" className="text-white">About Us</Button></NavLink></Nav.Link>

                            <Nav.Link><NavLink to='/contact-us'><Button variant="outline-primary" className="text-white">Contact Us</Button></NavLink></Nav.Link>
                        </Nav>
                    </div>

                </Container>
            </Navbar>
        </div>
    );
};

export default Header;