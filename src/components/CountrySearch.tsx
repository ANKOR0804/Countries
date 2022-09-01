import React from 'react';
import {BsSearch} from 'react-icons/bs';

const CountrySearch = (props:any) => {
    return (
        <div className="input-group mb-3">
            <span className="input-group-text" id="CountrySearch"><BsSearch/></span>
            <input type="text"
                   className="form-control"
                   placeholder="Search for a country"
                   aria-label="Search for a country"
                   aria-describedby="CountrySearch"
                   {...props}
            />
        </div>
    );
};

export default CountrySearch;