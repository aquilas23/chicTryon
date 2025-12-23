import React, { useState, useEffect } from "react";
import { Mail, Lock, Eye, EyeOff, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../redux/authSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const message = location.state?.message;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);

  useEffect(() => {
    if (message) {
      toast.error(message);
      navigate(location.pathname, { replace: true });
    }
  }, [message, navigate, location.pathname]);

  const handleLogin = async () => {
    if (!email || !password) {
      return toast.error("Please fill all fields");
    }

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/login`,
        { email, password }
      );

      if (res.status === 200) {
        dispatch(
          loginSuccess({
            user: res.data.user,
            token: res.data.token,
          })
        );

        toast.success("Logged in successfully");
        setTimeout(() => navigate("/studio"), 800);
      }
    } catch (err) {
      toast.error(err?.response?.data?.message || "Login failed");
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

      {/* CENTERING GRID (IMPORTANT FIX) */}
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
              Welcome Back
            </h2>
            <p className="text-gray-500 text-sm mt-2">
              Sign in to explore virtual hairstyle transformation
            </p>
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

          {/* BUTTON */}
          <button
            onClick={handleLogin}
            className="w-full py-3 rounded-lg bg-orange-500
            text-white font-semibold text-lg shadow-lg
            hover:bg-orange-600 active:scale-95 transition"
          >
            Login
          </button>

          {/* FOOTER */}
          <p className="text-center text-sm text-gray-600 mt-6">
            Don’t have an account?
            <button
              onClick={() => navigate("/signup")}
              className="text-orange-600 font-semibold ml-1 hover:underline"
            >
              Sign Up
            </button>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
