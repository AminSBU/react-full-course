import React, { useState } from 'react';  
import './login-form.css'

function Login()
{
    return (  
        <div className='item-container'>
          <h2>Login Form</h2>
          <p className='user-text'>Username</p>
          <div>
            <input   
              type="text"   
              className="textInput"   
              placeholder="type something..."   
            />
          </div>

          <div>
            <p className='user-text'>Password</p>
            <input   
              type="text"   
              className="textInput"   
              placeholder="type something..."  
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