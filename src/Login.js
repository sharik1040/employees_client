import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

const loginUser = async (credentials) => {
    let response = await fetch("https://employeesserver.herokuapp.com/login", {
      method: 'POST',
      headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    });
    if(response.status === "400"){
      return "Password don't match";
    }else{
      let data = await response.json();
      return data;
    }
}


export default function Login({ setToken }) {
  const [login, setLogin] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const output = await loginUser({
      login,
      password,
      email
    });
    const { token } = output;
    setToken(token);
    <Redirect to="/employeetable"/>;
  }

  return(
    <div className="login-wrapper">
      <h1>Please Log In</h1>
        <form onSubmit={handleSubmit}>
        <label>
            <p>Username</p>
            <input type="text" onChange={e => setLogin(e.target.value)}/>
        </label>
        <label>
            <p>Password</p>
            <input type="password" onChange={e => setPassword(e.target.value)}/>
        </label>
        <label>
            <p>Email</p>
            <input type="email" onChange={e => setEmail(e.target.value)}/>
        </label>
        <div>
            <button type="submit">Submit</button>
        </div>
        </form>
    </div>
  )
}