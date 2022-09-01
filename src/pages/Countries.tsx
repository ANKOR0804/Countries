import React, {FC, useEffect, useMemo, useState} from 'react';
import CountryCard from '../components/CountryCard';
import {Col, Container, Row} from 'react-bootstrap';
import CardService from '../API/CardService';
import {useFetching} from '../hooks/useFetching';
import {ICountry} from '../types/types';
import CountryFilter from '../components/CountryFilter';
import CountrySearch from '../components/CountrySearch';
import Loader from '../components/UI/loader/Loader';

const FILTER_BY = ['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

const Countries: FC = () => {
    const [countries, setCountries] = useState<ICountry[]>([]);
    const [selectedFilter, setSelectedFilter] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredCountries = useMemo(() => {
        if (selectedFilter) {
            if (selectedFilter === 'All') {
                return countries;
            }

            return [...countries].filter((filter: any) => filter.region === selectedFilter);
        }

        return countries;
    }, [selectedFilter, countries]);

    const filteredAndSearchedCountries = useMemo(() => {
        return filteredCountries.filter(country => country.name.toLowerCase().includes(searchQuery.toLowerCase()));
    }, [searchQuery, filteredCountries])

    const [fetchCountries, isCountryLoading, countryError] = useFetching(async () => {
        const response = await CardService.getCustom();
        setCountries([...response]);
    })

    useEffect(() => {
        fetchCountries();
    }, []);

    const filterByRegion = (region: string) => {
        setSelectedFilter(region);
    }

    return (
        <section className="section-country-board">
            <Container>
                <Row className="mb-4">
                    <Col md={{span: 5}}>
                        <CountrySearch
                            value={searchQuery}
                            type="text"
                            onChange={(e: any) => setSearchQuery(e.target.value)}
                            placeholder="Search for a country..."
                        />
                    </Col>
                    <Col lg={{span: 2, offset: 5}}>
                        <CountryFilter
                            filter={selectedFilter}
                            onChange={filterByRegion}
                            filters={FILTER_BY}
                        />
                    </Col>
                </Row>
                <Row>
                    {filteredAndSearchedCountries.map((item: any) =>
                        <Col sm={6} xl={3} className='mb-5' key={item.id}>
                            <CountryCard {...item}></CountryCard>
                        </Col>
                    )
                    }
                    {isCountryLoading &&
                      <div
                        style={{display: 'flex', justifyContent: 'center', paddingTop: '50px', marginBottom: '30px'}}>
                        <Loader/>
                      </div>
                    }
                </Row>
            </Container>
        </section>
    );
};

export default Countries;