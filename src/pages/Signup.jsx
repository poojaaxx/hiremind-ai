import { useState } from "react";

import {
  useNavigate,
  Link,
} from "react-router-dom";

import {
  Brain,
  Sparkles,
  Rocket,
  ShieldCheck,
} from "lucide-react";

import { motion } from "framer-motion";

import { useAuth } from "../context/AuthContext";

export default function Signup() {

  const { signup } = useAuth();

  const navigate = useNavigate();

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [error, setError] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const handleSignup = async (e) => {

    e.preventDefault();

    setError("");

    try {

      setLoading(true);

      await signup({
        name,
        email,
        password,
      });

      navigate("/login");

    } catch (err) {

      setError(
        "Unable to create account"
      );

    } finally {

      setLoading(false);
    }
  };

  return (

    <div className="min-h-screen bg-[#050816] text-white flex overflow-hidden">

      {/* LEFT */}
      <div className="hidden lg:flex lg:w-1/2 relative items-center justify-center p-16">

        <div className="absolute w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[120px]" />

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
                  Future of Interview Preparation
                </p>
              </div>
            </div>

            <h2 className="text-5xl font-black leading-tight mb-6">

              Build Your
              <br />

              <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                Career Intelligence
              </span>

            </h2>

            <p className="text-white/50 text-lg leading-relaxed mb-10">

              Join developers using AI-driven interview training
              to land better opportunities faster.

            </p>

            <div className="space-y-5">

              <div className="flex items-center gap-4">

                <div className="w-12 h-12 rounded-2xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
                  <Sparkles size={20} className="text-violet-400" />
                </div>

                <div>
                  <h3 className="font-bold">
                    Smart AI Preparation
                  </h3>

                  <p className="text-white/40 text-sm">
                    Practice smarter with intelligent interview systems.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">

                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                  <Rocket size={20} className="text-cyan-400" />
                </div>

                <div>
                  <h3 className="font-bold">
                    Accelerate Growth
                  </h3>

                  <p className="text-white/40 text-sm">
                    Improve confidence and interview performance rapidly.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">

                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                  <ShieldCheck size={20} className="text-emerald-400" />
                </div>

                <div>
                  <h3 className="font-bold">
                    Secure Authentication
                  </h3>

                  <p className="text-white/40 text-sm">
                    Cloud-secured login powered by Firebase.
                  </p>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </div>

      {/* RIGHT */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 relative">

        <div className="absolute w-[400px] h-[400px] rounded-full bg-violet-500/10 blur-[120px]" />

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
              Create Account
            </h2>

            <p className="text-white/40 mb-8">
              Start your AI-powered interview journey today.
            </p>

            <form
              onSubmit={handleSignup}
              className="space-y-5"
            >

              <div>
                <label className="text-sm text-white/50 mb-2 block">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full bg-black/30 border border-white/10 rounded-2xl p-4 outline-none focus:border-violet-500 transition-all"
                  value={name}
                  onChange={(e) =>
                    setName(e.target.value)
                  }
                />
              </div>

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
                  placeholder="Create password"
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
                  ? "Creating Account..."
                  : "Create Account"}
              </button>

            </form>

            <p className="mt-8 text-center text-white/40">

              Already have an account?{" "}

              <Link
                to="/login"
                className="text-violet-400 font-semibold hover:text-violet-300"
              >
                Login
              </Link>

            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}