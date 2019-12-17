import React from 'react'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import Container from '@material-ui/core/Container'
import { connect } from 'react-redux'
import { tabNavigation } from '../../Store/actions'

import SearchIcon from '@material-ui/icons/Search';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

// import { Container } from './styles';

const Home = ({ state , dispatch }) => {
    return(
        <Container style={{ height: '100%' }}>
            
            <BottomNavigation
                value={state.tab}
                onChange={(event, newValue) => {
                    dispatch(tabNavigation(newValue))
                }}
                showLabels
                >
                <BottomNavigationAction label="Buscar" icon={<SearchIcon />} />
                <BottomNavigationAction label="Agendadas" icon={<FavoriteIcon />} />
                <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
            </BottomNavigation>
        </Container>
    )
};

export default connect(state=>({state:state})) (Home);
