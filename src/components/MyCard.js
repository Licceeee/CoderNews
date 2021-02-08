import React from 'react';
import { Card } from 'react-bootstrap';

const MyCard = ({ data, setArticleID }) => {

    return (
        <>
            <Card className="shadow mb-3">
                <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">

                    <button className="a-btn pr-5" onClick={() => {setArticleID(data.objectID)}} >{data.title}</button>
                    </Card.Subtitle>
                    <span className="card-span">{data.author}  </span> 
                    <span className="card-span m-5"> {data.created_at.substring(0, 10)}  </span>
                    <span className="card-span m-3"> {data.num_comments} Comments  </span>
                    <a href={data.url} target="blank_" className="pr-5  m-3">See original link</a> 
                    
                </Card.Body>
            </Card>
        </>
    );
}

export default MyCard;
