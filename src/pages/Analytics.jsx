import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    skill: "React",
    score: 90,
  },
  {
    skill: "JavaScript",
    score: 82,
  },
  {
    skill: "Communication",
    score: 76,
  },
  {
    skill: "DSA",
    score: 65,
  },
  {
    skill: "Problem Solving",
    score: 88,
  },
];

export default function Analytics() {
  return (
    <div className="min-h-screen bg-[#050816] text-white p-10">

      <h1 className="text-5xl font-bold mb-10">
        AI Performance Analytics
      </h1>

      {/* TOP STATS */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">

        <div className="bg-white/10 border border-white/10 rounded-3xl p-8">
          <p className="text-white/50 mb-2">
            Overall Score
          </p>

          <h2 className="text-5xl font-black text-violet-400">
            87%
          </h2>
        </div>

        <div className="bg-white/10 border border-white/10 rounded-3xl p-8">
          <p className="text-white/50 mb-2">
            Interviews Completed
          </p>

          <h2 className="text-5xl font-black text-cyan-400">
            12
          </h2>
        </div>

        <div className="bg-white/10 border border-white/10 rounded-3xl p-8">
          <p className="text-white/50 mb-2">
            Global Rank
          </p>

          <h2 className="text-5xl font-black text-emerald-400">
            #47
          </h2>
        </div>

      </div>

      {/* BAR CHART */}
      <div className="bg-white/10 border border-white/10 rounded-3xl p-8 mb-10">

        <h2 className="text-2xl font-bold mb-6">
          Skill Analysis
        </h2>

        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis dataKey="skill" />
              <YAxis />
              <Tooltip />
              <Bar
                dataKey="score"
                fill="#8b5cf6"
                radius={[10, 10, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

      </div>

      {/* RECENT INTERVIEWS */}
      <div className="bg-white/10 border border-white/10 rounded-3xl p-8">

        <h2 className="text-2xl font-bold mb-6">
          Recent Interviews
        </h2>

        <div className="space-y-4">

          <div className="bg-black/30 rounded-2xl p-5 flex justify-between">
            <div>
              <h3 className="font-bold">
                Frontend Developer
              </h3>

              <p className="text-white/40 text-sm">
                React · Tailwind · Firebase
              </p>
            </div>

            <div className="text-violet-400 font-black text-2xl">
              91%
            </div>
          </div>

          <div className="bg-black/30 rounded-2xl p-5 flex justify-between">
            <div>
              <h3 className="font-bold">
                Backend Developer
              </h3>

              <p className="text-white/40 text-sm">
                Node.js · APIs · MongoDB
              </p>
            </div>

            <div className="text-cyan-400 font-black text-2xl">
              84%
            </div>
          </div>

          <div className="bg-black/30 rounded-2xl p-5 flex justify-between">
            <div>
              <h3 className="font-bold">
                HR Interview
              </h3>

              <p className="text-white/40 text-sm">
                Communication · Confidence
              </p>
            </div>

            <div className="text-emerald-400 font-black text-2xl">
              95%
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}