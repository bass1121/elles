"use client";
import { useEffect } from 'react';
import Image from "next/image";
import "./login.css";
import { BiSolidLeftArrowSquare } from "react-icons/bi";
import { BiSolidRightArrowSquare } from "react-icons/bi";
import { Logo } from '../helpers/imageExport';

export default function Login() {
  useEffect(() => {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');
    
    if (signUpButton) {
      signUpButton.addEventListener('click', () => {
        container.classList.add("right-panel-active");
      });
    }
  
    if (signUpButton) {
      signInButton.addEventListener('click', () => {
        container.classList.remove("right-panel-active");
      }); 
    }
  }, []);

  return(
    <div className="loginPage-wrapper">
      <div className="container" id="container">       
        <div className="form-container sign-up-container">
          <form action="#" id="sign-up-form">
            <Image src={Logo} className="logo" alt="logo" />
            <h1>Create Account</h1>
            <input id="sign-up-name" type="text" placeholder="Name" />
            <input id="sign-up-email" type="email" placeholder="Email" />
            <input id="sign-up-password" type="password" placeholder="Password" />
            <button>Sign Up</button>
          </form>
        </div>
    
        <div className="form-container sign-in-container">
          <form action="#" id="sign-in-form">
            <Image src={Logo} className="logo" alt="logo" priority/>
            <h1>Sign in</h1>
            <input id="sign-in-email" type="email" placeholder="Email" />
            <input id="sign-in-password" type="password" placeholder="Password" />
            <a href="#">Forgot your password?</a>
            <button>Sign In</button>
          </form>
        </div>
    
    
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Hello, Friend</h1>
              <p>Already have an account?</p>
              <button className="ghost" id="signIn"><BiSolidRightArrowSquare className='arrow-icon'/></button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Welcome Back!</h1>
              <p>Need to sign up?</p>
              <button className="ghost" id="signUp"><BiSolidLeftArrowSquare className='arrow-icon' /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}