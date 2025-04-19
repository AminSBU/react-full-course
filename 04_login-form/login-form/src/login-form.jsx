import React, { useState } from 'react';  

function Login()
{
    return (  
        <div>
            <p className='user-text'>Username</p>
          <input   
            type="text"   
            className="textInput"   
            placeholder="type something..."   
          />
        </div>  
      );  
    } 

export default Login;