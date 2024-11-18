import React, { useState } from 'react';
import './CreateAccount.css';
import { signup } from '../../service/AuthService';
import { useNavigate } from 'react-router-dom';
import { Alert } from '../../components/Alert';

const CreateAccount = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await signup(email, password, name);
      Alert.success("Signup successful!")
      navigate('/home');
    } catch (error) {
      Alert.error(error.message);
    }
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
