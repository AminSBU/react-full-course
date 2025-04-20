import React, { useState } from 'react';  

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
        </div>  
      );  
    } 

export default Login;