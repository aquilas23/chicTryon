import React, { useState } from "react";
import icon from "../assets/logo.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import "./Header.css";

const Header = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    { label: "Home", to: "/" },
    { label: "Studio", to: "/studio" },
    { label: "Gallery", to: "/gallery" },
    { label: "Inspiration", to: "/inspiration" },
  ];

  return (
    <header className="px-6 py-3 shadow-lg backdrop-blur-md bg-white/80 sticky top-0 z-50 border-b border-orange-500/20">
      <div className="flex items-center justify-between w-full">
        {/* LOGO */}
        <div
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => navigate("/")}
        >
          <img
            src={icon}
            alt="logo"
            width={45}
            height={45}
            className="transition-transform duration-300 group-hover:scale-110"
          />
          <span className="font-bold text-2xl logo-text text-orange-600 group-hover:text-orange-700 transition">
            ChicTryOn
          </span>
        </div>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden md:flex items-center gap-10 font-semibold text-sm ml-10">
          {menuItems.map((item) => (
            <NavLink
              key={item.to}
              className={({ isActive }) =>
                `transition hover:text-orange-600 ${
                  isActive ? "text-orange-600" : "text-gray-700"
                }`
              }
              to={item.to}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* AUTH BUTTONS DESKTOP */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => navigate("/login")}
            className="px-5 py-1.5 rounded-full border border-orange-500 text-orange-600 font-semibold text-sm hover:bg-orange-500 hover:text-white transition"
          >
            Login
          </button>
          <button
            onClick={() => navigate("/signup")}
            className="px-6 py-1.5 rounded-full font-semibold text-sm bg-orange-600 text-white hover:bg-orange-700 transition shadow-md"
          >
            Sign Up
          </button>
        </div>

        {/* HAMBURGER MOBILE */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 mt-3" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-4 bg-gray-100 p-5 rounded-xl shadow-md text-gray-700 font-semibold text-base">
          {menuItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="hover:text-orange-600 transition"
            >
              {item.label}
            </NavLink>
          ))}

          <hr className="border-gray-300" />

          {/* MOBILE AUTH */}
          <button
            onClick={() => {
              navigate("/login");
              setOpen(false);
            }}
            className="w-full py-2 rounded-full border border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white transition"
          >
            Login
          </button>
          <button
            onClick={() => {
              navigate("/signup");
              setOpen(false);
            }}
            className="w-full py-2 rounded-full bg-orange-600 text-white hover:bg-orange-700 transition shadow-md"
          >
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
