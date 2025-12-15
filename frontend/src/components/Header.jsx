import React, { useState, useRef, useEffect } from "react";
import icon from "../assets/logo.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import "./Header.css";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/authSlice";
import { CgProfile } from "react-icons/cg";
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.auth.user);

  const [openMobile, setOpenMobile] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);

  const profileRef = useRef(null);

  const menuItems = [
    { label: "Home", to: "/" },
    { label: "Studio", to: "/studio" },
    { label: "Gallery", to: "/gallery" },
    { label: "Inspiration", to: "/inspiration" },
    {label:"Pricing",to:"/pricing"}
  ];

  const handleLogout = () => {
    dispatch(logout());
    setOpenProfile(false);
    navigate("/");
  };

  // Close profile dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setOpenProfile(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="px-6 py-3 shadow-lg backdrop-blur-md bg-white/80 sticky top-0 z-50 border-b border-orange-500/20">
      <div className="flex items-center justify-between w-full">
        {/* LOGO */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img src={icon} alt="logo" width={45} height={45} />
          <span className="font-bold text-2xl text-orange-600 logo-text">
            ChicTryOn
          </span>
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-10 font-semibold text-sm ml-10 header-text">
          {menuItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `transition hover:text-orange-600 ${
                  isActive ? "text-orange-600" : "text-gray-700"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* DESKTOP AUTH */}
        <div className="hidden md:flex items-center gap-4 relative header-text">
          {!user ? (
            <>
              <button
                onClick={() => navigate("/login")}
                className="px-5 py-1 rounded-full  border border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white transition header-text"
              >
                Login
              </button>
              <button
                onClick={() => navigate("/signup")}
                className="px-6 py-1 rounded-full bg-orange-600 text-white hover:bg-orange-700 transition"
              >
                Sign Up
              </button>
            </>
          ) : (
            <div ref={profileRef} className="relative">
              {/* PROFILE BUTTON */}
              <button
                onClick={() => setOpenProfile((prev) => !prev)}
                className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-300 hover:border-orange-500 transition"
              >
                <CgProfile size={18} />
                <span className="font-semibold text-gray-700">
                  {user.name || user.email}
                </span>
              </button>

              {/* DROPDOWN */}
              {openProfile && (
                <div className="absolute right-0 mt-4 w-48 bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                  <div className="w-full text-left px-4 py-2 hover:bg-gray-100 transition">
                    <p className="header-text">{user.name}</p>
                    <p className="text-gray-500 text-xs header-text">
                      {user.email}
                    </p>
                  </div>
                  <hr />
                  <button
                    onClick={() => {
                      navigate("/my-gallery");
                      setOpenProfile(false);
                    }}
                    className="w-full text-left px-4 py-1 hover:bg-gray-100 transition text-sm"
                  >
                    My Gallery
                  </button>

                  <button
                    onClick={() => {
                      navigate("/settings");
                      setOpenProfile(false);
                    }}
                    className="w-full text-left px-4 py-1 hover:bg-gray-100 transition text-sm"
                  >
                    Settings
                  </button>

                  <hr />

                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-red-500 hover:bg-red-50 transition"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* MOBILE HAMBURGER */}
        <button
          className="md:hidden"
          onClick={() => setOpenMobile(!openMobile)}
        >
          {openMobile ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden transition-all duration-300 ${
          openMobile ? "max-h-96 mt-3" : "max-h-0"
        } overflow-hidden`}
      >
        <div className="flex flex-col gap-4 bg-gray-100 p-5 rounded-xl shadow-md">
          {menuItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setOpenMobile(false)}
            >
              {item.label}
            </NavLink>
          ))}

          <hr />

          {!user ? (
            <>
              <button onClick={() => navigate("/login")}>Login</button>
              <button onClick={() => navigate("/signup")}>Sign Up</button>
            </>
          ) : (
            <>
              <button onClick={() => navigate("/my-gallery")}>
                My Gallery
              </button>
              <button onClick={() => navigate("/settings")}>Settings</button>
              <button onClick={handleLogout} className="text-red-500">
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
