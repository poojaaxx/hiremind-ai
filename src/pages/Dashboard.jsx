import { useState, useEffect } from "react";

import { motion } from "framer-motion";

import {
  Zap,
  Star,
  Brain,
  BarChart3,
  Trophy,
  Flame,
  Sparkles,
  ArrowRight,
} from "lucide-react";

import { useAuth } from "../context/AuthContext";

export default function Dashboard() {

  const { user } = useAuth();

  const [time, setTime] = useState(new Date());

  useEffect(() => {

    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);

  }, []);

  const timeStr = time.toLocaleTimeString(
    "en-US",
    {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }
  );

  const dateStr = time.toLocaleDateString(
    "en-US",
    {
      weekday: "short",
      month: "short",
      day: "numeric",
    }
  );

  const stats = [
    {
      title: "Interviews",
      value: "12",
      icon: Brain,
      color: "text-violet-400",
    },
    {
      title: "Avg Score",
      value: "87%",
      icon: Trophy,
      color: "text-cyan-400",
    },
    {
      title: "Current Streak",
      value: "9 Days",
      icon: Flame,
      color: "text-orange-400",
    },
    {
      title: "AI Confidence",
      value: "91%",
      icon: Sparkles,
      color: "text-emerald-400",
    },
  ];

  return (
    <div className="min-h-screen bg-[#050816] text-white px-4 md:px-8 lg:px-10 py-10 overflow-x-hidden">

      <div className="max-w-[1600px] mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col xl:flex-row xl:items-center justify-between gap-6 mb-10"
        >

          {/* LEFT */}
          <div>

            <div className="flex items-center gap-3 mb-3">

              <motion.div
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
                className="w-2 h-2 rounded-full bg-emerald-400"
              />

              <span className="text-xs uppercase tracking-[0.3em] text-emerald-400 font-bold">
                AI Session Active
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-black leading-tight">

              Welcome back,
              <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                {" "}
                {user?.name}
              </span>

            </h1>

            <p className="text-white/40 mt-3 text-lg">
              Your interview intelligence hub is ready.
            </p>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-4">

            <div className="bg-white/5 border border-white/10 rounded-3xl px-6 py-4">

              <div
                className="text-2xl font-black text-cyan-400"
                style={{
                  fontVariantNumeric:
                    "tabular-nums",
                }}
              >
                {timeStr}
              </div>

              <div className="text-xs text-white/40 mt-1 uppercase tracking-wider">
                {dateStr}
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="bg-gradient-to-r from-violet-600 to-cyan-600 px-6 py-4 rounded-3xl font-bold flex items-center gap-3"
            >
              <Zap size={18} />
              Start Session
            </motion.button>
          </div>
        </motion.div>

        {/* TOP GRID */}
        <div className="grid lg:grid-cols-4 gap-6 mb-10">

          {/* PROFILE CARD */}
          <div className="lg:col-span-1 bg-white/5 border border-white/10 rounded-3xl p-8">

            <div className="flex flex-col items-center text-center">

              <div className="relative mb-5">

                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-[-8px] rounded-full"
                  style={{
                    background:
                      "conic-gradient(from 0deg, #7c3aed, #06b6d4, #ec4899, #7c3aed)",
                    WebkitMask:
                      "radial-gradient(circle, transparent 62%, black 63%)",
                    mask:
                      "radial-gradient(circle, transparent 62%, black 63%)",
                  }}
                />

                <div
                  className="w-24 h-24 rounded-full flex items-center justify-center text-4xl font-black relative"
                  style={{
                    background:
                      "linear-gradient(135deg, #7c3aed, #4f46e5, #06b6d4)",
                  }}
                >
                  {user?.name?.charAt(0)?.toUpperCase()}
                </div>
              </div>

              <h2 className="text-2xl font-black">
                {user?.name}
              </h2>

              <p className="text-white/40 mt-1">
                {user?.role}
              </p>

              <div className="mt-5 bg-amber-500/10 border border-amber-500/20 px-4 py-2 rounded-full flex items-center gap-2 text-amber-400 text-sm font-bold">
                <Star size={14} fill="currentColor" />
                Elite Pro Member
              </div>

              <div className="w-full mt-8 space-y-4">

                <div className="bg-black/30 rounded-2xl p-4">
                  <p className="text-white/40 text-sm mb-1">
                    Global Rank
                  </p>

                  <h3 className="text-2xl font-black">
                    #47
                  </h3>
                </div>

                <div className="bg-black/30 rounded-2xl p-4">
                  <p className="text-white/40 text-sm mb-1">
                    Confidence
                  </p>

                  <h3 className="text-2xl font-black text-emerald-400">
                    91%
                  </h3>
                </div>

              </div>
            </div>
          </div>

          {/* STATS */}
          <div className="lg:col-span-3 grid md:grid-cols-2 xl:grid-cols-4 gap-6">

            {stats.map((item, index) => {

              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-white/5 border border-white/10 rounded-3xl p-6"
                >
                  <div className="flex items-center justify-between mb-6">

                    <div
                      className={`w-14 h-14 rounded-2xl bg-black/30 flex items-center justify-center ${item.color}`}
                    >
                      <Icon size={26} />
                    </div>

                    <ArrowRight
                      size={18}
                      className="text-white/20"
                    />
                  </div>

                  <p className="text-white/40 text-sm mb-2">
                    {item.title}
                  </p>

                  <h2 className="text-4xl font-black">
                    {item.value}
                  </h2>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* LOWER GRID */}
        <div className="grid xl:grid-cols-3 gap-6">

          {/* AI INSIGHTS */}
          <div className="xl:col-span-2 bg-white/5 border border-white/10 rounded-3xl p-8">

            <div className="flex items-center justify-between mb-8">

              <div>
                <h2 className="text-3xl font-black">
                  AI Insights
                </h2>

                <p className="text-white/40 mt-2">
                  Personalized interview intelligence.
                </p>
              </div>

              <Sparkles className="text-violet-400" />
            </div>

            <div className="space-y-5">

              <div className="bg-black/30 rounded-2xl p-5">
                <h3 className="font-bold text-lg mb-2">
                  Communication Improved
                </h3>

                <p className="text-white/50 leading-relaxed">
                  Your communication confidence has
                  improved by 12% this week based on
                  interview response analysis.
                </p>
              </div>

              <div className="bg-black/30 rounded-2xl p-5">
                <h3 className="font-bold text-lg mb-2">
                  Frontend Strength Detected
                </h3>

                <p className="text-white/50 leading-relaxed">
                  React and UI-based interview scores
                  are consistently higher than backend
                  categories.
                </p>
              </div>

              <div className="bg-black/30 rounded-2xl p-5">
                <h3 className="font-bold text-lg mb-2">
                  Recommendation
                </h3>

                <p className="text-white/50 leading-relaxed">
                  Practice more DSA and system design
                  interviews to improve overall ranking.
                </p>
              </div>

            </div>
          </div>

          {/* QUICK ACTIONS */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

            <h2 className="text-3xl font-black mb-8">
              Quick Actions
            </h2>

            <div className="space-y-5">

              <button className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:opacity-90 transition-all p-5 rounded-2xl text-left">

                <h3 className="font-bold text-lg mb-1">
                  Start Mock Interview
                </h3>

                <p className="text-white/70 text-sm">
                  Launch AI-powered interview session.
                </p>
              </button>

              <button className="w-full bg-black/30 border border-white/10 hover:bg-black/50 transition-all p-5 rounded-2xl text-left">

                <h3 className="font-bold text-lg mb-1">
                  Generate Questions
                </h3>

                <p className="text-white/50 text-sm">
                  Create dynamic interview questions.
                </p>
              </button>

              <button className="w-full bg-black/30 border border-white/10 hover:bg-black/50 transition-all p-5 rounded-2xl text-left">

                <h3 className="font-bold text-lg mb-1">
                  View Analytics
                </h3>

                <p className="text-white/50 text-sm">
                  Explore interview performance data.
                </p>
              </button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}