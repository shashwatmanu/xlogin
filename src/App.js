import logo from './logo.svg';
import './App.css';
import React from 'react'
import { useState, useEffect } from 'react'

function App() {
  const [success, setSuccess] = useState(false);

const handleSubmit = (e) =>{
  e.preventDefault()
  if(e.target.username.value==="user" && e.target.password.value==="password"){
setSuccess(true);
  }
  else{alert('Incorrect password')}
}

  return (
    <>
    <h2>Login Page</h2>
   
  {success?(<div>Welcome user!</div>):(<div>
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
