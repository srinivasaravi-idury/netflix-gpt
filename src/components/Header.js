import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { auth } from "../utils/firebase";

const Header = () => {
  const navigate =useNavigate();
  const user = useSelector(store=>store.user);
const handleSignout =()=>{
  signOut(auth)
    .then(() => {
      navigate('/');
    })
    .catch((error) => {
      navigate('/error')
    });
}
  return (
    <div className="bg-gradient-to-b from-black absolute z-20 w-full flex justify-between">
      <img
        className="w-44"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
      />
      {user&&
      <div className="flex p-2 m-2">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
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
