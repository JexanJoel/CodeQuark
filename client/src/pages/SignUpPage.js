import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import Footer from '../components/Footer'; // optional: if you want footer

const SignUpPage = ({ setUser }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '', mobile: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://codequark.onrender.com/', formData);
      navigate('/login');
    } catch (err) {
      setError(err.response?.data?.error || 'Registration failed');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-purple-100">
      {/* Main content wrapper */}
      <div className="flex-grow flex items-center justify-center px-4 py-8">
        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg w-full max-w-md">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-purple-700">
            Create Account
          </h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full p-3 mb-4 border border-purple-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full p-3 mb-4 border border-purple-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Mobile Number"
              className="w-full p-3 mb-4 border border-purple-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full p-3 mb-2 border border-purple-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
            {error && (
              <p className="text-center text-red-600 text-base font-semibold mb-4">
                {error}
              </p>
            )}
            <button
              type="submit"
              className="w-full bg-purple-600 text-white p-3 rounded-lg font-semibold hover:bg-purple-700 transition duration-300 text-base"
            >
              Sign Up
            </button>
          </form>
          <p className="mt-6 text-center text-sm sm:text-base text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="text-purple-600 font-medium hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </div>

      {/* Optional: Footer at bottom */}
      {/* <Footer /> */}
    </div>
  );
};

export default SignUpPage;
