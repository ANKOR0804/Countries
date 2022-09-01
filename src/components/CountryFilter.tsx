import Dropdown from 'react-bootstrap/Dropdown';
import {FC, useState} from 'react';

interface CountryFilterProps {
    filters: string[];
    filter: string;
    onChange: (region: string) => void;
}

const CountryFilter: FC<CountryFilterProps> = ({filters,  filter, onChange}) => {
    const [region, setRegion] = useState('All');

    return (
        <Dropdown className="filter">
            <Dropdown.Toggle className="filter__toggle" variant="light" id="dropdown-basic">
                {region === 'All' ? 'Filter by Region' : region}
            </Dropdown.Toggle>

            <Dropdown.Menu className="filter__menu">
                {
                    filters.map((filter: string) =>
                        <Dropdown.Item
                            key={filter}
                            onClick={() => {
                                setRegion(filter)
                                onChange(filter)
                            }}
                        >{filter}</Dropdown.Item>
                    )
                }
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default CountryFilter;