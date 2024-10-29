import { assets } from "@/assets/assets_frontend/assets";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Avatar, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const ProfileMenu = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);
  return (
    <div className="bg-white">
      {token ? (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage src={assets.profile_pic} />
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="font-medium bg-slate-100 z-[101]">
            <DropdownMenuItem to="/my-profile" className="text-base">
              <Link to="/my-profile">My Profile</Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="text-base">
              <Link to="/my-appoinment">My Appoinment</Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="text-base">
              <button onClick={() => setToken(true)}>Log Out</button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <button
          onClick={() => navigate("/login")}
          className="sm:px-5 px-3.5 py-2.5 bg-purpule_blue text-xl rounded-full text-white font-medium border"
        >
          Create account
        </button>
      )}
    </div>
  );
};

export default ProfileMenu;
