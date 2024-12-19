'use client'
import { useEffect, useState } from 'react';
import Image from "next/image";
import "./login.css";
import { BiSolidLeftArrowSquare, BiSolidRightArrowSquare } from "react-icons/bi";
import { Logo } from '../../helpers/imageExport';
import UsernameValidation from '@/helpers/checkUsername';


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

  const [ registerUsername, setRegisterUsername ] = useState('');
  const [ registerEmail, setRegisterEmail ] = useState('');
  const [ registerPassword, setRegisterPassword ] = useState('');
  const [ confirmPassword, setConfirmPassword ] = useState('');

  const [ loginEmail, setLoginEmail ] = useState('');
  const [ loginPassword, setLoginPassword ] = useState('');

  // Database query
  
  // Register Account Logic
  // if (registerUsername.length > 4 && registerUsername.length <= 30) {
  //   console.log("Success")
  // } else {
  //   console.log("failed")
  // };

  return( 
    <div className="loginPage-wrapper">
      <div className="container" id="container">       
        <div className="form-container sign-up-container">
          <form action="#" id="sign-up-form">
            <h1>Register Account</h1>
            <p>Must use the same email that you use for Youtube Membership</p>
            <input id="registerUsername" type="text" placeholder="Username" onChange={e => setRegisterUsername(e.target.value)}/>
            <input id="registerEmail" type="email" placeholder="Email" onChange={e => setRegisterEmail(e.target.value)}/>
            <input id="registerPassword" type="password" placeholder="Password" onChange={e => setRegisterPassword(e.target.value)} />
            <input id="confirmPassword" type="password" placeholder="Confirm Password" onChange={e => setConfirmPassword(e.target.value)} />
            <button>Register</button>
          </form>
        </div>
    
        <div className="form-container sign-in-container">
          <form action="#" id="sign-in-form">
            <h1>Sign in</h1>
            <input id="sign-in-email" type="email" placeholder="Email" onChange={e => setLoginEmail(e.target.value)} />
            <input id="sign-in-password" type="password" placeholder="Password" onChange={e => setLoginPassword(e.target.value)} />
            <a href="#">Forgot your password?</a>
            <button>Sign In</button>
          </form>
        </div>
    
    
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <Image src={Logo} className="logo" alt="logo" priority/>
              <h1>Hello, Friend</h1>
              <p>Already have an account?</p>
              <button className="ghost svg-ghost" id="signIn"><BiSolidRightArrowSquare className='arrow-icon'/></button>
            </div>
            <div className="overlay-panel overlay-right">
              <Image src={Logo} className="logo" alt="logo" priority/>
              <h1>Welcome Back!</h1>
              <p>Need to sign up?</p>
              <button className="ghost svg-ghost" id="signUp"><BiSolidLeftArrowSquare className='arrow-icon' /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}