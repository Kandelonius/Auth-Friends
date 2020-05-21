import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import logo from './logo.svg';
import PrivateRoute from "./components/PrivateRoute";
import FriendsList from "./components/FriendsList";
import FriendForm from "./components/FriendForm";
import Login from "./components/Login";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/Friends">Protected Page</Link>
          </li>
          <li>
            <Link to="/FriendForm">Form Page</Link>
          </li>
        </ul>
        <Switch>
          <PrivateRoute exact path="/Friends" component={FriendsList} />
          <PrivateRoute exact path="/FriendForm" component={FriendForm} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
