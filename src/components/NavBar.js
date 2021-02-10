import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';

const NavBar = ({getSearchInput, search, fetchData}) => {

    const _handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            fetchData(search);
          }
    }

    return (
        <>
            <Row id="nav" className="col-12 md">
                <Col className="col-12 col-md-6 col-lg-2">
                    <a href="index.html">
                        <Image id="logo" src={process.env.PUBLIC_URL + '/logo.png'} rounded alt="Logo" />
                    </a>
                </Col>
                <Col className="col-12 col-md-6 col-lg-3 m-3 m-sm-0">
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
                        <button id="search-btn" variant="secondary" size="lg" className="btn btn-primary">
                            <i id="search-icon" className="fas fa-search" onClick={() => fetchData(search)}></i>
                        </button>                  
                    </div>
                </Col>
                <a href="https://tornode.org" target="_blank" rel="noreferrer" id="login-btn" className="col-12 col-md-6 col-lg-3 btn btn-primary m-3 m-sm-0">Get in touch</a>
            </Row>
            
        </>
    );
}

export default NavBar;
