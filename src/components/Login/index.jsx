import React , { useState } from 'react'
import useStyles from  '../../Styles/style'
import { connect } from 'react-redux'
import { navigation } from '../../Store/actions'
import { 
    FormControl,
    Input,
    InputLabel, 
    Button,
    Grid,
    Paper,
    FormHelperText
} from '@material-ui/core';

import AirportShuttle from '@material-ui/icons/AirportShuttle';

// import { Container } from './styles';

const Login = ({ state , dispatch}) => {
    const classes = useStyles();
    const [ required, setRequired ] = useState('')
    const [ email, setemail ] = useState('');
    const [ pass, setpass ] = useState('');



    const login = (e) => {
        const auth = state.firebase.auth();
        auth.signInWithEmailAndPassword(email,pass).catch(function(error) {
            console.log(error.code)
            setRequired('required')
        }); 
	}
	
	// forgetPass(){
	// 	const auth = this.props.state.firebase.auth();
	// 	auth.sendPasswordResetEmail(this.state.email).then(function() {
	// 		alert("foi");
	// 	  }).catch(function(error) {
	// 		// An error happened.
	// 	  });
	// }

    // submit(e){
    //     if (e.key === 'Enter')
    //         this.login();
    // }

    // openCad(e){
    //     if( e.target.getAttribute('bool') === 'tirue' || e.target.getAttribute('bool') === 'false' )
    //         this.setState({cad:e.target.getAttrbute('bool')});
    // }

    // change(e){
    //     this.setState({[e.target.name]:e.target.value});
    //     if(e.target.name === "personType" && e.target.value === "P")
    //         this.setState({professional:true});
    //     if(e.target.name === "personType" && e.target.value === "N")
    //         this.setState({professional:false});
    // }


    return(
        <Grid justify="center" xs={12} container>
            <Paper className={classes.Paper}>
                <Grid item xs={12} >
                    <AirportShuttle className={classes.iconTitle}/>
                </Grid>
                <Grid item xs={12}>
                    <FormControl fullWidth>
                        <InputLabel className={required}>Email</InputLabel>
                        <Input type='email' className={required} value={email} onChange={ (e) => setemail(e.target.value) } />
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <FormControl fullWidth>
                        <InputLabel className={required}>Senha</InputLabel>
                        <Input type='password' className={required} value={pass} onChange={ (e) => setpass(e.target.value) } />
                        <FormHelperText>Esqueci a senha</FormHelperText>
                    </FormControl>
                </Grid>
                <Grid container direction="row" justify="space-between" xs={12}>
                    <Grid item>
                        <Button 
                            onClick={login}
                            className={classes.Button} 
                            variant="contained">
                            Entrar
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button 
                            onClick={ () => dispatch(navigation('cad')) }
                            className={classes.Button} 
                            variant="contained">
                            Cadastrar
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
     
    );
}

export default connect( state =>({state:state}) ) (Login);
