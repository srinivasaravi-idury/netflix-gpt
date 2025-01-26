import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeLanguage } from "../utils/configSlice";
import { AVATAR, LOGO, SUPPORTED_lANGUAGES } from "../utils/constants";
import { auth } from "../utils/firebase";
import { toggleGptSearchView } from "../utils/gptSlice";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate =useNavigate();
  const user = useSelector(store=>store.user);
  const showGptSearch = useSelector(store=>store.gpt.showGptSearch);
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

  const handleGptSearch = () => {
    //Toggle my gpt search
    dispatch(toggleGptSearchView())
  }

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  }
  return (
    <div className="bg-gradient-to-b from-black absolute z-20 w-full flex justify-between">
      <img className="w-44" src={LOGO} />
      {user && (
        <div className="flex p-2 m-2">
          {showGptSearch && (
            <select
              onChange={handleLanguageChange}
              className="p-2 bg-gray-900 text-white m-2"
            >
              {SUPPORTED_lANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className=" text-white bg-red-800 mx-2 py-2 px-2 p-2 rounded-lg"
            onClick={handleGptSearch}
          >
            {showGptSearch ? "Home Page" : "GPT Search"}
          </button>
          <img
            src={AVATAR}
            alt="netflix user"
            className="w-12 h-12 rounded-lg"
          />
          <button className="font-bold text-white px-2" onClick={handleSignout}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
