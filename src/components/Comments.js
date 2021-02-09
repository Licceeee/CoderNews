import React from 'react';
import { Container } from 'react-bootstrap';
import Comment from './Comment';

const Comments = ({ comments }) => {

    return (
        <Container>
     
            {comments && comments.map((comment) => {
                return (
                    comment.text && <Comment key={comment.id} comment={comment} />
                )
            })}
            
        </Container>
    );
}

export default Comments;


