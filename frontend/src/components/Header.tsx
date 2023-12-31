import { Link } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";
import SignOutButton from "./SignOutButton";

const Header = () => {
  const { isLoggedIn } = useAppContext();
  return (
    <div className="bg-blue-800 py-6 ">
      <div className="container mx-auto flex justify-between ">
        <span className="sm:text-xl md:text-3xl text-white font-bold tracking-tight">
          <Link to="/">Holiday-Booking.com</Link>
        </span>
        <span className="flex space-x-2">
          {isLoggedIn ? (
            <>
              <Link className=" flex items-center text-white px-3  font-bold hover:bg-blue-600 rounded" to="/my-bookings">My Bookings</Link>
              <Link className="flex items-center text-white px-3  font-bold hover:bg-blue-600 rounded " to="/my-hotels">My Hotels</Link>
              <SignOutButton/>
            </>
          ) : (
            <Link
              to="/sign-in"
              className="flex items-center px-3 font-bold hover:bg-transparent hover:text-white bg-white border"
            >
              Sign in
            </Link>
          )}
        </span>
      </div>
    </div>
  );
};

export default Header;
