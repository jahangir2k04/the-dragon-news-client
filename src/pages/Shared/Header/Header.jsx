import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment/moment';
import { Button, Container, } from 'react-bootstrap';
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

            
        </Container>
    );
};

export default Header;