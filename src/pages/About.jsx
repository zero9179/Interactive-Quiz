import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white px-6 py-12">
      <div className="bg-gray-800/70 backdrop-blur-md p-6 sm:p-10 rounded-2xl shadow-xl w-full max-w-3xl flex flex-col gap-6">
        
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-blue-400">
          📖 About Quiz App
        </h1>
        
        {/* Description */}
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed text-center">
          Welcome to <span className="text-yellow-400 font-semibold">Interactive Quiz</span>! 
          This app is designed to help you practice and test your knowledge of 
          <span className="text-green-400"> HTML</span>, 
          <span className="text-cyan-400"> CSS</span>, 
          <span className="text-indigo-400"> JavaScript</span>, 
          and <span className="text-pink-400"> React</span>.
        </p>

        <p className="text-gray-300 text-sm sm:text-base leading-relaxed text-center">
          Simply select a topic on the home page, start the quiz, and challenge yourself. 
          At the end, you’ll see your score with a detailed review of your answers. 
          The app is fully responsive and works seamlessly on mobile, tablet, and desktop.
        </p>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <div className="bg-gray-700/60 p-4 rounded-lg shadow-md hover:shadow-lg transition">
            <h2 className="font-bold text-lg text-blue-400 mb-2">⚡ Randomized Questions</h2>
            <p className="text-gray-300 text-sm">
              Each quiz session provides a fresh set of questions for better practice.
            </p>
          </div>

          <div className="bg-gray-700/60 p-4 rounded-lg shadow-md hover:shadow-lg transition">
            <h2 className="font-bold text-lg text-green-400 mb-2">📊 Score & Review</h2>
            <p className="text-gray-300 text-sm">
              Instantly check your score and review correct and incorrect answers.
            </p>
          </div>

          <div className="bg-gray-700/60 p-4 rounded-lg shadow-md hover:shadow-lg transition">
            <h2 className="font-bold text-lg text-yellow-400 mb-2">⏱️ Countdown Timer</h2>
            <p className="text-gray-300 text-sm">
              Stay sharp with a timer that keeps every quiz challenging and exciting.
            </p>
          </div>

          <div className="bg-gray-700/60 p-4 rounded-lg shadow-md hover:shadow-lg transition">
            <h2 className="font-bold text-lg text-pink-400 mb-2">📱 Fully Responsive</h2>
            <p className="text-gray-300 text-sm">
              Optimized for mobile, tablet, and desktop devices for smooth experience.
            </p>
          </div>
        </div>

        {/* Back to Home */}
        <div className="flex justify-center mt-6">
          <Link to="/">
            <button className="px-6 py-2 rounded-lg font-bold bg-blue-500 hover:bg-blue-600 transition active:scale-95">
              ⬅ Back to Home
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default About;
