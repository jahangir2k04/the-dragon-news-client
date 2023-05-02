import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <Container>
            <h4>Terms and Condition : </h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias aliquid ad eveniet corporis cumque quos perferendis? Minima officia possimus ea libero corporis vero incidunt quas, nulla saepe recusandae quam eveniet!</p>
            <p>Go back to <Link to='/register'> Register</Link></p>
        </Container>
    );
};

export default Terms;