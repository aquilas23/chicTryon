import React, { useState } from "react";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);

  return (
    <div className="mt-16 flex justify-center items-center bg-gradient-to-br p-4 ">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 border border-orange-200 animate-fadeIn ">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-2">
          Welcome Back
        </h2>
        <p className="text-gray-500 text-center text-sm mb-6">
          Sign in to explore your AI hairstyle transformation
        </p>

        {/* Email Input */}
        <div className="mb-4 relative">
          <Mail className="absolute left-3 top-3 text-gray-500" size={20} />
          <input
            type="email"
            placeholder="Email"
            className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-100 text-gray-800 placeholder-gray-500
            outline-none focus:bg-white focus:ring-2 focus:ring-orange-400 transition"
          />
        </div>

        {/* Password Input */}
        <div className="mb-4 relative">
          <Lock className="absolute left-3 top-3 text-gray-500" size={20} />
          <input
            type={showPass ? "text" : "password"}
            placeholder="Password"
            className="w-full pl-10 pr-10 py-3 rounded-lg bg-gray-100 text-gray-800 placeholder-gray-500
            outline-none focus:bg-white focus:ring-2 focus:ring-orange-400 transition"
          />
          <button
            onClick={() => setShowPass(!showPass)}
            className="absolute right-3 top-3 text-gray-500"
          >
            {showPass ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        {/* Login BTN */}
        <button
          className="w-full py-3 rounded-lg bg-orange-500 text-white font-bold
          hover:bg-orange-600 hover:scale-105 transition shadow-lg"
          onClick={() => navigate("/")}
        >
          Login
        </button>

        {/* Social Login */}
        

        

        <p className="text-gray-600 text-sm text-center mt-6">
          Don’t have an account?{" "}
          <button
            onClick={() => navigate("/signup")}
            className="text-orange-600 font-semibold hover:underline"
          >
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
