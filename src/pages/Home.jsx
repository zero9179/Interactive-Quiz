import { Link } from "react-router-dom";
import { useRef } from "react";

function Home() {
  const topicRef = useRef();

  function onSelect() {
    console.log("Selected:", topicRef.current.value);
    localStorage.setItem("topic", topicRef.current.value);
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white px-4">
      <div className="bg-gray-800/70 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-xl w-full max-w-sm sm:max-w-md md:max-w-lg flex flex-col gap-6">
        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center tracking-wide">
          🎯 Quiz App
        </h1>
        <p className="text-gray-300 text-center text-sm sm:text-base md:text-lg">
          Select a topic and test your knowledge
        </p>

        {/* Select Box */}
        <div className="flex flex-col sm:flex-row items-center gap-2">
          <label
            htmlFor="topic"
            className="text-base sm:text-xl font-semibold text-gray-200"
          >
            Select Topic :
          </label>
          <select
            id="topic"
            ref={topicRef}
            name="topic"
            className="w-fit p-2 rounded-lg border border-gray-600 bg-gray-900 text-gray-200 shadow-sm 
                       focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 cursor-pointer 
                       hover:bg-gray-800 text-sm sm:text-base"
          >
            <option value="all">-- Choose a topic --</option>
            <option value="html">HTML Basics</option>
            <option value="react">React Basics</option>
            <option value="css">CSS Fundamentals</option>
            <option value="javascript">JavaScript</option>
          </select>
        </div>

        {/* Start Button */}
        <Link to="/quiz" className="w-full">
          <button
            onClick={onSelect}
            className="w-full py-3 text-base sm:text-lg font-bold bg-blue-500 rounded-lg shadow-md 
                       hover:bg-blue-600 hover:scale-105 active:scale-95 transition-all duration-200"
          >
            🚀 Start Quiz
          </button>
        </Link>
      </div>
    </main>
  );
}

export default Home;
