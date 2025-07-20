import React from 'react';
import { useNavigate } from 'react-router-dom';

const CourseCard = ({ course, progress }) => {
  const navigate = useNavigate();
  const completedChapters = progress.filter(ch => ch.completed).length;
  const progressPercentage = (completedChapters / 10) * 100;

  return (
    <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center w-full max-w-sm mx-auto border border-purple-100">
      <h3 className="text-lg sm:text-xl font-bold text-purple-800 mb-3 capitalize text-center tracking-tight">
        {course}
      </h3>
      <p className="text-sm sm:text-base text-gray-600 mb-4 text-center font-medium">
        Progress: {completedChapters}/10 chapters
      </p>
      <div className="w-full bg-purple-100 rounded-full h-3 mb-6">
        <div
          className="bg-purple-600 h-3 rounded-full transition-all duration-500 ease-in-out"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
      <button
        onClick={() => navigate(`/courses/${course}`)}
        className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-colors duration-200 text-sm sm:text-base font-semibold mx-auto"
      >
        Resume
      </button>
    </div>
  );
};

export default CourseCard;