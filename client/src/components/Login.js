import React, { useState } from "react";
import axios from 'axios';

const Login = (props) => {
  const[ user, setUser ] = useState({
    username: '',
    password: ''
});

  const changeHandler = (e) => {
      setUser({
          ...user,
          [e.target.name]: e.target.value
      });
  };

  const login = (e) => {
      e.preventDefault();
      axios.post("http://localhost:5000/api/login", user)
      .then(res => {
          console.log(res);
          localStorage.setItem('token', res.data.payload);
          props.history.push('/bubblepage');
      })
  };

  return(
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <form>
        <input name="username" value={user.username} onChange={changeHandler} />
        <input name="password" value={user.password} onChange={changeHandler}/>
        <button onClick={login}>Log In</button>
      </form>
    </div>
  );
};

export default Login;