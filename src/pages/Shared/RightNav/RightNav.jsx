import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png'

const RightNav = () => {
    return (
        <div>
            <h3>Login With</h3>
            <Button className='w-100 mt-3 mb-2' variant="outline-primary"> <FaGoogle /> Login With Google</Button>
            <Button className='w-100' variant="outline-secondary"> <FaGithub /> Login With Github</Button>
            <div className='mt-4'>
                <h3 className='mb-3'>Find Us On</h3>
                <ListGroup className='fs-4'>
                    <ListGroup.Item> <FaFacebook />   facebook</ListGroup.Item>
                    <ListGroup.Item> <FaTwitter />   twitter</ListGroup.Item>
                    <ListGroup.Item> <FaInstagram />   instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <QZone />
            <div className='mt-4 position-relative text-white px-1 py3'>
                <div>
                    <img src={bg} alt="" />
                </div>
                <div className='text-center position-absolute top-50 start-50 translate-middle'>
                    <h1>Create an Amazing Newspaper</h1>
                    <h4 className='mt-4 mb-3'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</h4>
                    <Button variant="danger" className='px-5 py-3'>Learn More</Button>
                </div>
            </div>
        </div>
    );
};

export default RightNav;