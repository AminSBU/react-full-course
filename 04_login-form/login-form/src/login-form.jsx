import React, { useState } from 'react';  
import './login-form.css'

function Login()
{
    return (  
        <div className='item-container'>
          <h2>Login</h2>
          <div>
          <p className='user-text'>Username</p>
          <img src='./img/username-50.png' className='usernameImg'></img>
            <input   
              type="text"   
              className="textInput"   
              placeholder="type username..."   
            />
          </div>
          
          <div>
            <p className='password-text'>Password</p>
            <img src='./img/password-50.png' className='passwordImg'></img>
            <input   
              type="text"   
              className="textInput"   
              placeholder="type password..."  
              required 
            />
          </div>

          <div>
            <input
              type='checkbox'
              className='save-login-checkbox'
            />save Your information
          </div>

          <div>
            <button className='login-button'>login</button>
          </div>
        </div>  
      );  
    } 

export default Login;