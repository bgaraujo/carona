import React from 'react';
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import Spinner from 'react-bootstrap/Spinner';
import Modal from 'react-bootstrap/Modal';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      user:{},
      load:true,
      adm:false
    }
    this.startScreen = this.startScreen.bind(this);
    this.authListener = this.authListener.bind(this);
    this.loading = this.loading.bind(this);
    this.showLoad = this.showLoad.bind(this);
  }

  componentDidMount(){
    this.authListener();
  }

  authListener(){
    this.props.firebase.auth().onAuthStateChanged((user) => {
      if( user ){
        this.setState({user});
        localStorage.setItem('user',user.uid);
        this.showLoad();
      }else{
        this.setState({user:null});
        localStorage.removeItem('user');
        this.setState({load:false});
      }
      
    });
  }

  showLoad(boolean = false){
    this.setState({load:boolean});
  }

  loading(){
    return(
        <Modal show={this.state.load} className="text-center loading">
            <Spinner animation="border" variant="light" />
        </Modal>
    )
  }

  startScreen(){
    return(
      <div>
        { this.state.user ? <Home firebase={this.props.firebase}/> : <Login firebase={this.props.firebase} /> }
      </div>
    );
  }

  render(){
    return(
      <div className="App">
        {this.state.load ? <this.loading/> : < this.startScreen /> }
      </div>
    )
  }

};

export default App;