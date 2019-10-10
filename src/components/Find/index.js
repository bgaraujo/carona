import React from 'react';
import Nave from '../../img/nave.png';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

import PlacesAutocomplete, {
	geocodeByAddress,
	getLatLng,
  } from 'react-places-autocomplete';

class Find extends React.Component{

    constructor(props){
		super(props);
		this.state = { address: '' };
	}
	
	handleChange = address => {
		this.setState({ address });
	  };
	
	handleSelect = address => {
		console.log(address);
		geocodeByAddress(address)
		  .then(results => getLatLng(results[0]))
		  .then(latLng => console.log('Success', latLng))
		  .catch(error => console.error('Error', error));
	  };

    render(){
        return(
            <>
				

                <Row>
                    <center>
                        <img width="50%" src={Nave}/>
                    </center>
                </Row>
                <Row>
                    <h2>Procurar alguem que me leve daqui</h2>
                </Row>
                <Row>
                    <Col>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroup-sizing-default">Saindo de onde?</InputGroup.Text>
                            </InputGroup.Prepend>
                            <PlacesAutocomplete
								value={this.state.address}
								onChange={this.handleChange}
								shouldFetchSuggestions={this.state.address.length > 3}
							>
								{
									({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
										<>
											<input
											{		
												...getInputProps({
													className: 'form-control',
												})
											}
											/>
											<div className="autocomplete-dropdown-container">
											{loading && <div>Loading...</div>}
											{  
												suggestions.map(	suggestion => {
													console.log(suggestions);
													
													const className = suggestion.active ?'suggestion-item--active':'suggestion-item';
													// inline style for demonstration purpose
													return (
													<div
														{...getSuggestionItemProps(suggestion, {
														className,
														style,
														})}
													>
														<span>{suggestion.description}</span>
													</div>
													);
												})
											}
											</div>
										</>
									)
								}
							</PlacesAutocomplete>
                        </InputGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroup-sizing-default">Indo pra onde?</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                aria-label="Default"
                                aria-describedby="inputGroup-sizing-default"
                            />
                        </InputGroup>
                    </Col>
                </Row>
            </>
        )
    }
    
}

export default Find;