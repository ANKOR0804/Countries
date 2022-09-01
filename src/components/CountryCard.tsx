import React from 'react';
import {Card} from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import {ICountry} from '../types/types';
import {useNavigate} from 'react-router-dom';

const CountryCard = (props: ICountry) => {

    const router = useNavigate();
    return (
        <Card onClick={() => router(`/country/${props.id}`)} className='mb-4'>
            <Card.Img className='card__image' variant="top" src={props.flagUrl}/>
            <Card.Body>
                <Card.Title><strong>{props.name}</strong></Card.Title>
                <ListGroup as="ul" variant="flush">
                    <ListGroup.Item as="li"><b>Population:</b> {props.population.toLocaleString()}</ListGroup.Item>
                    <ListGroup.Item as="li"><b>Region:</b> {props.region}</ListGroup.Item>
                    <ListGroup.Item as="li"><b>Capital:</b> {props.capital}</ListGroup.Item>
                </ListGroup>
            </Card.Body>
        </Card>
    );
};

export default CountryCard;