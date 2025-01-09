import { useState } from "react";
import Header from "./Header";

const Login = ()=>{
  const [isSignIn,setIsSignIn] =useState(true)
  const toggleHandler = ()=>{
    setIsSignIn(!isSignIn)
  }
    return (
      <div className="">
        <Header />
        <div className="absolute">
          <img
            src="https://assets.nflxext.com/ffe/siteui/vlv3/2f5a878d-bbce-451b-836a-398227a34fbf/web/IN-en-20241230-TRIFECTA-perspective_5ab944a5-1a71-4f6d-b341-8699d0491edd_small.jpg"
            alt="background image"
          />
        </div>
        <form className="bg-black absolute p-12 my-48 mx-auto left-0 right-0 w-3/12 opacity-85 rounded-lg">
          <h1 className="text-white m-2 text-3xl">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignIn && <input
            className="p-2 m-2 w-full bg-gray-800 text-white"
            type="text"
            name="Name"
            placeholder="Enter Name"
          />}
          <input
            className="p-2 m-2 w-full bg-gray-800 text-white"
            type="email"
            name="email"
            placeholder="Enter Email"
          />
          <input
            className="p-2 m-2 w-full bg-gray-800 text-white"
            type="password"
            name="password"
            placeholder="Enter Password"
          />
          <button className="p-2 m-2 text-white bg-red-800 w-full rounded-lg">
            Sign in
          </button>
          <p className="text-white p-2 cursor-pointer" onClick={toggleHandler}>
            {isSignIn
              ? "New to Netflix? let's Signup"
              : "Already User? Sign in here"}
          </p>
        </form>
      </div>
    );
}

export default Login