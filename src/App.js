import './App.css';
import Home from './component/Home/Home';
import Header from './component/Header/Header';
import Destination from './component/Destination/Destination';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from './component/Login/Login';
import { createContext } from 'react';
import { useState } from 'react';
import PrivetRoute from './component/PrivetRoute/PrivetRoute';

export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] =useState({})

  return (
    <UserContext.Provider  value={[loggedInUser, setLoggedInUser]}>
      <div className="App">
      <Router>
      <Header></Header>
        <Switch>

          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <PrivetRoute path="/destination/:transport">
            <Destination></Destination>
          </PrivetRoute>
          <Route path="/contact">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>

        </Switch>
      </Router>
      </div>
    </UserContext.Provider>

  )
}

export default App;
