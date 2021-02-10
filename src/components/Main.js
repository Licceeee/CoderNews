import React, { useState } from 'react';
import MyCard from './MyCard';
import ReactPaginate from 'react-paginate';
import '../css/pagination.css';
import { Container, Row, Col } from 'react-bootstrap';
import MySpinner from './MySpinner';


const Main = ({data, setArticleID }) => {
    const [currentPage, setCurrentPage] = useState(0);
    const PER_PAGE = 10;
    const offset = currentPage * PER_PAGE;

    const currentPageData = data && data
        .slice(offset, offset + PER_PAGE)
        .map((hit) => {
            return <MyCard key={hit.objectID} data={hit} setArticleID={setArticleID}/>
        });

    let pageCount = 0;
    if (data) {
        pageCount = Math.ceil(data.length / PER_PAGE)
    }
    
    const handlePageClick = ({ selected: selectedPage }) => {
        setCurrentPage(selectedPage);
    }

    if (!data) {
        return (
            <MySpinner />
        )
    }
    
    return (
        <Container>
            <Row className="m-5 d-flex justify-content-center">
                {currentPageData}
                <Col className="col-3 mt-5">
                    <ReactPaginate
                        previousLabel={<i className="fas fa-chevron-circle-left"></i>}
                        nextLabel={<i className="fas fa-chevron-circle-right"></i>}
                        pageCount={pageCount}
                        onPageChange={handlePageClick}
                        containerClassName={"pagination"}
                        previousLinkClassName={"pagination__link"}
                        nextLinkClassName={"pagination__link"}
                        disabledClassName={"pagination__link--disabled"}
                        activeClassName={"pagination__link--active"}
                    />
                </Col>
            </Row>
        </Container>
    );
}

export default Main;
