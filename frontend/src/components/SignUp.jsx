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
      return toast.error("⚠ Please fill all fields");
    }

    try {
      const res = await fetch("http://localhost:8000/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullname, email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("🎉 Account created successfully!");
        setTimeout(() => navigate("/login"), 1200);
      } else {
        toast.error(data.message || "Signup failed");
      }
    } catch (err) {
      toast.error("Server error. Try again.");
    }
  };

  return (
    <>
      {/* Toast messages */}
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 2200,
          style: {
            background: "#fff",
            color: "#333",
            borderRadius: "10px",
            padding: "10px 16px",
            border: "1px solid #ff7a18",
            fontWeight: "600",
          },
        }}
      />

      {/* OVERLAY WITH BLUR – fills screen */}
      <div
        className="fixed inset-0 bg-black/30 backdrop-blur-md z-[999] flex justify-center items-center"
        onClick={() => navigate(-1)}
      />

      {/* MODAL CARD */}
      <div className="fixed z-[1000] w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 border border-gray-200 animate-fadeIn mx-4">
        {/* Close button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 right-4 p-1 hover:bg-gray-100 rounded-full transition"
        >
          <X size={24} />
        </button>

        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-1">
          Create Your Account
        </h2>
        <p className="text-gray-500 text-center text-sm mb-6">
          Join ChicTryOn to explore virtual hairstyle transformations
        </p>

        {/* Full Name */}
        <div className="mb-4 relative">
          <User className="absolute left-3 top-3 text-gray-500" size={20} />
          <input
            type="text"
            placeholder="Full Name"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-100 text-gray-800 
            outline-none focus:bg-white focus:ring-2 focus:ring-orange-400 transition"
          />
        </div>

        {/* Email */}
        <div className="mb-4 relative">
          <Mail className="absolute left-3 top-3 text-gray-500" size={20} />
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-100 text-gray-800 
            outline-none focus:bg-white focus:ring-2 focus:ring-orange-400 transition"
          />
        </div>

        {/* Password */}
        <div className="mb-6 relative">
          <Lock className="absolute left-3 top-3 text-gray-500" size={20} />
          <input
            type={showPass ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full pl-10 pr-10 py-3 rounded-lg bg-gray-100 text-gray-800 
            outline-none focus:bg-white focus:ring-2 focus:ring-orange-400 transition"
          />
          <button
            onClick={() => setShowPass(!showPass)}
            className="absolute right-3 top-3 text-gray-500"
          >
            {showPass ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        {/* Submit */}
        <button
          onClick={handleSignup}
          className="w-full py-3 rounded-lg bg-orange-600 text-white font-bold 
          hover:bg-orange-700 hover:scale-[1.02] transition shadow-md"
        >
          Create Account
        </button>

        <p className="text-gray-600 text-sm text-center mt-6">
          Already have an account?{" "}
          <button
            className="text-orange-600 font-semibold hover:underline"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        </p>
      </div>
    </>
  );
};

export default SignUp;
