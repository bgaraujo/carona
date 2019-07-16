import React from 'react';
import './style.css';

//Bootstrap
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


//Screns 
import Find from '../Find';
import CadRide from '../CadRide';

import { thisExpression } from '@babel/types';

class Home extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:'',
            cad:false,
            screen:'Find'
        }
        this.screen = this.screen.bind(this);
        this.setScreen = this.screen.bind(this);
    }

    setScreen(screen){
        console.log(screen);
        this.setState({screen:screen});
    }

    screen(){
        var screen;
        switch (this.state.screen) {
            case "Find":
                screen = <Find />
                break;
            
            case "CadRide":
                screen = <CadRide />
                break;
        
            default:
                break;
        }
        return (
            screen
        );
    }

    render(){
        return(
            <Container>
                <this.screen /> 
                <Row col="12" className="footer">
                    <ButtonGroup size="lg">
                        <Button onClick={this.setScreen} name="Find" variant="secondary">Buscar</Button>
                        <Button onClick={this.setScreen} name="CadRide" variant="secondary">Oferecer</Button>
                        <Button onClick={this.setScreen} variant="secondary">Agendada</Button>
                        <Button onClick={this.setScreen} variant="secondary">Perfil</Button>
                    </ButtonGroup>
                </Row>
            </Container>
        )
    }
    
}

export default Home;