import React, { useState } from 'react';
import './CreateAccount.css';
import { signup } from '../../service/AuthService';
import { useNavigate } from 'react-router-dom';

const CreateAccount = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
    await signup(email, password, name);
    navigate('/chat');
  };

  return (
    <div className="create-account-container">
      <form className="create-account-form" onSubmit={handleSignup}>
        <h1>Create an Account</h1>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
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
        <button type="submit">SIGN UP</button>
        <button
          type="button"
          className="secondary-button"
          onClick={() => navigate('/login')}
        >
          Back to Login
        </button>
      </form>
    </div>
  );
};

export default CreateAccount;
