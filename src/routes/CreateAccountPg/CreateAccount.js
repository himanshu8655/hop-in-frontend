import React, { useState } from 'react';
import './CreateAccount.css';
import { signup } from '../../service/AuthService';
import { useNavigate } from 'react-router-dom';
import { Alert } from '../../components/Alert';

const CreateAccount = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [image, setImage] = useState(null); // State to hold image
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      // Handle signup with image (you can use FormData if you're uploading the image to the server)
      await signup(firstName, lastName, email, password, image);
      Alert.success("Signup successful!");
      navigate('/home');
    } catch (error) {
      Alert.error(error.message);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file)); // Create image preview
    }
  };

  return (
    <div className="create-account-container">
      <form className="create-account-form" onSubmit={handleSignup}>
        <h1>Create an Account</h1>
        
        {/* First Name and Last Name Inputs */}
        <div className="name-inputs">
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>

        {/* Email Input */}
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        
        {/* Password Input */}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {/* Image Upload Input */}
        <div className="image-upload">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
          {image && <img src={image} alt="Preview" className="image-preview" />}
        </div>

        {/* Submit Button */}
        <button type="submit">Sign Up</button>

        {/* Back to Login Button */}
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
