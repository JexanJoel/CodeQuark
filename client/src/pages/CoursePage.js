import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CoursePage = () => {
  const { course } = useParams();
  const [chapters, setChapters] = useState([]);
  const [progress, setProgress] = useState([]);
  const [currentChapter, setCurrentChapter] = useState(1);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizResult, setQuizResult] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const token = localStorage.getItem('token');
        const [courseRes, profileRes] = await Promise.all([
          axios.get(`https://codequark.onrender.com//${course}`),
          axios.get('https://codequark.onrender.com/profile', {
            headers: { Authorization: `Bearer ${token}` },
          }),
        ]);
        setChapters(courseRes.data);
        const defaultProgress = Array(10)
          .fill()
          .map((_, i) => ({ chapter: i + 1, completed: false, quizScore: 0 }));
        setProgress(profileRes.data.progress[course] || defaultProgress);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setProgress(
          Array(10)
            .fill()
            .map((_, i) => ({ chapter: i + 1, completed: false, quizScore: 0 }))
        );
        setLoading(false);
      }
    };
    fetchCourse();
  }, [course]);

  const handleQuizSubmit = async (chapterIndex) => {
    const chapter = chapters[chapterIndex];
    const score = chapter.quiz.reduce(
      (acc, q, i) => acc + (quizAnswers[i] === q.answer ? 1 : 0),
      0
    );
    try {
      const token = localStorage.getItem('token');
      await axios.post(
        'http://localhost:5000/api/progress',
        {
          course,
          chapter: chapterIndex + 1,
          quizScore: score,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setQuizResult(`✅ You scored ${score}/${chapter.quiz.length}`);
      setProgress((prev) => {
        const newProgress = [...prev];
        newProgress[chapterIndex] = {
          ...newProgress[chapterIndex],
          completed: true,
          quizScore: score,
        };
        return newProgress;
      });
    } catch (err) {
      setQuizResult('❌ Failed to save progress');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-100 to-white flex items-center justify-center text-purple-700 text-base sm:text-lg font-semibold">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-center text-2xl sm:text-3xl font-extrabold text-purple-800 mb-8 sm:mb-10 tracking-tight">
          📘 {course.toUpperCase()} Course
        </h2>

        <div className="space-y-6">
          {chapters.map((chapter, index) => (
            <div
              key={chapter.chapter}
              className="bg-white border border-purple-100 rounded-lg shadow-md p-3 sm:p-6 transition-all duration-200 hover:shadow-lg"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-purple-700 mb-3 sm:mb-4 tracking-tight text-center">
                Chapter {chapter.chapter}: {chapter.title}
              </h3>

              {currentChapter === chapter.chapter ? (
                <>
                  <p className="text-gray-700 mb-5 text-sm sm:text-base leading-relaxed">
                    {chapter.content}
                  </p>

                  {/* 📌 Enhanced Quiz Section */}
                  <div className="mb-5 bg-purple-50 border border-purple-100 rounded-lg p-3 sm:p-5 shadow-sm">
                    <h4 className="text-base sm:text-lg font-semibold text-purple-700 mb-3 border-b border-purple-200 pb-2">
                      📝 Quiz
                    </h4>
                    {chapter.quiz.map((q, i) => (
                      <div key={i} className="mb-4 sm:mb-5">
                        <p className="font-medium text-gray-900 mb-2 text-sm sm:text-base">
                          {i + 1}. {q.question}
                        </p>
                        <div className="grid gap-2">
                          {q.options.map((option, j) => {
                            const isSelected = quizAnswers[i] === j;
                            return (
                              <label
                                key={j}
                                className={`flex items-center gap-2 p-2 sm:p-3 rounded-md border transition-all duration-200 cursor-pointer text-sm sm:text-base ${
                                  isSelected
                                    ? 'bg-purple-100 border-purple-400 shadow-sm'
                                    : 'bg-white border-gray-200 hover:bg-purple-50 hover:border-purple-300'
                                }`}
                              >
                                <input
                                  type="radio"
                                  name={`quiz-${i}`}
                                  value={j}
                                  checked={isSelected}
                                  onChange={() =>
                                    setQuizAnswers({ ...quizAnswers, [i]: j })
                                  }
                                  disabled={progress[index]?.completed || false}
                                  className="accent-purple-600 h-4 w-4"
                                />
                                <span className="text-gray-800">{option}</span>
                              </label>
                            );
                          })}
                        </div>
                      </div>
                    ))}

                    {!progress[index]?.completed && (
                      <button
                        onClick={() => handleQuizSubmit(index)}
                        className="mt-3 bg-purple-600 hover:bg-purple-700 text-white font-medium px-4 py-1.5 sm:px-5 sm:py-2 rounded-md transition-all duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-1 w-full sm:w-auto"
                      >
                        Submit Quiz
                      </button>
                    )}

                    {quizResult && (
                      <p
                        className={`mt-3 text-sm sm:text-base font-medium ${
                          quizResult.startsWith('✅')
                            ? 'text-green-600'
                            : 'text-red-500'
                        }`}
                      >
                        {quizResult}
                      </p>
                    )}
                  </div>

                  {/* 💻 Practice Section */}
                  <div className="mt-5">
                    <h4 className="text-base sm:text-lg font-semibold text-purple-700 mb-2 sm:mb-3">
                      💻 Practice
                    </h4>
                    <p className="text-gray-800 mb-2 text-sm sm:text-base">
                      {chapter.practice.question}
                    </p>
                    <pre className="bg-purple-50 border border-purple-100 text-sm p-3 sm:p-4 rounded-md overflow-x-auto text-gray-800 whitespace-pre-wrap">
                      {chapter.practice.solution}
                    </pre>
                  </div>
                </>
              ) : (
                <div className="mt-3 sm:mt-4 flex justify-center">
                  <button
                    onClick={() =>
                      progress[index - 1]?.completed || index === 0
                        ? setCurrentChapter(chapter.chapter)
                        : alert('⚠️ Complete the previous chapter first!')
                    }
                    className={`max-w-[150px] px-3 py-1 sm:max-w-none sm:px-5 sm:py-2 font-medium rounded-md transition-all duration-200 text-sm sm:text-base ${
                      progress[index - 1]?.completed || index === 0
                        ? 'bg-purple-600 hover:bg-purple-700 text-white shadow-sm focus:ring-2 focus:ring-purple-500 focus:ring-offset-1'
                        : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    {progress[index]?.completed ? '✅ Review' : '🚀 Start Chapter'}
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
