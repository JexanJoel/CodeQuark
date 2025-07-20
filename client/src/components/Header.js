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
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-purple-600">CodeQuark</h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 font-medium">
          <Link to="/" className="text-purple-600 hover:text-purple-700">Home</Link>
          {isAuthenticated ? (
            <>
              <Link to="/dashboard" className="text-purple-600 hover:text-purple-700">Dashboard</Link>
              <button
                onClick={handleLogout}
                className="text-purple-600 hover:text-purple-700"
              >
                Quit
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-purple-600 hover:text-purple-700">Login</Link>
              <Link to="/signup" className="text-purple-600 hover:text-purple-700">Register</Link>
            </>
          )}
        </nav>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-purple-600"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t px-6 py-4 text-center space-y-4">
          <Link
            to="/"
            className="block text-purple-600 font-medium hover:text-purple-700 transition"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          {isAuthenticated ? (
            <>
              <Link
                to="/dashboard"
                className="block text-purple-600 font-medium hover:text-purple-700 transition"
                onClick={() => setMenuOpen(false)}
              >
                Dashboard
              </Link>
              <button
                onClick={handleLogout}
                className="block w-full text-purple-600 font-medium hover:text-purple-700 transition text-center"
              >
                Quit
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="block text-purple-600 font-medium hover:text-purple-700 transition"
                onClick={() => setMenuOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="block text-purple-600 font-medium hover:text-purple-700 transition"
                onClick={() => setMenuOpen(false)}
              >
                Register
              </Link>
            </>
          )}
        </div>
      )}
    </header>
  );
}

export default Header;
