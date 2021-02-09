import React from "react";
import { Card } from 'react-bootstrap';
import Comments from './Comments';
import { convertDate, convertTime} from '../Utils';


const Article = ({title, url, author, created_at, text, children}) => {

    
    return(
        <>
            <Card className="mb-3 pt-3">
                <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">
                        <a href={url} target="blank_" className="title pr-5">{title}</a> 
                    </Card.Subtitle>
                    <span className="card-span m-3">{author}  </span> 
                    <span className="card-span m-3"> {created_at && convertDate(created_at)}  </span>
                    <span className="card-span m-3"> {created_at && convertTime(created_at)}   <i className="far fa-clock"></i> </span>
                    <span className="card-span m-3"> {children ? children.length : 0} Comments  </span>

                    {text ? <p>{text}</p> : <h6 className="my-5"><a href={url} >{url}</a></h6>}
                    <hr />
                    <h4>Comments</h4>
                    {children && <Comments comments={children} />}
                    
                </Card.Body>
            </Card>
        </>
    );
}

export default Article;