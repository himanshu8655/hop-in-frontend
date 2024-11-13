import React, { useState } from 'react';
import './Login.css';
import { signup } from '../../service/AuthService';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async(e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Remember Me:', rememberMe);
    await signup(email, password, "name")
    navigate('/chat');

  };

  return (
    <div className="login-container">
      <div className="login-image">
        <img src="car-icon.png" alt="Car icon with passengers" />
      </div>
      <form className="login-form" onSubmit={handleLogin}>
        <h1>Hop-In: Seamless Journeys, Every Time!</h1>
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <label className="remember-me">
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          Remember Me
        </label>
        <button type="submit">LOGIN</button>
      </form>
    </div>
  );
};

export default Login;