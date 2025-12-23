// src/components/SignUp.jsx
import React, { useState } from "react";
import { Mail, Lock, User, Eye, EyeOff, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";

const SignUp = () => {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    if (!fullname || !email || !password) {
      return toast.error("Please fill all fields");
    }

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullname, email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("Account created successfully!");
        setTimeout(() => navigate("/login"), 1000);
      } else {
        toast.error(data.message || "Signup failed");
      }
    } catch {
      toast.error("Server error. Try again.");
    }
  };

  return (
    <>
      <Toaster position="top-center" />

      {/* BACKDROP */}
      <div
        className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[999]"
        onClick={() => navigate(-1)}
      />

      {/* CENTERING GRID */}
      <div className="fixed inset-0 z-[1000] grid place-items-center px-4">
        {/* MODAL */}
        <div
          className="relative w-full max-w-md bg-white rounded-2xl
          shadow-2xl p-6 sm:p-8 animate-fadeIn"
        >
          {/* CLOSE */}
          <button
            onClick={() => navigate(-1)}
            className="absolute top-4 right-4 p-2 rounded-full
            hover:bg-gray-100 transition"
          >
            <X size={20} />
          </button>

          {/* HEADER */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Create Your Account
            </h2>
            <p className="text-gray-500 text-sm mt-2">
              Join ChicTryOn to explore virtual hairstyle transformations
            </p>
          </div>

          {/* FULL NAME */}
          <div className="mb-4 relative">
            <User className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Full Name"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-100
              text-gray-800 outline-none focus:bg-white
              focus:ring-2 focus:ring-orange-400 transition"
            />
          </div>

          {/* EMAIL */}
          <div className="mb-4 relative">
            <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-100
              text-gray-800 outline-none focus:bg-white
              focus:ring-2 focus:ring-orange-400 transition"
            />
          </div>

          {/* PASSWORD */}
          <div className="mb-6 relative">
            <Lock className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type={showPass ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-10 pr-10 py-3 rounded-lg bg-gray-100
              text-gray-800 outline-none focus:bg-white
              focus:ring-2 focus:ring-orange-400 transition"
            />
            <button
              type="button"
              onClick={() => setShowPass(!showPass)}
              className="absolute right-3 top-3 text-gray-400"
            >
              {showPass ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {/* SUBMIT */}
          <button
            onClick={handleSignup}
            className="w-full py-3 rounded-lg bg-orange-500
            text-white font-semibold text-lg shadow-lg
            hover:bg-orange-600 active:scale-95 transition"
          >
            Create Account
          </button>

          {/* FOOTER */}
          <p className="text-center text-sm text-gray-600 mt-6">
            Already have an account?
            <button
              onClick={() => navigate("/login")}
              className="text-orange-600 font-semibold ml-1 hover:underline"
            >
              Login
            </button>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignUp;
