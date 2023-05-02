import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';


const NavigationBar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
        .then()
        .catch(error => console.log(error.message))
    }

    return (
        <div>
            <Navbar collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav position-relative">
                        <Nav className="fs-4 position-absolute start-50 translate-middle-x">
                            <Link className='text-decoration-none mx-2 text-secondary' to='/category/0'>Home</Link>
                            <Link className='text-decoration-none mx-2 text-secondary' to='/about'>About</Link>
                            <Link className='text-decoration-none mx-2 text-secondary' to='/career'>Career</Link>
                        </Nav>
                        <Nav className='ms-auto d-flex align-items-center gap-2'>
                            {
                                user && <FaUserCircle style={{ fontSize: '50px' }}></FaUserCircle>
                            }
                            {user ?

                                <Button onClick={handleLogOut} variant="outline-dark" className='fs-4 px-4'>Logout</Button>
                                :
                                <Link to='/login'>
                                    <Button variant="outline-dark" className='fs-4 px-4'>Login</Button>
                                </Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavigationBar;