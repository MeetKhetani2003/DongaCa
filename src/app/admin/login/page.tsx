"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (res.ok) {
        router.push("/admin");
      } else {
        setError("Invalid credentials");
      }
    } catch (err) {
      setError("An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAF7] flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md bg-white p-12 rounded-[32px] shadow-2xl border border-[#0B3A5C]/5"
      >
        <div className="text-center mb-10">
          <div className="inline-block px-3 py-1 bg-[#1F8FCF]/10 text-[#1F8FCF] text-[10px] uppercase tracking-widest font-bold rounded-full mb-4">
            Security
          </div>
          <h1 className="font-display text-3xl text-[#0B3A5C]">Admin Login</h1>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-[10px] uppercase tracking-widest text-[#1A1A1A]/40 font-bold mb-3">
              Username
            </label>
            <input
              type="text"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full bg-[#FAFAF7] border border-[#0B3A5C]/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#1F8FCF] transition-colors"
            />
          </div>
          <div>
            <label className="block text-[10px] uppercase tracking-widest text-[#1A1A1A]/40 font-bold mb-3">
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-[#FAFAF7] border border-[#0B3A5C]/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#1F8FCF] transition-colors"
            />
          </div>

          {error && <p className="text-red-500 text-xs text-center">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#0B3A5C] text-white py-4 rounded-xl text-[11px] uppercase tracking-widest font-bold hover:bg-[#1F8FCF] transition-all disabled:opacity-50"
          >
            {loading ? "Verifying..." : "Access Dashboard"}
          </button>
        </form>
      </motion.div>
    </div>
  );
}
