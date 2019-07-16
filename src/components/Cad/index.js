import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

class Cad extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:''
        }
        this.back = this.back.bind(this);
        this.cad = this.cad.bind(this);
        this.change = this.change.bind(this);
    }

    change(e){
        this.setState({[e.target.name]:e.target.value});
        if(e.target.name === "personType" && e.target.value === "P")
            this.setState({professional:true});
        if(e.target.name === "personType" && e.target.value === "N")
            this.setState({professional:false});
    }

    back(){
        this.props.back();
    }

    cad(){
        this.props.firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .catch(function(error) {
            console.log(error);
            alert(error.message);
            document.getElementsByClassName("form-control").className += "error";
        });
    }

    render(){
        return(
            <Container>
                <Row>
                    <Col md={{ span: 4, offset: 4 }}>
                        <Card>
                            <Card.Body>
                                <Card.Title>Cadastro para login na plataforma</Card.Title>
                                <Form>
                                    <Form.Group className="text-left">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control 
                                            type="email" 
                                            placeholder="seu_email@..."
                                            name="email"
                                            onChange={this.change} 
                                        />
                                    </Form.Group>

                                    <Form.Group className="text-left">
                                        <Form.Label>Senha</Form.Label>
                                        <Form.Control 
                                            type="password" 
                                            placeholder="Sua senha"
                                            name="password"
                                            onChange={this.change}
                                        />
                                    </Form.Group>
                                    <Form.Group className="button-group">
                                        <Button onClick={this.back} className="left" variant="secondary">Voltar</Button>
                                        <Button onClick={this.cad} className="right" variant="primary">Cadastrar</Button>
                                    </Form.Group>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
    
}

export default Cad;