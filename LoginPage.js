//Corporal, Marc Lloyd G.
//CS-403

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log ('Login clicked');
    navigate('/landing');
  };
 
  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
      />
      <br />

      <input
        type="password"
        placeholder="Password"
      />
      <br />
      <button onClick={handleLogin}>Login </button> 
    </div>
  );
}

export default LoginPage;
