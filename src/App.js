import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Login from "./routes/LoginPg/Login";
import ChatRoom from "./routes/ChatPg/Chat";
import ForgotPasswordModal from "./routes/ForgotPasswordPg/ForgotPasswordModal";
import CreateAccount from "./routes/CreateAccountPg/CreateAccount";
import { ToastWrapper } from "./components/Alert";
import ProtectedRoute from "./service/ProtectedRoutes";
import HomeScreen from "./routes/HomeScreenPg/HomeScreen";
import ResetPasswordModal from "./routes/ResetPasswordPg/ResetPasswordModal";
import User from "./routes/User/User";
const App = () => {
  const isAuthenticated = !!sessionStorage.getItem("token"); 

  console.log("Is user authenticated:", isAuthenticated);
  return (
    <Router>
      <ToastWrapper />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/user-type"
          element={
            <ProtectedRoute
              element={<UserType />}
            />
          }
        />
        <Route
          path="/home"
          element={
            <ProtectedRoute
              element={<HomeScreen />}
            />
          }
        />
          <Route
          path="/search-ride"
          element={
            <ProtectedRoute
              element={<SearchRide />}
            />
          }
        />
        <Route
          path="/chat"
          element={
            <ProtectedRoute
              element={<ChatRoom />}
            />
          }
        />
        <Route
          path="/forgot-password"
          element={<ForgotPasswordModal isOpen={true} onClose={() => {}} />}
        />
        <Route
          path="/reset-password"
          element={<ResetPasswordModal isOpen={true} onClose={() => {}} />}
        />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/user-type" element={<User />} />
        <Route path="*" element={<Navigate to="/login" replace />} />

        <Route
          path="/history"
          element={
            <ProtectedRoute
              element={<RideHistory />}
            />
          }
        />
        <Route
          path="/ratings"
          element={
            <ProtectedRoute
              element={<Rating />}
            />
          }
        />
        <Route
          path="/payment"
          element={
            <ProtectedRoute
              element={<Payment />}
            />
          }
        />
        <Route
          path="/write-review/:rideId"
          element={
            <ProtectedRoute
              element={<WriteReview />}
            />
          }
        />
      </Routes>
     
    </Router>
  );
};

export default App;
