import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const handleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/8e4a7625-f942-48f5-a9b0-d470b772bc8c/web/IN-en-20251215-TRIFECTA-perspective_a8575e53-99ab-4f16-a2d6-c037acaf12a6_small.jpg"
          alt="logo"
        />
      </div>
      <form className="absolute p-12 bg-black w-3/12  my-16 mx-auto left-0 right-0 bg-opacity-80 text-white rounded-lg">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <>
            <input
              type="text"
              placeholder="Full Name"
              className="p-4 my-4 w-full bg-slate-800 bg-opacity-30 border-[1px]"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="p-4 my-4 w-full bg-slate-800 bg-opacity-30 border-[1px]"
            />
          </>
        )}
        <input
          type="text"
          placeholder="Email address"
          className="p-4 my-4 w-full bg-slate-800  bg-opacity-30 border-[1px] "
        />
        <input
          type="password"
          placeholder="Enter password"
          className="p-4 my-4 w-full  bg-slate-800 bg-opacity-30 border-[1px] "
        />
        <button className="p-4 my-6 bg-red-800  w-full rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p onClick={handleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign up now"
            : "Already register. Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
