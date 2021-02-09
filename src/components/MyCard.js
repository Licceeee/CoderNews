import React from 'react';
import { Card } from 'react-bootstrap';
import { convertDate, convertTime} from '../Utils';


const MyCard = ({ data, setArticleID }) => {

    return (
        <>
            <Card className="shadow mb-3">
                <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">
                    <a href={data.url} target="blank_" className="title">{data.title}</a> 

                    {/* <button className="a-btn pr-5" onClick={() => {setArticleID(data.objectID)}} >{data.title}</button> */}
                    </Card.Subtitle>
                    <span className="card-span">{data.author}  </span> 
                    <span className="card-span m-5">  {convertDate(data.created_at)} </span>
                    <span className="card-span m-5"> {convertTime(data.created_at)}  <i className="far fa-clock"></i></span>
                    <button className="btn btn-outline-dark card-span" onClick={() => {setArticleID(data.objectID)}} >{data.num_comments} Comments </button>

                    {/* <a href={} className="href" onClick={() => {setArticleID(data.objectID)}}> <span className="card-span m-3"> {data.num_comments} Comments  </span></a> */}
                    {/* <span className="card-span m-3"> {data.num_comments} Comments  </span> */}
                    {/* <a href={data.url} target="blank_" className="pr-5 m-3 text-black-50">Original link</a>  */}
                </Card.Body>
            </Card>
        </>
    );
}

export default MyCard;
