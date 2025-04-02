import React from "react";
import { useDispatch } from "react-redux";
// import { login } from "";
import { useNavigate } from "react-router-dom";

const WelcomeScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    // dispatch(login());
    navigate("/home"); // Redirect to Home screen after login
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-purple-500 to-blue-500 text-white">
      <h1 className="text-4xl font-bold mb-6">Welcome to Beatify </h1>
      <p className="text-lg mb-4">Your favorite music, anytime, anywhere.</p>
      <button
        onClick={handleLogin}
        className="bg-white text-blue-500 px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition"
      >
        Get Started
      </button>
    </div>
  );
};

export default WelcomeScreen;
