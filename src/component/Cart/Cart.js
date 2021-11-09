import React from 'react';
import './Cart.css'
import {Link, useHistory} from "react-router-dom";

const Cart = (props) =>{
  const {transport, img} = props.cart;
  const history = useHistory();
    const handleClick = () => {
        history.push(`/destination/${transport}`)
    }  
    return (
        <div onClick={handleClick} className= 'col-md-3 cart'>
              <div className="cart-style">
              <img src={img} alt="" />
              <h3>{transport}</h3>
              <Link to= {`/destination/${transport}`} className="btn btn-danger w-100">Buy Ticket</Link>
              </div>
        </div>
    );
};

export default Cart;