import React, { useState } from "react";
import icon from "../assets/logo.svg";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; // for hamburger icon (optional)
import { useNavigate } from "react-router-dom";
import './Header.css'
const Header = () => {
  const [open, setOpen] = useState(false);
  const navigate=useNavigate()

  return (
    <header className="px-6 py-1 shadow-md bg-white sticky top-0 z-50">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center ">
          <img src={icon} alt="logo" width={50} height={50} />
          <span className="font-semibold text-2xl logo-text text-orange-500 cursor-pointer" onClick={()=>{navigate("/")}}>
            ChicTryOn
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6 header-text text-gray-500  font-bold text-xs hover:bg-black-500">
          {/* <NavLink to="/">Home</NavLink> */}

          <NavLink to="/studio">Studio</NavLink>
          <NavLink to="/gallery">Gallery</NavLink>
          <NavLink to="/pricing">Pricing</NavLink>
          <NavLink to="/test">Test</NavLink>
        </div>

        {/* Desktop Auth Buttons */}
        <div className=" hidden md:flex gap-4 text-gray-500 font-bold text-xs header-text">
          <NavLink
            className="bg-gray-200  px-3 py-1 text-gray-800 rounded-md  hover:bg-black hover:text-white"
            to="/login"
          >
            Login
          </NavLink>
          <NavLink
            to="/register"
            className="bg-orange-500  px-3 py-1 text-white rounded-md  hover:bg-orange-600"
          >
            Sign Up
          </NavLink>
        </div>

        {/* Mobile Hamburger Button */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 mt-4" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-4 text-lg font-medium bg-gray-100 px-4 py-4 rounded-lg header-text text-gray-500 font-bold text-sm">
          <NavLink to="/" onClick={() => setOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/studio" onClick={() => setOpen(false)}>
            Studio
          </NavLink>
          <NavLink to="/gallery" onClick={() => setOpen(false)}>
            Gallery
          </NavLink>
          <NavLink to="/pricing" onClick={() => setOpen(false)}>
            Pricing
          </NavLink>

          <hr className="border-gray-300" />

          <NavLink to="/login" onClick={() => setOpen(false)}>
            Login
          </NavLink>
          <NavLink
            to="/register"
            className="bg-orange-500 text-white px-3 py-2 rounded-md text-center font-semibold"
            onClick={() => setOpen(false)}
          >
            Sign Up
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
