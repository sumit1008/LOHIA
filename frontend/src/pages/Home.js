import React from "react";
import { useNavigate } from "react-router-dom"; // React Router hook for navigation

const Home = () => {
    const navigate = useNavigate(); // Hook to programmatically navigate to other routes

    // Function to handle button click
    const handleSignInClick = () => {
        navigate("/login"); // Redirect to the login page
    };
    const handleSignInClick1 = () => {
        navigate("/Signup"); // Redirect to the login page
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-blue-500 mb-4">Welcome to Logia</h1>
                <p className="text-lg mb-6">Your path to amazing things starts here!</p>
                <button
                    onClick={handleSignInClick}
                    className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
                >
                    Sign In
                </button>
                <button
                    onClick={handleSignInClick1}
                    className="bg-blue-500 text-white py-2 px-4 mt-4 ml-4 rounded-lg hover:bg-blue-600 transition duration-200"
                >
                    Sign Up
                </button>
            </div>
        </div>
    );
};

export default Home;
