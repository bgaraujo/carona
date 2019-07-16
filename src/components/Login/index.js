import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Style from './styles.css';
import Cad from '../Cad';


class Login extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:'',
            cad:false
        }
        this.login = this.login.bind(this);
        this.change = this.change.bind(this);
        this.submit = this.submit.bind(this);
        this.cadForm = this.cadForm.bind(this);
        this.openCad = this.openCad.bind(this);
        this.back = this.back.bind(this);
    }

    back(){
        this.setState({cad:false});
    }

    login(e){
        const auth = this.props.firebase.auth();
        auth.signInWithEmailAndPassword(this.state.email,this.state.password).catch(function(error) {
            for (let index = 0; index < document.querySelectorAll('[data-control]').length; index++) {
                document.querySelectorAll('[data-control]')[index].className += " is-invalid";
                
            }
        });
    }

    submit(e){
        if (e.key === 'Enter')
            this.login();
    }

    openCad(e){
        if( e.target.getAttribute('bool') === 'true' || e.target.getAttribute('bool') === 'false' )
            this.setState({cad:e.target.getAttribute('bool')});
    }

    change(e){
        this.setState({[e.target.name]:e.target.value});
        if(e.target.name === "personType" && e.target.value === "P")
            this.setState({professional:true});
        if(e.target.name === "personType" && e.target.value === "N")
            this.setState({professional:false});
    }

    cadForm(){
        return(
            <Container> 
                <Row>
                    <Col md={{ span: 4, offset: 4 }}>
                        <Card>
                            <Card.Body>
                                <Form.Group data-control="login">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control
                                        type="email"
                                        name="email"
                                        value={this.state.email}
                                        onChange={this.change}
                                        placeholder="Enter email"/>
                                </Form.Group>
                                <Form.Group data-control="login">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control 
                                        type="password"
                                        name="password" 
                                        value={this.state.password} 
                                        onChange={this.change}
                                        onKeyPress={this.submit}
                                        placeholder="Password"/>
                                </Form.Group>

                                <Form.Group className="button-group">
                                    <Button onClick={this.login} className="left" variant="primary">Entrar</Button>
                                    <Button onClick={this.openCad} className="right" bool="true" variant="secondary">Cadastrar</Button>
                                </Form.Group>
        
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        ); 
    }
    
    render(){
        return(
            <>
                { this.state.cad ? <Cad firebase={this.props.firebase} back={this.back}/> : < this.cadForm /> }
            </>
        )
    }
    
}

export default Login;