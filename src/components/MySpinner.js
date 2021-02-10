import React from 'react';
import { Spinner, Row, Container } from 'react-bootstrap';

const MySpinner = () => {
    return (
        <Container>
            <Row className="m-5 d-flex justify-content-center">
                <h2 className="center mb-3">Loading ... </h2>
                <Spinner animation="grow" />
            </Row>
        </Container>
    );
}

export default MySpinner;
