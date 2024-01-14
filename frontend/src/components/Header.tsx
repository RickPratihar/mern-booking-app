import { Link } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";
import SignOutButton from "./SignOutButton";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Header = () => {
  const { isLoggedIn } = useAppContext();
  const [nav, setNav] = useState(false);
  return (
    <div className="bg-blue-800 py-6 ">
      <div className="container mx-auto flex justify-between ">
        <span className="sm:text-xl md:text-3xl  text-white font-bold tracking-tight">
          <Link to="/">Holiday-Booking.com</Link>
        </span>
        <span className=" space-x-2 hidden md:flex ">
          {isLoggedIn ? (
            <>
              <Link className=" flex items-center text-white px-3  font-bold hover:bg-blue-600 rounded" to="/my-bookings">My Bookings</Link>
              <Link className="flex items-center text-white px-3  font-bold hover:bg-blue-600 rounded " to="/my-hotels">My Hotels</Link>
              <SignOutButton/>
            </>
          ) : (
            <Link
              to="/sign-in"
              className="text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 me-2 mb-2"
            >
              Login
            </Link>
          )}
        </span>
      </div>

            {/* for mobile device  */}
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-white md:hidden absolute top-4 right-5 "
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav &&(
        <div className="container mx-auto flex justify-between md:hidden ">
        
        <span className="flex flex-col absolute  pt-10 mr-10 mt-2 gap-5 w-full h-screen bg-gradient-to-b from-blue-900 to-gray-800 text-white">
          {isLoggedIn ? (
            <>
              <Link className=" flex items-center justify-center text-xl text-white px-3  font-bold hover:bg-blue-600 rounded" to="/my-bookings">My Bookings</Link>
              <Link className="flex items-center justify-center text-xl text-white px-3  font-bold hover:bg-blue-600 rounded " to="/my-hotels">My Hotels</Link>
              <SignOutButton/>
            </>
          ) : (
            <Link 
              to="/sign-in"
              className=" flex items-center justify-center w-32 h-10 ml-36 mt-20 font-bold hover:bg-transparent hover:text-white bg-white border text-black "
            >
              Sign in
            </Link>
          )}
        </span> 
      </div>
      )}
    </div>
  );
};

export default Header;
