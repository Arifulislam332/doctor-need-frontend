import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/assets_frontend/assets";
import ProfileMenu from "./ProfileMenu";

const Navber = () => {
  return (
    <div className="w-full sticky top-0 flex items-center shadow-md shadow-gray-200 h-24 px-10 sm:px-0 bg-white">
      <div className="container mx-auto flex items-center justify-between bg-inherit">
        {/* LOGO LEFT */}
        <Link className="bg-inherit" to="/">
          <img className="w-36 bg-inherit" src={assets.logo} alt="" />
        </Link>
        <div className="hidden sm:flex items-center gap-3 md:gap-5 text-xl font-medium bg-inherit uppercase">
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "#5f6fff" : "",
            })}
            className="bg-inherit"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "#5f6fff" : "",
            })}
            className="bg-inherit"
            to="/doctors"
          >
            All Doctors
          </NavLink>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "#5f6fff" : "",
            })}
            className="bg-inherit"
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "#5f6fff" : "",
            })}
            className="bg-inherit"
            to="/contact"
          >
            Contact
          </NavLink>
        </div>
        <ProfileMenu />
      </div>
    </div>
  );
};

export default Navber;
