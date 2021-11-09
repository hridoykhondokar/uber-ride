import React from 'react';
import { useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig';
import './Login.css'
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

firebase.initializeApp(firebaseConfig);

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [newUser, setNewUser] = useState(false)
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        error: '',
        success: false
    });

    let history = useHistory();
    let location = useLocation();


  let { from } = location.state || { from: { pathname: "/" } };

    const handleBlur = (event) => {
        let isFieldValid;

        if (event.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(event.target.value)

        }

        if (event.target.name === 'password') {
            const isPasswordValid = event.target.value.length > 6
            const isPasswordHasNumber = /\d{1,2}/.test(event.target.value)
            isFieldValid = isPasswordValid && isPasswordHasNumber;
        }

        if (isFieldValid) {
            const newUserInfo = { ...user };
            newUserInfo[event.target.name] = event.target.value;
            setUser(newUserInfo)
        }

    };
    const handleSubmit = (event) => {
        if (newUser && user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newUserInfo = { ...user }
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo)
                    setLoggedInUser(newUserInfo)
                    console.log(res)
                })
                .catch(error => {
                    const newUserInfo = { ...user }
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo)
                });
        }

        if (!newUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then((res) => {
                    const newUserInfo = { ...user }
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                    setLoggedInUser(newUserInfo)
                    history.replace(from);
                })
                .catch((error) => {
                    const newUserInfo = { ...user }
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo)
                });
        }
        event.preventDefault();
    };





    return (
        <div className='container'>
             <div className="row">
             <div className="col-xl-6 col-md-12 ">
                  <div className="from"> 
                  {
                newUser ? <h1>Create Account</h1> : <h1>Login</h1>
            }
            <form onSubmit={handleSubmit}>
                {newUser && <input className='w-50' name="name" onBlur={handleBlur} type="text" required placeholder="Your name" />}
                <br />
                <br />
                <input className='w-50' name="email" onBlur={handleBlur} type="email" required placeholder="Your email" />
                <br />
                <br />
                <input className='w-50 ' name="password" onBlur={handleBlur} type="password" required placeholder="Your password" />
                <br />
                <br />
                <input className='w-50 btn-success' style={{border: 'none'}} type="submit" value={newUser ? 'Submit' : 'Login'} />
            </form>
            <br />
            {
                newUser ? <p> <small>Already has account?</small> <a style={{ cursor: 'pointer', color: 'red' }} onClick={() => setNewUser(!newUser)}>Login</a> </p> :
                    <p> <small>Don't have an account?</small> <a style={{ cursor: 'pointer', color: 'red' }} onClick={() => setNewUser(!newUser)}>create an account</a> </p>
            }
            <p style={{ color: 'red' }}>{user.error}</p>
            {
                user.success && <p style={{ color: 'green' }}>User {newUser ? 'created' : 'login'} successfully</p>
            }
                  </div>
             </div>
             </div>
        </div>
    );
};

export default Login;
