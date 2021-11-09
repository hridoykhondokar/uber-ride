import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import fakeData from '../../FakeData/fakeData.json';
import Cart from '../Cart/Cart';
import './Home.css';



const Home = () => {
 
     const [carts, setCarts] = useState([]);
     
     useEffect(() => {
        setCarts(fakeData)
     }, [])



    return (
        <div className="container">
            
           <div className="cart-main">
           <div className="row mt-5">
           {
                carts.map(cart => <Cart cart={cart} key={cart.id}></Cart>)
            }
           </div>
           </div>
        </div>
    );
};

export default Home;