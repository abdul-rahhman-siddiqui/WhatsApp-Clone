import React from 'react';
import "./login.css";
import Button from '@mui/material/Button';
import { auth, provider } from './firebase';
import {useStateValue} from './StateProvider';
import { actionTypes } from "./reducer";
function login() {
    const StateValue = useStateValue;
    const [{},dispatch] = StateValue();
    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .then((result) => {
                console.log(result);
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                })
            })
            .catch((error) => alert(error.message));
    };
    return (
    <div className="login">
    <div className="login_container">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt=""/> 
         <div className="login_text">
             <h1>Sign in to Whatsapp</h1>
         </div>
         <Button type="submit" onClick={signIn}>Sign in With Google</Button>
    </div>
 </div>
);
}


export default login