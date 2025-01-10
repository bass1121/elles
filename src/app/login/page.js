'use client';

import { useEffect, useState } from 'react';
import { useRouter } from "next/navigation";
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

  const [ user, setUser ] = useState({
    email: "",
    password: "",
    username: "",
  });

  const [ loginUser, setLoginUser ] = useState({
    email: "",
    password: "",
  })

  const onSignup = async () => {
  };

  const onLogin = async () => {

  };
  // Validation Code

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
            <input id="registerUsername" type="text" placeholder="Username" value={user.username} onChange={e => setUser({...user, username: e.target.value})}/>
            <input id="registerEmail" type="email" placeholder="Email" value={user.email} onChange={e => setUser({...user, email: e.target.value})}/>
            <input id="registerPassword" type="password" placeholder="Password" value={user.password} onChange={e => setUser({...user, password: e.target.value})} />
            <input id="confirmPassword" type="password" placeholder="Confirm Password" onChange={e => setConfirmPassword(e.target.value)} />
     
            <button onclick={onSignup}>Register</button>
          </form>
        </div>
    
        <div className="form-container sign-in-container">
          <form action="#" id="sign-in-form">
            <h1>Sign in</h1>
            <input id="sign-in-email" type="email" placeholder="Email" value={loginUser.email} onChange={e => setLoginUser({...loginUser, email: e.target.value})} />
            <input id="sign-in-password" type="password" placeholder="Password" value={loginUser.password} onChange={e => setLoginUser({...loginUser, password: e.target.value})} />
            <a href="#">Forgot your password?</a>
            <button onclick={onLogin}>Sign In</button>
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