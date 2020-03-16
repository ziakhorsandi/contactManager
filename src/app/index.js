import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter , Route , Switch } from 'react-router-dom'
// import {HashRouter as Router , Route , Switch} from 'react-router-dom'
import {Provider} from './Context'

import AddContact from './components/AddContact';
import EditContact from './components/EditContact';
import Nav from './components/Nav';
import Contacts from './components/Contacts';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';



class App extends React.Component {
  render() {
    return (
     <Provider>
      <BrowserRouter basename="contactManager">
        <main style={{ fontSize:"14px" }}>
          <Nav/>
          <div className="container-fluid">  
            <Switch>
              <Route exact path="/" component={Contacts}  />
              <Route  path="/about" component={About} />
              <Route exact path="/add" component={AddContact} />
              <Route exact path="/edit/:id" component={EditContact} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </main> 
      </BrowserRouter>
     </Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('App'));