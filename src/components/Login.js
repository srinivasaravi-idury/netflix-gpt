import { useRef, useState } from "react";
import { validation } from "../utils/validation";
import Header from "./Header";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {auth} from "../utils/firebase"
import { useNavigate } from "react-router-dom";


const Login = ()=>{
  const [isSignInForm,setIsSignInForm] =useState(true)
  const [errorMsg, setErrorMsg] = useState(null);
  const fullName = useRef();
  const email = useRef();
  const password = useRef();
  const navigate = useNavigate();
  
  const handleForm = ()=>{
    const message =validation(email.current.value, password.current.value);
    setErrorMsg(message);
    if(message !== null) return;
    // signup/sign in user
    if(!isSignInForm){
      // signup logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          navigate('/browse')
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + "-" +errorMessage)
        });
    }
    else{
      // sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user)
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + "-" +errorMessage)
        });
    }
  }

  const toggleHandler = ()=>{
    setIsSignInForm(!isSignInForm)
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
        <form
          onSubmit={(e) => e.preventDefault()}
          className="bg-black absolute p-12 my-48 mx-auto left-0 right-0 w-3/12 opacity-85 rounded-lg"
        >
          <h1 className="text-white m-2 text-3xl">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              className="p-2 m-2 w-full bg-gray-800 text-white"
              type="text"
              name="Name"
              placeholder="Enter Name"
              ref={fullName}
            />
          )}
          <input
            className="p-2 m-2 w-full bg-gray-800 text-white"
            type="email"
            name="email"
            placeholder="Enter Email"
            ref={email}
          />
          <input
            className="p-2 m-2 w-full bg-gray-800 text-white"
            type="password"
            name="password"
            placeholder="Enter Password"
            ref={password}
          />
          <p className="text-bold text-white">{errorMsg}</p>
          <button
            className="p-2 m-2 text-white bg-red-800 w-full rounded-lg"
            onClick={handleForm}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="text-white p-2 cursor-pointer" onClick={toggleHandler}>
            {isSignInForm
              ? "New to Netflix? let's Signup"
              : "Already User? Sign in here"}
          </p>
        </form>
      </div>
    );
}

export default Login