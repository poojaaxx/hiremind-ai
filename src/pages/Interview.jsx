import { useState, useEffect } from "react";

const questionBank = {
  frontend: [
    "Explain React hooks.",
    "What is Virtual DOM?",
    "Difference between state and props?",
    "Explain useEffect.",
    "What is Tailwind CSS?",
    "Difference between let, var and const?",
  ],

  backend: [
    "What is REST API?",
    "Explain JWT authentication.",
    "Difference between SQL and NoSQL?",
    "What is middleware?",
    "Explain CRUD operations.",
    "What is Express.js?",
  ],

  hr: [
    "Tell me about yourself.",
    "Why should we hire you?",
    "What are your strengths?",
    "Describe a challenge you faced.",
    "Where do you see yourself in 5 years?",
    "How do you handle pressure?",
  ],
};

function getRandomQuestions() {
  const allQuestions = [
    ...questionBank.frontend,
    ...questionBank.backend,
    ...questionBank.hr,
  ];

  return allQuestions
    .sort(() => 0.5 - Math.random())
    .slice(0, 5);
}

export default function Interview() {

  const [questions, setQuestions] = useState([]);

  const [started, setStarted] = useState(false);

  const [currentQuestion, setCurrentQuestion] =
    useState(0);

  const [answer, setAnswer] = useState("");

  const [score, setScore] = useState(0);

  const [finished, setFinished] = useState(false);

  const [timeLeft, setTimeLeft] = useState(60);

  useEffect(() => {
    setQuestions(getRandomQuestions());
  }, []);

  useEffect(() => {

    if (!started || finished) return;

    if (timeLeft === 0) {
      nextQuestion();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);

  }, [timeLeft, started, finished]);

  const startInterview = () => {
    setStarted(true);
  };

  const nextQuestion = () => {

    let updatedScore = score;

    // BASIC ANSWER ANALYSIS
    if (answer.length > 30) {
      updatedScore += 20;
    } else if (answer.length > 15) {
      updatedScore += 10;
    } else {
      updatedScore += 5;
    }

    setScore(updatedScore);

    setAnswer("");

    setTimeLeft(60);

    if (currentQuestion < questions.length - 1) {

      setCurrentQuestion((prev) => prev + 1);

    } else {

      setFinished(true);

      const previousScores =
        JSON.parse(
          localStorage.getItem("scores")
        ) || [];

      previousScores.push({
        score: updatedScore,
        date: new Date().toLocaleDateString(),
      });

      localStorage.setItem(
        "scores",
        JSON.stringify(previousScores)
      );
    }
  };

  return (
    <div className="min-h-screen bg-[#050816] text-white p-6 md:p-10">

      <h1 className="text-5xl font-black mb-3">
        AI Mock Interview
      </h1>

      <p className="text-white/40 mb-10 text-lg">
        Practice technical and HR interviews with
        dynamic AI-inspired questions.
      </p>

      {!started ? (

        <div className="bg-white/5 border border-white/10 rounded-3xl p-10 max-w-3xl">

          <div className="grid md:grid-cols-3 gap-5 mb-10">

            <div className="bg-black/30 rounded-2xl p-5">
              <p className="text-white/40 text-sm mb-2">
                Questions
              </p>

              <h2 className="text-4xl font-black text-violet-400">
                5
              </h2>
            </div>

            <div className="bg-black/30 rounded-2xl p-5">
              <p className="text-white/40 text-sm mb-2">
                Time Per Question
              </p>

              <h2 className="text-4xl font-black text-cyan-400">
                60s
              </h2>
            </div>

            <div className="bg-black/30 rounded-2xl p-5">
              <p className="text-white/40 text-sm mb-2">
                Difficulty
              </p>

              <h2 className="text-4xl font-black text-emerald-400">
                Mixed
              </h2>
            </div>

          </div>

          <button
            onClick={startInterview}
            className="bg-violet-600 hover:bg-violet-700 px-8 py-4 rounded-2xl text-xl font-bold transition-all"
          >
            Start Interview
          </button>

        </div>

      ) : finished ? (

        <div className="bg-white/5 border border-white/10 rounded-3xl p-10 max-w-3xl">

          <h2 className="text-4xl font-black mb-5">
            Interview Completed 🎉
          </h2>

          <p className="text-white/40 mb-8">
            Your AI interview session has ended.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-10">

            <div className="bg-black/30 rounded-2xl p-6">
              <p className="text-white/40 mb-2">
                Final Score
              </p>

              <h2 className="text-5xl font-black text-violet-400">
                {score}%
              </h2>
            </div>

            <div className="bg-black/30 rounded-2xl p-6">
              <p className="text-white/40 mb-2">
                Performance
              </p>

              <h2 className="text-5xl font-black text-emerald-400">
                Strong
              </h2>
            </div>

          </div>

          <button
            onClick={() => window.location.reload()}
            className="bg-cyan-600 hover:bg-cyan-700 px-8 py-4 rounded-2xl font-bold transition-all"
          >
            Restart Interview
          </button>

        </div>

      ) : (

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 max-w-4xl">

          {/* TOP BAR */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 mb-8">

            <div>
              <p className="text-white/40 mb-2">
                Question Progress
              </p>

              <h2 className="text-3xl font-black">
                Question {currentQuestion + 1} / {questions.length}
              </h2>
            </div>

            <div className="bg-red-500/20 border border-red-500/30 px-6 py-3 rounded-2xl text-red-400 font-bold text-2xl">
              {timeLeft}s
            </div>

          </div>

          {/* PROGRESS BAR */}
          <div className="w-full h-3 bg-white/10 rounded-full mb-10 overflow-hidden">

            <div
              className="h-full bg-violet-500 rounded-full transition-all duration-500"
              style={{
                width: `${((currentQuestion + 1) / questions.length) * 100}%`,
              }}
            />

          </div>

          {/* QUESTION CARD */}
          <div className="bg-black/30 rounded-3xl p-8 mb-8">

            <p className="text-white/40 mb-3 text-sm uppercase tracking-widest">
              AI Generated Question
            </p>

            <h3 className="text-3xl font-bold leading-relaxed">
              {questions[currentQuestion]}
            </h3>

          </div>

          {/* ANSWER BOX */}
          <textarea
            value={answer}
            onChange={(e) =>
              setAnswer(e.target.value)
            }
            placeholder="Type your answer here..."
            className="w-full h-52 bg-black/40 border border-white/10 rounded-3xl p-6 outline-none resize-none text-lg"
          />

          {/* BOTTOM ACTIONS */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 mt-8">

            <div className="text-white/40">
              AI Confidence Analysis Active
            </div>

            <button
              onClick={nextQuestion}
              className="bg-violet-600 hover:bg-violet-700 px-8 py-4 rounded-2xl font-bold text-lg transition-all"
            >
              Next Question
            </button>

          </div>

        </div>
      )}
    </div>
  );
}