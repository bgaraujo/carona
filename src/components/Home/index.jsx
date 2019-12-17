import React from 'react';
import Container from '@material-ui/core/Container';

import NavigationScreen from '../NavigationScreen'
import NavigationBtn from '../NavigationBtn'

const Home = () => {
    return(
        <Container>
            <NavigationScreen />
            <NavigationBtn />
        </Container>
    )
};

export default Home;
