import React from 'react'
import useStyles from  '../../Styles/style'
import clsx from 'clsx'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import { connect } from 'react-redux'
import { setUser } from '../../Store/actions'

import { 
    Typography,
    Grid,
    Paper,
    Button,
    FormControl,
    InputLabel,
    Input,
    InputAdornment,
    IconButton
} from '@material-ui/core';

const Cad = ({state , dispatch}) => {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        email:'',
        weight: '',
        weightRange: '',
        showPassword: false,
    })

    const handleChange = prop => event => {
        setValues({ ...values, [prop]: event.target.value });
    }

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    }

    const handleMouseDownPassword = event => {
        event.preventDefault();
    }

    const cad = () => {
        state.firebase.auth().createUserWithEmailAndPassword(values.email, values.password)
        .then(function(user) {
            dispatch( setUser(user.uid) )
        })
        .catch(function(error) {
            console.log(error);
            alert(error.message);
        });
    }

    return(
        <Grid justify="center" xs={12} container>
            <Paper className={classes.Paper}>
                <Typography variant="h5" component="h2">
                    Cadastro para login na plataforma
                </Typography>
                
                <FormControl fullWidth>
                    <InputLabel htmlFor="standard-adornment-password">Email</InputLabel>
                    <Input 
                        label="email" 
                        value={values.email}
                        onChange={handleChange('email')}
                        />
                </FormControl>
                
                <FormControl fullWidth className={clsx(classes.margin, classes.textField)}>
                    <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                    <Input
                        id="standard-adornment-password"
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        onChange={handleChange('password')}
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            >
                            {values.showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                        }
                    />
                </FormControl>
                
                <FormControl fullWidth>
                    <Button 
                            onClick={cad}
                            className={classes.Button} 
                            variant="contained">
                            Cadastrar
                        </Button>
                </FormControl>
            </Paper>
        </Grid>
    )
}

export default connect( state => ( { state:state } ) ) (Cad);
