import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validateForm";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const email = useRef(null);
  const pwd = useRef(null);

  const validateSignIn = () => {
    const errorMsg = checkValidData(email.current.value, pwd.current.value);
    console.log(errorMsg);
    setErrorMsg(errorMsg);
    if (errorMsg) return;

    if (!isSignInForm) {
      //Sign Up form
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        pwd.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + "-" + errorMessage);
        });
    } else {
      //Sign In form
      signInWithEmailAndPassword(auth, email.current.value, pwd.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + "-" + errorMessage);
        });
    }
  };

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
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="absolute p-12 bg-black w-3/12  my-16 mx-auto left-0 right-0 bg-opacity-80 text-white rounded-lg"
      >
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
          ref={email}
          type="text"
          placeholder="Email address"
          className="p-4 my-4 w-full bg-slate-800  bg-opacity-30 border-[1px] "
        />
        <input
          ref={pwd}
          type="password"
          placeholder="Enter password"
          className="p-4 my-4 w-full  bg-slate-800 bg-opacity-30 border-[1px] "
        />
        <p className="text-red-600 font-bold">{errorMsg}</p>
        <button
          className="p-4 my-6 bg-red-800  w-full rounded-lg"
          onClick={validateSignIn}
        >
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
