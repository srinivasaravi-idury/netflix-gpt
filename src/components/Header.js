import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AVATAR, LOGO } from "../utils/constants";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate =useNavigate();
  const user = useSelector(store=>store.user);
  const handleSignout =()=>{
    signOut(auth)
      .then(() => {
      })
      .catch((error) => {
        navigate('/error')
      });
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate('/browse')
      } else {
        dispatch(removeUser());
        navigate('/')
      }
    });
    // unsubscribe when component unmounts
  return () => unsubscribe();

  }, []);
  return (
    <div className="bg-gradient-to-b from-black absolute z-20 w-full flex justify-between">
      <img
        className="w-44"
        src={LOGO}
      />
      {user&&
      <div className="flex p-2 m-2">
        <img
          src={AVATAR}
          alt="netflix user"
          className="w-12 h-12"
        />
        <button className="font-bold " onClick={handleSignout}>
          Sign Out
        </button>
      </div>}
    </div>
  );
};

export default Header;
