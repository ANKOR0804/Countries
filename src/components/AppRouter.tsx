import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Countries from '../pages/Countries';
import CountryPage from '../pages/CountryPage';
import Error from '../pages/Error';

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Countries />}>
            </Route>
            <Route path="/country/:id" element={<CountryPage />}>
            </Route>
            <Route path="*" element={<Error/>}>
            </Route>
        </Routes>
    );
};

export default AppRouter;