import React, { useState } from "react";
import { Mail, Lock, Eye, EyeOff, X } from "lucide-react";
import { useLinkClickHandler, useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import axios from 'axios';
import { useDispatch } from "react-redux";
import {loginSuccess} from "../redux/authSlice"
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
const Login = () => {
  const dispatch=useDispatch()
  const navigate = useNavigate();
  const location = useLocation();
  const message = location.state?.message;

  const [showPass, setShowPass] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
useEffect(() => {
  if (message) {
    toast.error(message);

    // clear state so toast doesn’t repeat
    navigate(location.pathname, { replace: true });
  }
}, [message, navigate, location.pathname]);
  

  const handleLogin = async () => {
    if (!email || !password) {
      return toast.error("⚠ Please fill all fields");
    }
    try{

      const data = await axios.post(`${import.meta.env.VITE_API_URL}/api/login`, {
        email: email,
        password: password,
      });
      console.log(data)
      if(data.status===200){
        // localStorage.setItem("token",data.data.token);
        // localStorage.setItem("user",JSON.stringify(data.data.user))
        dispatch(loginSuccess({
          user:data.data.user,
          token:data.data.token
        }))
        
        toast.success("Logged in successfully");

        setTimeout(()=>{
          navigate("/studio")
        },1000)

      }
    }catch(err){
      console.log(err)
      toast.error(err.response.data.message)
      // res.send("")
    }


    // setTimeout(() => navigate("/"), 1200);
  };

  return (
    <>
      <Toaster position="top-center" />

      {/* BACKGROUND OVERLAY (BLUR + TRANSPARENT) */}
      <div
        className="fixed inset-0 bg-black/20 backdrop-blur-[6px] z-[999] flex justify-center items-center"
        onClick={() => navigate(-1)}
      />

      {/* MODAL POPUP */}
      <div className="fixed z-[1000] bg-white w-full max-w-md rounded-2xl shadow-2xl p-8 animate-fadeIn border border-gray-200">
        {/* CLOSE BUTTON */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 right-4 p-1 hover:bg-gray-100 rounded-full transition"
        >
          <X size={22} />
        </button>

        {/* TITLE */}
        <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-1">
          Welcome Back
        </h2>
        <p className="text-gray-500 text-center text-sm mb-6">
          Sign in to explore virtual hairstyle transformation
        </p>

        {/* Email Input */}
        <div className="mb-4 relative">
          <Mail className="absolute left-3 top-3 text-gray-500" size={20} />
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-100 text-gray-800 
            placeholder-gray-500 outline-none focus:bg-white focus:ring-2 focus:ring-orange-400 transition"
          />
        </div>

        {/* Password Input */}
        <div className="mb-6 relative">
          <Lock className="absolute left-3 top-3 text-gray-500" size={20} />
          <input
            type={showPass ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full pl-10 pr-10 py-3 rounded-lg bg-gray-100 text-gray-800 
            placeholder-gray-500 outline-none focus:bg-white focus:ring-2 focus:ring-orange-400 transition"
          />
          <button
            onClick={() => setShowPass(!showPass)}
            className="absolute right-3 top-3 text-gray-500"
          >
            {showPass ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        {/* LOGIN BUTTON */}
        <button
          onClick={handleLogin}
          className="w-full py-3 rounded-lg bg-orange-500 text-white font-bold 
          hover:bg-orange-600 hover:scale-[1.02] transition shadow-lg"
        >
          Login
        </button>

        {/* FOOTER */}
        <p className="text-gray-600 text-sm text-center mt-6">
          Don’t have an account?
          <button
            className="text-orange-600 font-semibold ml-1 hover:underline"
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </button>
        </p>
      </div>
    </>
  );
};

export default Login;
