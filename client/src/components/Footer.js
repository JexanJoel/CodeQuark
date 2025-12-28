import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Facebook, Twitter, MessageCircle } from 'lucide-react';

function Footer() {
  const isAuthenticated = !!localStorage.getItem('token');

  return (
    <footer className="bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 text-center py-10 border-t border-purple-400">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center space-x-6 mb-5">
          <a
            href="https://www.linkedin.com/in/jexanjoel"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-purple-100 transition"
          >
            <Linkedin size={26} />
          </a>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-purple-100 transition"
          >
            <MessageCircle size={26} />
          </a>
          <a
            href="https://www.facebook.com/codedevs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-purple-100 transition"
          >
            <Facebook size={26} />
          </a>
          <a
            href="https://twitter.com/codedevs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-purple-100 transition"
          >
            <Twitter size={26} />
          </a>
        </div>

        <p className="text-sm text-purple-100">
          Made with <span className="text-red-300">❤️</span> by
          <a
            href="https://www.linkedin.com/in/jexan-joel-139993293?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:underline font-semibold ml-1"
          >
            Jexan Joel
          </a>{' '}
          &
          <a
            href="https://www.linkedin.com/in/lakshmi-sree-880204210?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:underline font-semibold ml-1"
          >
            Lakshmi Sree
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
