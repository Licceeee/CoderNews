import React from "react";
import NavBar from './NavBar';
import Footer from './Footer';
import { Card } from 'react-bootstrap';
import { Container, Row, Col, Spinner } from 'react-bootstrap';



const Article = ({data}) => {
    return(
        <>
            <NavBar />
            <Card className="shadow mb-3">
                <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">
                        <a href={data.url} target="blank_" className="title pr-5">{data.title}</a> 
                    </Card.Subtitle>
                    <span className="card-span">{data.author}  </span> 
                    <span className="card-span"> {data.created_at.substring(0, 10)}  </span>
                    <span className="card-span"> {data.num_comments} Comments  </span>
                    <span className="card-span"> {data.hits.story_text} </span> 
                    <span className="card-span"> {data.hits.comment_text} </span>
                </Card.Body>
            </Card>
            <Footer />
        </>
    );
}

export default Article;