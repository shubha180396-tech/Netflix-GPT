import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import { checkValidData } from "../utils/validateForm";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { Netflix_Logo, PROFILE_IMG } from "../utils/constant";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const pwd = useRef(null);

  const validateSignIn = () => {
    const errorMsg = checkValidData(email.current.value, pwd.current.value);
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
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: PROFILE_IMG,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              setErrorMsg(error.message);
            });
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

          navigate("/browse");
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
        <img src={Netflix_Logo} alt="logo" />
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
              ref={name}
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
