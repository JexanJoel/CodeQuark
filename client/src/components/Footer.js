import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Facebook, Twitter, MessageCircle } from 'lucide-react';

function Footer() {
  const isAuthenticated = !!localStorage.getItem('token');

  return (
    <footer className="bg-white text-center py-8 border-t">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://www.linkedin.com/in/jexanjoel" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700">
            <Linkedin size={24} />
          </a>
          <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700">
            <MessageCircle size={24} />
          </a>
          <a href="https://www.facebook.com/codedevs" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700">
            <Facebook size={24} />
          </a>
          <a href="https://twitter.com/codedevs" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700">
            <Twitter size={24} />
          </a>
        </div>
        <p className="text-sm text-gray-600">
          Made with <span className="text-red-500">❤️</span> by
          <a href="https://www.linkedin.com/in/jexan-joel-139993293?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline ml-1">
            Jexan Joel
          </a> &
          <a href="https://www.linkedin.com/in/lakshmi-sree-880204210?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline ml-1">
            Lakshmi Sree
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
