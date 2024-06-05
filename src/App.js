import logo from './logo.svg';
import './App.css';
import React from 'react'
import { useState, useEffect } from 'react'

function App() {
  const [success, setSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

const handleSubmit = (e) =>{
  e.preventDefault()
  if(e.target.username.value==="user" && e.target.password.value==="password"){
setSuccess(true);
  }
  else{
    setShowError(true);
  }
}

  return (
    <>
    <h2>Login Page</h2>
   {showError?<div>Invalid username or password</div>:""}
  {success?(<p>Welcome, user</p>):(<div>
    <form onSubmit={handleSubmit}>
      <div style={{display:'flex', flexDirection: 'column'}}>
        <div>
      <label for="username">Username:</label><input type="text" placeholder="username" id="username" name="username" required/>
      </div>
      <div>
      <label for="password">Password:</label><input type="password" placeholder="password" id="password" name="password" required/>
      </div>
      <div>
      <button>Submit</button></div>
      </div>
    </form>
  </div>)}
    </>
  );
}

export default App;
