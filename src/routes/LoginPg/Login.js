import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import ForgotPasswordModal from '../ForgotPasswordPg/ForgotPasswordModal'; // Import the modal


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Remember Me:', rememberMe);
    // Simulate login logic here
    navigate('/chat');
  };

  const handleForgotPassword = () => {
    setIsModalOpen(true); // Open the modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  return (
    <div className="login-container">
      <div className="login-image">
        <img src="\images\car-icon.png " alt="Car icon with passengers" />
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
          onClick={handleForgotPassword} // Open modal on click
        >
          Forgot Password
        </button>
      </form>

      {/* Forgot Password Modal */}
      <ForgotPasswordModal
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
};

export default Login;
