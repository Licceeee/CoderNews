import React from 'react';
import { Row, Container } from 'react-bootstrap';

const ErrorMsg = ({ msg }) => {
    return (
        <Container>
            <Row className="m-5 d-flex justify-content-center">
                <h2 className="center mb-3"> {msg} </h2>
            </Row>
        </Container>
    );
}

export default ErrorMsg;
