import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment/moment';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import Marquee from 'react-fast-marquee';

const Header = () => {
    return (
        <Container>
            <div className="text-center">
                <img src={logo} alt="" />
                <p className='text-secondary mt-3 mb-2 fs-4'>Journalism Without Fear or Favour</p>
                <p className='fs-3'>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
            <div className='d-flex p-3 bg-light'>
                <Button variant="danger" className='fs-3'>Latest</Button>
                <Marquee className='fs-4' speed={100} pauseOnHover>
                    I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>

            <Navbar collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav position-relative">
                        <Nav className="fs-4 position-absolute top-0 start-50 translate-middle-x">
                            <Nav.Link href="#features">Home</Nav.Link>
                            <Nav.Link href="#pricing">About</Nav.Link>
                            <Nav.Link href="#pricing">Career</Nav.Link>
                        </Nav>
                        <Nav className='ms-auto'>
                            <Nav.Link href="#deets">Profile</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                            <Button variant="outline-dark" className='fs-3 px-4'>Login</Button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Header;