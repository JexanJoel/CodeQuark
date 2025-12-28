import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CourseCard from '../components/CourseCard';

const DashboardPage = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('https://codequark.onrender.com/api/profile', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProfile(res.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  if (loading)
    return (
      <div className="min-h-screen bg-purple-50 flex items-center justify-center text-purple-700 text-lg font-semibold">
        Loading...
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-10 px-4">
      <div className="max-w-6xl mx-auto relative">
        {/* Sidebar */}
        <div
          className={`fixed top-0 right-0 h-full w-72 bg-white shadow-xl border-l border-purple-100 transform transition-transform duration-300 ease-in-out ${
            isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
          } z-40`}
        >
          <div className="p-6">
            <div className="flex justify-between items-center mb-6 border-b border-purple-200 pb-3">
              <h3 className="text-2xl font-bold text-purple-700">👤 Profile</h3>
              <button
                onClick={toggleSidebar}
                className="text-gray-600 hover:text-purple-700 focus:outline-none"
                aria-label="Close sidebar"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            {profile && (
              <div className="space-y-6 text-gray-800">
                <div className="bg-purple-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                  <p className="text-sm font-bold text-purple-700 uppercase tracking-wide">Name</p>
                  <p className="text-lg font-medium mt-2">{profile.name}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                  <p className="text-sm font-bold text-purple-700 uppercase tracking-wide">Email</p>
                  <p className="text-lg font-medium mt-2">{profile.email}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                  <p className="text-sm font-bold text-purple-700 uppercase tracking-wide">Mobile</p>
                  <p className="text-lg font-medium mt-2">{profile.mobile}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                  <p className="text-sm font-bold text-purple-700 uppercase tracking-wide">Coding Streak</p>
                  <p className="text-lg font-medium mt-2">
                    🔥 {profile.streak} day{profile.streak !== 1 ? 's' : ''}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Overlay for Sidebar */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-30 z-30"
            onClick={toggleSidebar}
            aria-hidden="true"
          ></div>
        )}

        {/* Main Content */}
        <div>
          {/* Welcome Message with Profile Icon */}
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-purple-800 text-center flex-1">
              👋 Welcome Back, {profile?.name || 'Learner'}!
            </h2>
            <button
              onClick={toggleSidebar}
              className="p-2 rounded-full bg-purple-600 text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition ml-4"
              aria-label="View profile"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </button>
          </div>

          {/* Courses Section */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-purple-800 mb-6 text-center">
              📚 Your Courses
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <CourseCard course="react" progress={profile?.progress.react || 0} />
              <CourseCard course="nodejs" progress={profile?.progress.nodejs || 0} />
              <CourseCard course="mongodb" progress={profile?.progress.mongodb || 0} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
