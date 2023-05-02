import moment from 'moment/moment';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { FaRegBookmark, FaStar, FaShareAlt, FaEye, FaRegStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {

    const { _id, title, image_url, details, author, rating, total_view } = news;

    return (
        <Card className="mb-4">
            <Card.Header className='d-flex align-items-center'>
                <Image style={{ height: '40px' }} src={author?.img} roundedCircle />
                <div className='flex-grow-1 ps-3'>
                    <p className='mb-0 fw-semibold fs-5'>{author.name}</p>
                    <p className='mb-0'>{moment(author.published_date).format("YYYY-MM-d")}</p>
                </div>
                <div>
                    <FaRegBookmark></FaRegBookmark> <FaShareAlt></FaShareAlt>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title className='fw-bold'>{title}</Card.Title>
                <Card.Img className='mt-2 mb-4' variant="top" src={image_url} />
                <Card.Text>
                    {details.length < 200 ?
                        <>{details}</> :
                        <>
                            {details.slice(0, 200)} ...
                            <Link to={`/news/${_id}`}>Read More</Link>
                        </>
                    }
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted d-flex">
                <div className='flex flex-grow-1 align-items-center'>
                    <Rating
                        placeholderRating={rating?.number}
                        readonly
                        emptySymbol={<FaRegStar />}
                        placeholderSymbol={<FaStar className='text-warning' />}
                        fullSymbol={<FaStar />}
                    ></Rating>
                    <span> {rating?.number}</span>
                </div>
                <div>
                    <FaEye></FaEye>
                    <span> {total_view}</span>
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsCard;