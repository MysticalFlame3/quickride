import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/login");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      {/* Card Container */}
      <div className="relative bg-white shadow-lg rounded-2xl overflow-hidden w-80 sm:w-96">
        {/* Image Section */}
        <div className="relative h-64">
          <img
            src="https://th.bing.com/th/id/OIP.dow-H8TM5j6YodY2Kd1HOQHaE8?w=246&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" // Replace with your actual image path
            alt="Traffic Light"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Text and Button Section */}
        <div className="flex flex-col items-center p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            Get Started with Uber
          </h1>
          <button
            onClick={handleContinue}
            className="w-full bg-black text-white py-3 rounded-xl text-lg font-medium hover:bg-gray-800 transition-colors"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
