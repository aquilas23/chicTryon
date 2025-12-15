import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
import { logout, updateuser } from "../redux/authSlice";

const Settings = () => {
  const user = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [name, setName] = useState(user.user?.name || "");
  const [showDeleteModal, setShowDeleteModal] = useState(false); // ✅ added

  const handleSave = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/changename`,
        { name },
        {
          headers: {
            Authorization: user.token,
          },
        }
      );

      dispatch(updateuser({ user: response.data.user }));
      toast.success(response.data.message);
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data?.message || "Session expired");
      dispatch(logout());
      setTimeout(() => navigate("/home"), 3000);
    }
  };
  const DeleteAccount=async()=>{
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/deleteaccount`,
        { user },
        {
          headers: {
            Authorization: user.token,
          },
        }
      );
      dispatch(updateuser(logout()));
      setTimeout(()=>{

        navigate("/");
      },2000)
      toast.success(response.data.message);
    } catch (err) {}

  }

  const handleDeleteAccount = () => {
    // 🔥 only opens popup, logic stays yours
    
    setShowDeleteModal(true);
  };

  const handleManagePlan = () => {
    navigate("/pricing");
  };

  return (
    <>
      <Toaster position="top-center" />

      <div className="min-h-screen bg-gray-50 px-6 py-16">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg p-8">
          {/* HEADER */}
          <h1 className="text-3xl font-bold text-gray-900 header-text mb-1">
            Account Settings
          </h1>
          <p className="text-gray-500 header-text mb-10">
            Manage your profile and subscription details.
          </p>

          {/* PROFILE */}
          <section className="mb-12">
            <h2 className="text-xl font-semibold mb-4 header-text">
              Profile Information
            </h2>

            <div className="space-y-5">
              <div>
                <label className="block text-sm font-semibold mb-1 header-text">
                  Full Name
                </label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full max-w-md px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1 header-text">
                  Email Address
                </label>
                <input
                  value={user.user?.email}
                  disabled
                  className="w-full max-w-md px-4 py-2 bg-gray-100 text-gray-500 border rounded-lg"
                />
                <p className="text-xs text-gray-400 mt-1">
                  Email cannot be changed.
                </p>
              </div>

              <button
                onClick={handleSave}
                className="mt-4 px-6 py-2 bg-orange-500 text-white rounded-full font-semibold hover:bg-orange-600"
              >
                Save Changes
              </button>
            </div>
          </section>

          <hr className="my-10" />

          {/* SUBSCRIPTION */}
          <section className="mb-12">
            <h2 className="text-xl font-semibold mb-4 header-text">
              Subscription
            </h2>

            <div className="flex items-center justify-between max-w-md bg-orange-50 border border-orange-200 rounded-xl p-4">
              <div>
                <p className="text-sm text-gray-500 header-text">
                  Current Plan
                </p>
                <p className="text-lg font-semibold header-text">
                  Individual Plan
                </p>
              </div>

              <button
                onClick={handleManagePlan}
                className="px-4 py-2 rounded-full border border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white"
              >
                Manage Plan
              </button>
            </div>
          </section>

          <hr className="my-10" />

          {/* DANGER ZONE */}
          <section>
            <h2 className="text-xl font-semibold text-red-600 header-text mb-2">
              Account Actions
            </h2>

            <p className="text-sm text-gray-500 max-w-xl mb-6">
              Deleting your account is a permanent action and cannot be undone.
              All your saved styles and data will be lost.
            </p>

            <button
              onClick={handleDeleteAccount}
              className="px-6 py-2 rounded-full border border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
            >
              Delete My Account
            </button>
          </section>
        </div>
      </div>

      {/* ✅ DELETE CONFIRMATION POPUP (UI ONLY) */}
      {showDeleteModal && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setShowDeleteModal(false)}
          />

          <div className="relative z-[1000] bg-white w-full max-w-md rounded-2xl p-6 shadow-2xl">
            <h3 className="text-xl font-bold text-red-600 header-text mb-2">
              Delete Account
            </h3>

            <p className="text-sm text-gray-600 mb-6">
              Are you absolutely sure you want to delete your account?
              <br />
              <span className="text-red-500 font-semibold">
                This action cannot be undone.
              </span>
            </p>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="px-4 py-2 rounded-full border border-gray-300"
              >
                Cancel
              </button>

              <button
                onClick={() => {
                  DeleteAccount()
                  // 🔥 you will add delete logic here
                }}
                className="px-4 py-2 rounded-full bg-red-500 text-white hover:bg-red-600"
              >
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Settings;
