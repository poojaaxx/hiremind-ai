import { useState } from "react";

export default function Generate() {

  const [role, setRole] = useState("");
  const [difficulty, setDifficulty] = useState("Easy");
  const [questions, setQuestions] = useState([]);

  const generateQuestions = () => {

    const generated = [
      `${role}: Explain a challenging project you built.`,
      `${role}: What are your strengths?`,
      `${role}: Explain a difficult bug you fixed.`,
      `${role}: Why should we hire you?`,
      `${role}: Explain your technical stack.`
    ];

    setQuestions(generated);
  };

  return (
    <div className="min-h-screen bg-black text-white p-10">

      <h1 className="text-5xl font-bold mb-10">
        AI Question Generator
      </h1>

      <div className="bg-white/10 p-8 rounded-2xl max-w-3xl">

        <input
          type="text"
          placeholder="Enter Role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full bg-black border border-white/20 p-4 rounded-xl mb-6"
        />

        <select
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
          className="w-full bg-black border border-white/20 p-4 rounded-xl mb-6"
        >
          <option>Easy</option>
          <option>Medium</option>
          <option>Hard</option>
        </select>

        <button
          onClick={generateQuestions}
          className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-xl"
        >
          Generate Questions
        </button>

        <div className="mt-10 space-y-4">
          {questions.map((q, index) => (
            <div
              key={index}
              className="bg-black border border-white/10 p-4 rounded-xl"
            >
              {q}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
