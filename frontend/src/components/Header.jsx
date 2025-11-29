import React, { useState } from "react";
import icon from "../assets/logo.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import "./Header.css";

const Header = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="px-6 py-2 shadow-md bg-white sticky top-0 z-50">
      <div className="flex items-center justify-between w-full">
        {/* LOGO LEFT (no change to style) */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img src={icon} alt="logo" width={50} height={50} />
          <span className="font-semibold text-2xl logo-text text-orange-500 cursor-pointer">
            ChicTryOn
          </span>
        </div>

        {/* NAVIGATION CENTER */}
        <nav className="hidden md:flex mx-auto space-x-12 text-sm font-semibold">
          <NavLink
            className={({ isActive }) =>
              `hover:text-orange-600 transition ${
                isActive ? "text-orange-600" : "text-gray-600"
              }`
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `hover:text-orange-600 transition ${
                isActive ? "text-orange-600" : "text-gray-600"
              }`
            }
            to="/studio"
          >
            Studio
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `hover:text-orange-600 transition ${
                isActive ? "text-orange-600" : "text-gray-600"
              }`
            }
            to="/gallery"
          >
            Gallery
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `hover:text-orange-600 transition ${
                isActive ? "text-orange-600" : "text-gray-600"
              }`
            }
            to="/inspiration"
          >
            Inspiration
          </NavLink>
        </nav>

        {/* HAMBURGER FOR MOBILE */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 mt-3" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-4 bg-gray-100 p-4 rounded-lg text-gray-700 font-semibold text-base">
          <NavLink to="/studio" onClick={() => setOpen(false)}>
            Studio
          </NavLink>
          <NavLink to="/gallery" onClick={() => setOpen(false)}>
            Gallery
          </NavLink>
          <NavLink to="/inspiration" onClick={() => setOpen(false)}>
            Inspiration
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
