import React from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../service/AuthService';

const HomeScreen = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(navigate)
  };

  const goToChatRoom = () => {
    navigate('/chat');
  };

  return (
    <div style={styles.container}>
      <h1>Welcome to Home Screen</h1>
      <div style={styles.buttonContainer}>
        <button style={styles.button} onClick={goToChatRoom}>
          Go to Chat Room
        </button>
        <button style={styles.button} onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
  },
  buttonContainer: {
    marginTop: '20px',
  },
  button: {
    margin: '10px',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    borderRadius: '5px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
  },
};

export default HomeScreen;
