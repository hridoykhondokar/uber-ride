import React from 'react';
import './Header.css';
import {Link} from "react-router-dom";
import { useContext } from 'react';
import { UserContext } from '../../App';

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-dark bg-none">
  <div className="container-fluid">
    <p className="navbar-brand">UBER RIDER</p>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-2 mr-5  mb-lg-0">
           <Link className='item' to="/home">Home</Link>
           <Link className='item' to="/contact">Contact</Link>
           <Link className='item' to="/contact">{loggedInUser.name}</Link>
        </ul>
           <Link to="/login"><button className="btn btn-outline-success" >Login</button></Link>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Header;