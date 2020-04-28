import React, {Component} from 'react';
import Header from './composants/Interface/Header'
import Liste from './composants/Contact/Liste'
import AddContact from './composants/Contact/AddContact' 
import {Provider} from './Context'
import aPropos from './composants/Page/aPropos'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Erreur from './composants/Page/Erreur'
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {

  render(){
   
    
    return (
      <Provider>
        <Router>
      <div className="App">
        <Header/>

        <div className="container">
        <Switch>
            <Route exact path ="/AddContact" component ={AddContact}/>
            <Route exact path ="/Liste" component={Liste}/>
            <Route exact path ="/aPropos" component={aPropos}/>
            <Route component={Erreur}/>
        </Switch>
        </div>
      </div>
      </Router>
    </Provider>
      
    );
  }
  
}

export default App;
