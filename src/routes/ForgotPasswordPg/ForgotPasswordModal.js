import React, { useState } from 'react';
import './ForgotPasswordModal.css';

const ForgotPasswordModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');

  const handleForgotPassword = (e) => {
    e.preventDefault();
    console.log('Forgot Password Email:', email);
    // Simulate password reset logic
    alert("Password reset link sent to your email!");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <h2>Forgot Password</h2>
        <form onSubmit={handleForgotPassword}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Submit</button>
          <button type="button" onClick={onClose}>
            Back to Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordModal;
