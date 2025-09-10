import React, { useState, useEffect } from "react";
import { questionData } from "../data/questionData";
import Countdown from "../componentes/Countdown";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { Link } from "react-router-dom";

function QuizPage() {
  let topic = localStorage.getItem("topic");
  console.log("asd", topic);
  const [score, setScore] = useState(0);
  const [activePage, setActivePage] = useState(0);
  const [testEnd, setTestEnd] = useState(false);
  const [answers, setAnswers] = useState({});

  let filterData = null;

  // 🔹 Shuffle helper
  function shuffleArray(array) {
    return array
      .map((item) => ({ ...item, sortKey: Math.random() }))
      .sort((a, b) => a.sortKey - b.sortKey)
      .map(({ sortKey, ...item }) => item);
  }

  // 🔹 Get random mixed questions
  function getMixedQuestions(count = 10) {
    const shuffled = shuffleArray(questionData);
    return shuffled.slice(0, count);
  }

  if (topic === "all") {
    filterData = getMixedQuestions(10); // ✅ now picks 10 random unique questions
  } else {
    filterData = questionData.filter((item) => item.topic === topic);
  }

  const Data = filterData;
  const testTime = 5;

  const selectQuestion = Data[activePage];

  useEffect(() => {
    let newScore = Object.entries(answers).reduce((acc, [qIdx, ans]) => {
      return Data[qIdx].answer === ans ? acc + 1 : acc;
    }, 0);
    setScore(newScore);
  }, [answers, Data]);

  const checkAnswer = (e) => {
    const chosen = e.target.value;
    setAnswers((prev) => ({
      ...prev,
      [activePage]: chosen,
    }));
  };

  const handleChangeBtn = (btnType) => {
    if (btnType === "prev") {
      setActivePage((a) => (a > 0 ? a - 1 : Data.length - 1));
    } else {
      setActivePage((a) => (a < Data.length - 1 ? a + 1 : 0));
    }
    console.log("answer", answers);
  };

  const handleTimerEnd = (time) => {
    if (time?.startsWith("00:00")) {
      setTestEnd(true);
    }
  };

  const handleSubmit = () => {
    setTestEnd(true);
  };

  return (
    <div className="relative w-full min-h-screen pt-20 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 px-3 sm:px-5 text-white">
      {/* ================= Result Screen ================= */}
      {testEnd ? (
        <div className="absolute bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 top-0 left-0 w-full min-h-screen z-50 flex flex-col items-center p-4 sm:p-6 overflow-y-auto backdrop-blur-xl">
          <h1 className="text-3xl sm:text-5xl font-extrabold mb-4 text-yellow-400 drop-shadow-lg">
            Quiz Finished 🎉
          </h1>
          <p className="text-xl sm:text-2xl mb-4">
            Your Score:{" "}
            <span className="text-green-400 font-bold">{score}</span> /{" "}
            {Data.length}
          </p>
          <Link to="/">
            <button className="mb-8 font-bold bg-blue-500 rounded px-4 py-2 hover:bg-blue-600 transition">
              New Quiz
            </button>
          </Link>

          <div className="w-full max-w-3xl space-y-6 px-2 sm:px-6">
            {Data.map((q, idx) => {
              const userAns = answers[idx];
              return (
                <div
                  key={idx}
                  className="bg-zinc-800 p-3 sm:p-4 rounded-xl shadow-lg border border-zinc-700"
                >
                  <h2 className="font-semibold text-base sm:text-lg mb-3">
                    Q{idx + 1}. {q.question}
                  </h2>
                  <ul className="space-y-2">
                    {q.options.map((opt, oIdx) => {
                      let style =
                        "px-3 py-2 rounded-lg transition duration-300 text-sm sm:text-base";
                      if (opt === q.answer) {
                        style += " bg-green-600 text-white shadow-md";
                      } else if (opt === userAns && opt !== q.answer) {
                        style += " bg-red-600 text-white shadow-md";
                      } else {
                        style += " bg-zinc-600 text-zinc-200 hover:bg-zinc-500";
                      }
                      return (
                        <li key={oIdx} className={style}>
                          {opt}
                          {opt === userAns && "  ← Your Answer"}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <>
          {/* ================= Top Bar ================= */}
          <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-4">
            {/* Pagination */}
            <div className="bg-zinc-700 w-full sm:w-fit p-2 flex flex-wrap gap-2 rounded-lg shadow-md">
              {Data.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => setActivePage(idx)}
                  className={`w-8 h-8 sm:w-9 sm:h-9 flex justify-center items-center rounded-lg transition duration-300 text-sm sm:text-base cursor-pointer ${
                    activePage === idx
                      ? "bg-green-500 text-white font-bold shadow-lg"
                      : answers[idx]
                      ? "bg-blue-500 text-white"
                      : "bg-zinc-200 text-black hover:bg-zinc-300"
                  }`}
                >
                  {idx + 1}
                </div>
              ))}
            </div>

            {/* Timer */}
            <div className="bg-zinc-700 w-fit px-3 sm:px-4 py-2 font-bold rounded-lg shadow-md text-yellow-300">
              <Countdown minutes={testTime} setTestEnd={handleTimerEnd} />
            </div>
          </div>

          {/* ================= Question Screen ================= */}
          <section className="relative bg-zinc-800 w-full min-h-[20rem] p-4 sm:p-6 rounded-xl mt-5 shadow-xl border border-zinc-700">
            <h1 className="font-bold text-lg sm:text-xl mb-3 text-cyan-300">
              Q.{activePage + 1} {selectQuestion?.question}
            </h1>

            {/* Options */}
            <ol className="mt-6 space-y-3 sm:space-y-4">
              {selectQuestion?.options?.map((opt, idx) => (
                <li
                  key={idx}
                  className={`px-3 sm:px-4 py-2 w-full sm:w-[90%] md:w-[28rem] rounded-lg border-2 transition duration-300 mx-auto md:ml-3 ${
                    answers[activePage] === opt
                      ? "bg-cyan-600 border-cyan-400 text-white shadow-md scale-100"
                      : "bg-zinc-600 border-zinc-700 hover:bg-zinc-500 hover:border-cyan-400 hover:scale-105"
                  }`}
                >
                  <label className="flex items-center gap-2 cursor-pointer text-sm sm:text-base">
                    <input
                      type="radio"
                      name={`q-${activePage}`}
                      value={opt}
                      checked={answers[activePage] === opt}
                      onChange={checkAnswer}
                      className="accent-cyan-400"
                    />
                    {opt}
                  </label>
                </li>
              ))}
            </ol>

            {/* Navigation + Submit */}
            <div className="mt-3 w-full p-3 sm:p-4 bg-zinc-700 flex flex-wrap justify-center items-center gap-6 rounded-b-xl">
              <div
                onClick={() => handleChangeBtn("prev")}
                className="text-xl sm:text-2xl px-3 sm:px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white shadow-md cursor-pointer transition active:scale-95"
              >
                <GrLinkPrevious />
              </div>
              <div
                onClick={() => handleChangeBtn("next")}
                className="text-xl sm:text-2xl px-3 sm:px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white shadow-md cursor-pointer transition active:scale-95"
              >
                <GrLinkNext />
              </div>
              <button
                onClick={handleSubmit}
                className="ml-auto sm:ml-0 px-5 sm:px-6 py-2 rounded-xl bg-gradient-to-r from-green-600 to-emerald-500 text-white font-bold shadow-md hover:from-green-500 hover:to-emerald-400 transition active:scale-95 text-sm sm:text-base"
              >
                Submit
              </button>
            </div>
          </section>
        </>
      )}
    </div>
  );
}

export default QuizPage;
