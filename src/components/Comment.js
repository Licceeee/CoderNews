import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import DOMPurify from 'dompurify';
import Comments from './Comments';
import { convertDate, convertTime} from '../Utils';



const Comment = ({ comment }) => {

    return (
        <>
            <Container className="shadow-sm m-2">
            <Row className="row p-1">
                <Col className="col-6"><p><b>{comment.author}</b> <small>on {convertTime(comment.created_at)}   <i className="far fa-clock"></i></small></p> </Col>
                <Col className="col-6 right">
                <span className="card-span m-5">  {convertDate(comment.created_at)} </span>
                </Col>  
            </Row>
            <p className="p-1" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(comment.text)}} />
            </Container>
            {comment.children && <Comments comments={comment.children}/>}
       </>
    );
}

export default Comment;
