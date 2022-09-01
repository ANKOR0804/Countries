import React, {useEffect, useState} from 'react';
import {useFetching} from '../hooks/useFetching';
import CardService from '../API/CardService';
import {useParams} from 'react-router-dom';
import {Col, Container, ListGroup, Row} from 'react-bootstrap';
import ButtonNav from '../components/UI/button/ButtonNav';
import {BsArrowLeftShort} from 'react-icons/bs';
import Loader from '../components/UI/loader/Loader';

const CountryPage = () => {
    const {id} = useParams();
    const [countryInfo, setCountryInfo] = useState<any>();
    const [borderCountries, setBorderCountries] = useState([])

    const [fetchCountriesInfo, isCountryLoading, countryError] = useFetching(async () => {
        const response = await CardService.getById(id?.toLowerCase());
        const country = response[0];

        setCountryInfo(country);

        if (country.borders) {
            const borders: any = await CardService.getById(country.borders.map((item: any) =>
                    item.toLowerCase()
                ).join(',')
            );

            setBorderCountries(borders);
        }
    })

    useEffect(() => {
        fetchCountriesInfo();
    }, [id]);

    return (
        <section className="section-country-card">
            <Container>
                <ButtonNav className="mb-5" icon={<BsArrowLeftShort size={20}/>} title='Back' url={-1}></ButtonNav>
                {isCountryLoading &&
                  <div
                    style={{display: 'flex', justifyContent: 'center', paddingTop: '50px', marginBottom: '30px'}}>
                    <Loader/>
                  </div>
                }
                <Row>
                    <Col md={{span: 6}}>
                        <img src={countryInfo?.flagUrl}
                             alt=""
                             className="img-fluid"
                        />
                    </Col>
                    <Col md={{span: 5, offset: 1}}>
                        <h2 className="mb-5"><strong>{countryInfo?.name}</strong></h2>
                        <Row>
                            <Col md={{span: 6}}>
                                <ListGroup variant="flush">
                                    <ListGroup.Item><b>Native Name: </b>{countryInfo?.nativeName}</ListGroup.Item>
                                    <ListGroup.Item><b>Population: </b>{countryInfo?.population.toLocaleString()}</ListGroup.Item>
                                    <ListGroup.Item><b>Sub Region: </b>{countryInfo ? countryInfo.subregion : '-'}</ListGroup.Item>
                                    <ListGroup.Item><b>Capital: </b>{countryInfo?.capital.join(', ')}</ListGroup.Item>
                                </ListGroup>
                            </Col>
                            <Col md={{span: 6}}>
                                <ListGroup variant="flush">
                                    <ListGroup.Item><b>Top Level Domain: </b>{countryInfo?.topLevelDomain.join(', ')}</ListGroup.Item>
                                    <ListGroup.Item><b>Currencies: </b>{countryInfo?.currencies}</ListGroup.Item>
                                    <ListGroup.Item><b>Languages: </b>{countryInfo?.languages.join(', ')}</ListGroup.Item>
                                </ListGroup>
                            </Col>
                        </Row>
                        {
                            countryInfo?.borders &&
                          <div
                            className='d-flex align-items-center gap-2 flex-wrap'
                          >
                            Border Countries: {borderCountries.map((country: any) =>
                              <ButtonNav url={`/country/${country.id}`} title={country.name} key={country.id} />
                          )}
                          </div>
                        }
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default CountryPage;