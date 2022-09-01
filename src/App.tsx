import React from 'react';
import './styles/App.scss';
import MainNav from './components/MainNav';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import {ThemeProvider} from "./contexts/ThemeContext";

function App() {
    return (
        <ThemeProvider>
            <>
                <BrowserRouter>
                    <MainNav/>
                    <AppRouter/>
                </BrowserRouter>
            </>
        </ThemeProvider>
    );
}

export default App;
