import React from "react";

export const Profile = () => {
  const email = localStorage.getItem("email");
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div>
      <nav className="fixed top-0 hover:opacity-90 transition duration-500 bg-gray-900 h-16 flex flex-row-reverse justify-between items-center w-full text-white ">
        <button className="px-7 py-3 bg-red-500 my-2 mx-5 rounded-lg hover:bg-red-600 border-2 border-white" onClick={handleLogout}>
          LogOut
        </button>
        <h1 className="text-xl my-2 mx-5">Profile Page</h1>
      </nav>
      <div className="bg-orange-200 h-[100vh] text-6xl font-semibold text-center flex flex-col justify-center items-center">
        Welcome to profile page
        <span className="text-2xl">{email}</span>
      </div>
    </div>
  );
};
export default Profile;
