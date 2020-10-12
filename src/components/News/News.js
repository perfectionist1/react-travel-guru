import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const News = () => {
    const {placeId} = useParams();
    console.log(placeId);
    return (
        <h2>Place: {placeId}</h2>
    );
};

export default News;