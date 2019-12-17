import React, { useEffect } from 'react'
import './App.css'
import { setFirebase , setUser } from './Store/actions'
import { connect } from 'react-redux'

//Screns
//import LoadScreen from './components/LoadScreen'
import Login from './components/Login'
import Cad from './components/Cad'
import Home from './components/Home'

const App = ({state, dispatch ,firebase}) => {
    
    //Salva o firebase no state pra ser usado em qq lugar
    useEffect(() => {
        dispatch(setFirebase(firebase))
    },[firebase])

    useEffect(() => {  
        // Verifica se ja esta logado e entra direto
        if( firebase !== undefined)
            firebase.auth().onAuthStateChanged((user) => {
                if( user ){
                    dispatch(setUser(user.uid))
                }else{
                    dispatch(setUser(null))
                }
            });
    }, []);
    
    const SwitchScreen = () => {
        if(state.userID !== null)
            return <Home/>
        else
            switch (state.page) {
                case 'login':
                    return  <Login/> 
                case 'cad':
                    return <Cad />
                default:
                    break;
            }
    }

    return (
        <React.Fragment>
            <SwitchScreen />
        </React.Fragment>
    );
}

export default connect(state=>({state:state})) (App)