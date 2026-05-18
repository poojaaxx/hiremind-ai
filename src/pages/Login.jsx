import { useState } from "react";

import {
  useNavigate,
  Link,
} from "react-router-dom";

import {
  Brain,
  Sparkles,
  ShieldCheck,
  BarChart3,
} from "lucide-react";

import { motion } from "framer-motion";

import { useAuth } from "../context/AuthContext";

export default function Login() {

  const { login } = useAuth();

  const navigate = useNavigate();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [error, setError] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const handleLogin = async (e) => {

    e.preventDefault();

    setError("");

    try {

      setLoading(true);

      await login(
        email,
        password
      );

      navigate("/");

    } catch (err) {

      setError(
        "Invalid email or password"
      );

    } finally {

      setLoading(false);
    }
  };

  return (

    <div className="min-h-screen bg-[#050816] text-white flex overflow-hidden">

      {/* LEFT SIDE */}
      <div className="hidden lg:flex lg:w-1/2 relative items-center justify-center p-16">

        {/* BACKGROUND GLOW */}
        <div className="absolute w-[500px] h-[500px] rounded-full bg-violet-600/20 blur-[120px]" />

        <div className="relative z-10 max-w-lg">

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
            }}
          >

            <div className="flex items-center gap-4 mb-8">

              <div className="w-16 h-16 rounded-3xl bg-gradient-to-r from-violet-600 to-cyan-500 flex items-center justify-center">

                <Brain size={32} />

              </div>

              <div>

                <h1 className="text-5xl font-black">
                  HireMind AI
                </h1>

                <p className="text-white/40 mt-1">
                  Interview Intelligence Platform
                </p>

              </div>
            </div>

            <h2 className="text-5xl font-black leading-tight mb-6">

              Crack Interviews
              <br />

              <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                With AI Precision
              </span>

            </h2>

            <p className="text-white/50 text-lg leading-relaxed mb-10">

              Personalized AI-powered interview preparation platform
              with analytics, mock interviews, and intelligent feedback.

            </p>

            {/* FEATURES */}
            <div className="space-y-5">

              <div className="flex items-center gap-4">

                <div className="w-12 h-12 rounded-2xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
                  <Sparkles size={20} className="text-violet-400" />
                </div>

                <div>
                  <h3 className="font-bold">
                    AI Question Generator
                  </h3>

                  <p className="text-white/40 text-sm">
                    Generate role-specific interview questions instantly.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">

                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                  <BarChart3 size={20} className="text-cyan-400" />
                </div>

                <div>
                  <h3 className="font-bold">
                    Performance Analytics
                  </h3>

                  <p className="text-white/40 text-sm">
                    Track your interview growth and confidence levels.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">

                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                  <ShieldCheck size={20} className="text-emerald-400" />
                </div>

                <div>
                  <h3 className="font-bold">
                    Secure Cloud Sessions
                  </h3>

                  <p className="text-white/40 text-sm">
                    Firebase-powered secure authentication system.
                  </p>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 relative">

        <div className="absolute w-[400px] h-[400px] rounded-full bg-cyan-500/10 blur-[120px]" />

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          className="relative z-10 w-full max-w-md"
        >

          <div className="bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[32px] p-10 shadow-2xl">

            <h2 className="text-4xl font-black mb-3">
              Welcome Back
            </h2>

            <p className="text-white/40 mb-8">
              Login to continue your AI interview journey.
            </p>

            <form
              onSubmit={handleLogin}
              className="space-y-5"
            >

              <div>
                <label className="text-sm text-white/50 mb-2 block">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-black/30 border border-white/10 rounded-2xl p-4 outline-none focus:border-violet-500 transition-all"
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                />
              </div>

              <div>
                <label className="text-sm text-white/50 mb-2 block">
                  Password
                </label>

                <input
                  type="password"
                  placeholder="Enter password"
                  className="w-full bg-black/30 border border-white/10 rounded-2xl p-4 outline-none focus:border-violet-500 transition-all"
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                />
              </div>

              {error && (
                <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-2xl text-sm">
                  {error}
                </div>
              )}

              <button
                disabled={loading}
                className="w-full bg-gradient-to-r from-violet-600 to-cyan-600 hover:opacity-90 transition-all p-4 rounded-2xl font-bold text-lg"
              >
                {loading
                  ? "Signing In..."
                  : "Login"}
              </button>

            </form>

            <p className="mt-8 text-center text-white/40">

              Don't have an account?{" "}

              <Link
                to="/signup"
                className="text-violet-400 font-semibold hover:text-violet-300"
              >
                Create Account
              </Link>

            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}