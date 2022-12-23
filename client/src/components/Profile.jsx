import React from "react";

export const Profile = () => {
  const email = localStorage.getItem("email");
  
  return (
    <div>
      <div className="bg-orange-200 h-[100vh] text-6xl font-semibold text-center flex flex-col justify-center items-center">
        Welcome to profile page 
        <span className="text-2xl">{email}</span>
      </div>
    </div>
  );
};
export default Profile;
