import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Remember Me:', rememberMe);
    // Perform login action (you can update the signup or authentication logic)
    navigate('/chat');
  };

  return (
    <div className="login-container">
      <div className="login-image">
        {/* Image is loaded from the public/images folder */}
        <img src="/images/car-icon.png" alt="Car icon with passengers" />
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
        <button
          type="button"
          className="secondary-button"
          onClick={() => navigate('/create-account')}
        >
          Create Account
        </button>
        <button
          type="button"
          className="secondary-button"
          onClick={() => navigate('/forgot-password')}
        >
          Forgot Password
        </button>
      </form>
    </div>
  );
};

export default Login;
