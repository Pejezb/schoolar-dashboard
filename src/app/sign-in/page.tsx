"use client";
import React, { useState } from "react";
import SignUp from "@/components/SignUp";
import SignIn from "@/components/SignIn";
import ToggleContainer from "@/components/ToggleContainer";

const LoginPageGeneral: React.FC = () => {
  const [isSignUpActive, setIsSignUpActive] = useState(false);

  const handleToggle = () => setIsSignUpActive(!isSignUpActive);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-300 to-green-100">
      <div className="relative w-[768px] max-w-full min-h-[480px] bg-white rounded-2xl shadow-lg overflow-hidden flex">
        
        {/* Sign Up Component */}
        <div className={`w-1/2 transition-transform duration-700 ${isSignUpActive ? "translate-x-0" : "-translate-x-full opacity-0 pointer-events-none"}`}>
          <SignUp />
        </div>

        {/* Sign In Component */}
        <div className={`w-1/2 transition-transform duration-700 ${isSignUpActive ? "translate-x-full opacity-0 pointer-events-none" : "translate-x-0"}`}>
          <SignIn />
        </div>

        {/* Toggle Container */}
        <ToggleContainer isSignUpActive={isSignUpActive} handleToggle={handleToggle} />
      </div>
    </div>
  );
};

export default LoginPageGeneral;
