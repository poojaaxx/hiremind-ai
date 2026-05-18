import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function Settings() {
  const { user, updateUser } = useAuth();

  const [name, setName] = useState(user?.name || "");
  const [role, setRole] = useState(user?.role || "AI Engineer");
  const [bio, setBio] = useState(user?.bio || "Passionate developer building AI-powered applications.");
  const [location, setLocation] = useState(user?.location || "India");
  const [github, setGithub] = useState(user?.github || "github.com/poojaaxx");
  const [linkedin, setLinkedin] = useState(user?.linkedin || "linkedin.com/in/yourprofile");
  const [theme, setTheme] = useState("Dark Mode");
  const [notifications, setNotifications] = useState(true);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    updateUser({
      name,
      role,
      bio,
      location,
      github,
      linkedin,
    });

    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-[#050816] text-white p-6 md:p-10">

      {/* HEADER */}
      <div className="mb-10">
        <h1 className="text-5xl font-black mb-2">
          Settings
        </h1>

        <p className="text-white/40 text-lg">
          Manage your profile, preferences, and interview workspace.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">

        {/* LEFT PROFILE CARD */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 h-fit">

          <div className="flex flex-col items-center text-center">

            <div
              className="w-28 h-28 rounded-full flex items-center justify-center text-4xl font-black mb-5"
              style={{
                background:
                  "linear-gradient(135deg, #7c3aed, #4f46e5, #06b6d4)",
              }}
            >
              {name?.charAt(0)?.toUpperCase()}
            </div>

            <h2 className="text-2xl font-black">
              {name}
            </h2>

            <p className="text-white/40 mt-1">
              {role}
            </p>

            <div className="mt-5 w-full space-y-3">

              <div className="bg-black/30 rounded-2xl p-4">
                <p className="text-white/40 text-sm mb-1">
                  Email
                </p>

                <p className="font-semibold break-all">
                  {user?.email}
                </p>
              </div>

              <div className="bg-black/30 rounded-2xl p-4">
                <p className="text-white/40 text-sm mb-1">
                  Location
                </p>

                <p className="font-semibold">
                  {location}
                </p>
              </div>

              <div className="bg-black/30 rounded-2xl p-4">
                <p className="text-white/40 text-sm mb-1">
                  Account Status
                </p>

                <p className="text-emerald-400 font-bold">
                  Active
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SETTINGS SECTION */}
        <div className="lg:col-span-2 space-y-8">

          {/* PROFILE SETTINGS */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

            <h2 className="text-2xl font-bold mb-6">
              Profile Information
            </h2>

            <div className="grid md:grid-cols-2 gap-5">

              <div>
                <label className="block text-sm text-white/50 mb-2">
                  Full Name
                </label>

                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-black/40 border border-white/10 rounded-2xl p-4 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm text-white/50 mb-2">
                  Role
                </label>

                <input
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full bg-black/40 border border-white/10 rounded-2xl p-4 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm text-white/50 mb-2">
                  Location
                </label>

                <input
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full bg-black/40 border border-white/10 rounded-2xl p-4 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm text-white/50 mb-2">
                  Theme
                </label>

                <select
                  value={theme}
                  onChange={(e) => setTheme(e.target.value)}
                  className="w-full bg-black/40 border border-white/10 rounded-2xl p-4 outline-none"
                >
                  <option>Dark Mode</option>
                  <option>Light Mode</option>
                  <option>Cyberpunk</option>
                </select>
              </div>
            </div>

            <div className="mt-5">
              <label className="block text-sm text-white/50 mb-2">
                Bio
              </label>

              <textarea
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                rows="5"
                className="w-full bg-black/40 border border-white/10 rounded-2xl p-4 outline-none resize-none"
              />
            </div>
          </div>

          {/* SOCIAL LINKS */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

            <h2 className="text-2xl font-bold mb-6">
              Social Profiles
            </h2>

            <div className="space-y-5">

              <div>
                <label className="block text-sm text-white/50 mb-2">
                  GitHub
                </label>

                <input
                  value={github}
                  onChange={(e) => setGithub(e.target.value)}
                  className="w-full bg-black/40 border border-white/10 rounded-2xl p-4 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm text-white/50 mb-2">
                  LinkedIn
                </label>

                <input
                  value={linkedin}
                  onChange={(e) => setLinkedin(e.target.value)}
                  className="w-full bg-black/40 border border-white/10 rounded-2xl p-4 outline-none"
                />
              </div>
            </div>
          </div>

          {/* PREFERENCES */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

            <h2 className="text-2xl font-bold mb-6">
              Preferences
            </h2>

            <div className="flex items-center justify-between bg-black/30 rounded-2xl p-5">

              <div>
                <h3 className="font-bold text-lg">
                  Notifications
                </h3>

                <p className="text-white/40 text-sm mt-1">
                  Receive interview reminders and AI insights.
                </p>
              </div>

              <button
                onClick={() => setNotifications(!notifications)}
                className={`px-5 py-2 rounded-xl font-bold transition-all ${
                  notifications
                    ? "bg-emerald-500"
                    : "bg-red-500"
                }`}
              >
                {notifications ? "ON" : "OFF"}
              </button>
            </div>
          </div>

          {/* SAVE BUTTON */}
          <div className="flex items-center gap-5">

            <button
              onClick={handleSave}
              className="bg-violet-600 hover:bg-violet-700 px-8 py-4 rounded-2xl font-bold text-lg transition-all"
            >
              Save Changes
            </button>

            {saved && (
              <p className="text-emerald-400 font-semibold">
                Settings updated successfully.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
