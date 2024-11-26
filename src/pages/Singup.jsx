import React from "react";
import {useState, useEffect} from "react";
import images from "../assets/imagen";
import './Signup.css';
const Signup = () => {
const[inputValue, setInputValue] = useState('');


const handleChange = (e) => {
    setInputValue(e.target.value);
};

    return(
        <div>
            <div className="signup">
            <span>Airlines</span>
            <h1>Sign up</h1>
            <form className="form">
                <div className="email">
                <label>Email</label>
                <input type="email" placeholder="email@example.com"/>
                </div>
                
                <div className="password"> 
                <label>Contraseña</label>
                <input type="password" placeholder="Contraseña"/>
                </div>
                <button>Sign up</button>
            </form>
            </div>
        </div>
    );
}

export default Signup;