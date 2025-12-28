import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const isAuthenticated = !!localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    setMenuOpen(false);
    navigate('/login');
  };

  return (
    <header className="bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-wide">
          CodeQuark
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 font-semibold">
          <Link to="/" className="text-white hover:text-purple-100 transition">
            🏠 Home
          </Link>
          {isAuthenticated ? (
            <>
              <Link
                to="/dashboard"
                className="text-white hover:text-purple-100 transition"
              >
                📚 Courses
              </Link>
              <button
                onClick={handleLogout}
                className="text-white hover:text-red-300 transition"
              >
                🔓 Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="text-white hover:text-purple-100 transition"
              >
                🔑 Login
              </Link>
              <Link
                to="/signup"
                className="text-white hover:text-purple-100 transition"
              >
                📝 Register
              </Link>
            </>
          )}
        </nav>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <div className="md:hidden bg-purple-700 border-t border-purple-500 px-6 py-6 space-y-4 text-left">
          <Link
            to="/"
            className="block text-white font-semibold hover:text-purple-100 transition"
            onClick={() => setMenuOpen(false)}
          >
            🏠 Home
          </Link>
          {isAuthenticated ? (
            <>
              <Link
                to="/dashboard"
                className="block text-white font-semibold hover:text-purple-100 transition"
                onClick={() => setMenuOpen(false)}
              >
                📚 Courses
              </Link>
              <button
                onClick={handleLogout}
                className="block w-full text-left text-white font-semibold hover:text-red-300 transition"
              >
                🔓 Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="block text-white font-semibold hover:text-purple-100 transition"
                onClick={() => setMenuOpen(false)}
              >
                🔑 Login
              </Link>
              <Link
                to="/signup"
                className="block text-white font-semibold hover:text-purple-100 transition"
                onClick={() => setMenuOpen(false)}
              >
                📝 Register
              </Link>
            </>
          )}
        </div>
      )}
    </header>
  );
}

export default Header;
