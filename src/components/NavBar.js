import React from 'react';
import { Row, Col, Image, Button } from 'react-bootstrap';

const NavBar = ({getSearchInput, search, fetchData}) => {

    const _handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            fetchData(search);
          }
    }

    return (
        <>
            <Row id="nav" className="col-12">
                <Col className="col-2">
                    <a href="index.html">
                        <Image id="logo" src={process.env.PUBLIC_URL + '/logo.png'} rounded alt="Logo" />
                    </a>
                </Col>
                <Col className="col-3">
                    <div id="search">
                        <input
                            value={search}
                            onChange={getSearchInput}
                            onKeyDown={_handleKeyDown}
                            id="search-bar"
                            className="col-11" 
                            type="text" 
                            placeholder="Search..."
                            name="searchBar">
                        </input>
                        <Button id="search-btn" variant="secondary" size="md" className="btn btn-primary col-1">
                            <i id="search-icon" className="fas fa-search" onClick={() => fetchData(search)}></i>
                        </Button>                  
                    </div>
                </Col>
                <Button id="login-btn" variant="secondary" size="md" className="btn btn-primary col-1">Log in/Sign in</Button>
            </Row>
        </>
    );
}

export default NavBar;
