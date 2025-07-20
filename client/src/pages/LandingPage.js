import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="min-h-screen text-gray-800 flex flex-col bg-purple-100">
      {/* Hero Section */}
      <section className="bg-purple-200 text-center py-24 px-6 shadow-sm border-b">
        <h1 className="text-5xl font-extrabold mb-4 text-purple-900 drop-shadow-sm">
          Welcome to CodeQuark
        </h1>
        <p className="text-xl mb-6 text-purple-900">
          Master React, Node.js & MongoDB with interactive hands-on learning.
        </p>
        <Link
          to="/signup"
          className="bg-purple-700 text-white font-semibold px-8 py-3 rounded-full shadow hover:bg-purple-800 transition"
        >
          🚀 Get Started
        </Link>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-purple-100 text-center">
        <h2 className="text-3xl font-extrabold mb-12 text-purple-900">What You'll Learn</h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
          {[
            { title: 'React', desc: 'Build dynamic UIs with modern React hooks and components.' },
            { title: 'Node.js', desc: 'Create robust backends with Express.js and REST APIs.' },
            { title: 'MongoDB', desc: 'Store data efficiently with Mongoose and NoSQL techniques.' },
          ].map(({ title, desc }) => (
            <div
              key={title}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300 border-t-4 border-purple-600"
            >
              <h3 className="text-2xl font-bold text-purple-700 mb-2">{title}</h3>
              <p className="text-gray-700">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-purple-200 text-center">
        <h2 className="text-3xl font-extrabold mb-12 text-purple-900">Why Choose Our Platform?</h2>
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto px-6 text-left">
          {[
            ['👨‍🏫 Expert Content', 'Courses created by real-world developers and professionals.'],
            ['🛠 Hands-On Projects', 'Reinforce learning through interactive assignments and quizzes.'],
            ['📊 Progress Tracker', 'Stay motivated with streak tracking and progress bars.'],
            ['🌐 Community Support', 'Collaborate and ask questions in our peer-driven forums.'],
          ].map(([title, desc]) => (
            <div key={title} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <h4 className="text-lg font-semibold text-purple-800 mb-2">{title}</h4>
              <p className="text-gray-700">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-purple-100 text-center">
        <h2 className="text-3xl font-extrabold mb-12 text-purple-900">What Our Students Say</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          {[
            ['I built a MERN project in 3 weeks thanks to this platform!', '— Priya M.'],
            ['The quizzes and real projects made everything stick!', '— Rahul D.'],
            ['Super interactive and the progress tracker keeps me on track!', '— Sneha R.'],
          ].map(([quote, name]) => (
            <div
              key={name}
              className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition text-left"
            >
              <p className="italic text-gray-700">“{quote}”</p>
              <p className="mt-4 font-bold text-purple-700">{name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Learning Path Section */}
      <section className="py-20 bg-purple-200 text-center">
        <h2 className="text-3xl font-extrabold mb-6 text-purple-900">Your Learning Path</h2>
        <p className="max-w-2xl mx-auto mb-10 text-purple-900">
          A structured path from fundamentals to deployment, built for complete beginners to pros.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-6 px-6">
          {['Beginner', 'Intermediate', 'Advanced'].map((level) => (
            <div
              key={level}
              className="bg-white p-4 rounded-lg shadow w-full md:w-1/4 border-t-4 border-purple-600 hover:scale-105 transition"
            >
              <h4 className="text-lg font-semibold text-purple-700 mb-1">{level}</h4>
              <p className="text-sm text-gray-700">
                {level === 'Beginner' && 'HTML, CSS, JavaScript basics'}
                {level === 'Intermediate' && 'React, Node.js essentials'}
                {level === 'Advanced' && 'MongoDB, Full-stack apps, DevOps'}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Mobile Friendly Section */}
      <section className="py-20 bg-purple-100 text-center">
        <h2 className="text-3xl font-extrabold mb-6 text-purple-900">Learn Anywhere, Anytime</h2>
        <p className="max-w-xl mx-auto text-purple-900 mb-10">
          Our platform is fully responsive — take your courses with you on desktop, tablet, or mobile devices.
        </p>
        <img
          src="https://cdn-icons-png.flaticon.com/512/3659/3659895.png"
          alt="Mobile learning"
          className="mx-auto w-32 md:w-44 hover:scale-105 transition-transform"
        />
      </section>
    </div>
  );
};

export default LandingPage;
