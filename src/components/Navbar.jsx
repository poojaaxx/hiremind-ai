import {
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";

import {
  Bell,
  LayoutDashboard,
  Brain,
  BarChart3,
  Settings,
  LogOut,
  User,
  Sparkles,
} from "lucide-react";

import { motion } from "framer-motion";

import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  const navigate = useNavigate();

  const location = useLocation();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  if (!user) return null;

  const navLinks = [
    {
      name: "Dashboard",
      path: "/",
      icon: LayoutDashboard,
    },
    {
      name: "Generate",
      path: "/generate",
      icon: Sparkles,
    },
    {
      name: "Analytics",
      path: "/analytics",
      icon: BarChart3,
    },
    {
      name: "Interview",
      path: "/interview",
      icon: Brain,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: Settings,
    },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-2xl bg-[#050816]/80 border-b border-white/10">

      <div className="max-w-[1600px] mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="flex items-center gap-3"
        >
          <div
            className="w-11 h-11 rounded-2xl flex items-center justify-center"
            style={{
              background:
                "linear-gradient(135deg, #7c3aed, #06b6d4)",
            }}
          >
            <Brain size={22} />
          </div>

          <div>
            <h1 className="text-2xl font-black bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              HireMind AI
            </h1>

            <p className="text-[10px] text-white/30 uppercase tracking-[0.25em]">
              Interview Intelligence
            </p>
          </div>
        </motion.div>

        {/* NAV LINKS */}
        <div className="hidden lg:flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-3 py-2">

          {navLinks.map((item) => {
            const Icon = item.icon;

            const active =
              location.pathname === item.path;

            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 text-sm font-semibold ${
                  active
                    ? "bg-violet-600 text-white"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
              >
                <Icon size={16} />
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">

          {/* NOTIFICATION */}
          <button className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all relative">

            <Bell size={18} />

            <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-red-500" />
          </button>

          {/* USER PROFILE */}
          <div className="hidden md:flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-4 py-2">

            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center font-black"
              style={{
                background:
                  "linear-gradient(135deg, #7c3aed, #06b6d4)",
              }}
            >
              {user?.name?.charAt(0)?.toUpperCase()}
            </div>

            <div>
              <h3 className="text-sm font-bold">
                {user?.name}
              </h3>

              <p className="text-[11px] text-white/40">
                {user?.role}
              </p>
            </div>
          </div>

          {/* LOGOUT */}
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 transition-all px-5 py-2.5 rounded-2xl font-bold flex items-center gap-2"
          >
            <LogOut size={16} />
            Logout
          </motion.button>
        </div>
      </div>
    </nav>
  );
}