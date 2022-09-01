import React, {useContext} from 'react';
import {Button, Container, Navbar} from 'react-bootstrap';
import {BsMoonFill} from 'react-icons/bs';
import {ThemeContext} from '../contexts/ThemeContext';

const MainNav = () => {
    const {toggleTheme} = useContext(ThemeContext)

    return (
        <Navbar className='shadow-sm'>
            <Container>
                <Navbar.Brand href="/"><strong>Where in the world?</strong></Navbar.Brand>
                <Button variant="light"
                        className='btn-switch-theme'
                        onClick={() => toggleTheme()}
                >
                    <BsMoonFill className='btn-switch-theme__icon me-2'/>
                    Dark Mode
                </Button>
            </Container>
        </Navbar>
    );
};

export default MainNav;