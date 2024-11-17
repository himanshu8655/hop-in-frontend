import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Login from './routes/LoginPg/Login';
import ChatRoom from './routes/ChatPg/Chat';
import ForgotPasswordModal from './routes/ForgotPasswordPg/ForgotPasswordModal';
import CreateAccount from './routes/CreateAccountPg/CreateAccount';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/chat" element={<ChatRoom />} />
        <Route path="/forgot-password" element={<ForgotPasswordModal isOpen={true} onClose={() => {}} />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
