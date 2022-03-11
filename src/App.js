import React from 'react'
import ReactDOM from 'react-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import AddContact from './components/addContact/AddContact';

import "bootstrap/dist/css/bootstrap.min.css";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Switch, Route } from 'react-router-dom';
import EditContact from './components/editContact/EditContact';

const App = () => {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/add" component={() => <AddContact /> }> 
        </Route>
        <Route path="/edit/:id">
          <EditContact />
        </Route>
      </Switch> 
    </div>
  );
}

export default App;
