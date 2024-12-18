import { useState } from "react";
import { BiLogOut } from "react-icons/bi"; // Logout Icon from react-icons
import { Link } from "react-router-dom";

export default function Navbar() {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const closeDropdown = () => {
    setDropdownVisible(false);
  };

  return (
    <>
      <div className="bg-[#021526] flex items-center justify-between mx-auto h-16 px-6 w-full">
        {/* Logo */}
        <div>
          <h1 className="text-4xl font-bold text-white font-pt-serif">
            Job <span className="text-[#F8DE22]">Portal</span>
          </h1>
        </div>

        {/* Navigation Links */}
        <div className="text-white hidden md:flex font-bold text-[25px] items-center gap-10">
          <Link to="/home" className="hover:text-green-500 font-pt-serif font-bold">
            Home
          </Link>
          <Link to="/jobs" className="hover:text-green-500 font-pt-serif font-bold">
            Jobs
          </Link>
          <Link to="/browse" className="hover:text-green-500 font-pt-serif font-bold">
            Browse
          </Link>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center font-semibold">
          <Link to="/login">
            <button className="px-4 py-2 bg-red-500 text-white rounded-lg mr-5">
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">
              Sign up
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
