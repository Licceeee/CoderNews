import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import DOMPurify from 'dompurify';
import Comments from './Comments';
import { convertDate, convertTime} from '../Utils';



const Comment = ({ comment }) => {

    return (
        <>
            <Container className="shadow-sm m-md-2">
                <Row className="row p-md-1">
                    <Col className="col-12 col-md-6"><p><b>{comment.author}</b> <small>on {convertTime(comment.created_at)}   
                        <i className="far fa-clock"></i></small></p>
                    </Col>
                    
                    <Col className="col-12 col-md-6 right">
                        <span className="card-span m-md-5">  {convertDate(comment.created_at)} </span>
                    </Col>  
                </Row>
                <p className="p-0 m-0 p-md-1" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(comment.text)}} />
            </Container>
            {comment.children && <Comments comments={comment.children}/>}
       </>
    );
}

export default Comment;
