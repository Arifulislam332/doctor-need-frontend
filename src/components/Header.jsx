import { assets } from "@/assets/assets_frontend/assets";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container px-10 sm:px-0 mx-auto mt-5">
      <div className="bg-purpule_blue rounded-lg flex flex-col md:flex-row flex-wrap px-6 md:px-10 lg:px-20">
        {/* -------- LEFT SIDE-------- */}
        <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]">
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight">
            Book Appoinment With Trusted Doctors
          </h1>
          <div className="flex items-center gap-3 md:flex-row text-white text-sm font-light">
            <img className="w-24" src={assets.group_profiles} alt="" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing Fuga nam error
              ex voluptates aperiam consequatur ratione
            </p>
          </div>
          <Link
            className="transition duration-300 ease-in-out hover:scale-105"
            to="/my-appoinment"
          >
            <Button className="rounded-full flex gap-2 items-center bg-white text-black sm:text-xl text-sm font-semibold hover:bg-white">
              Book Appoinment{" "}
              <img className="w-3" src={assets.arrow_icon} alt="" />{" "}
            </Button>
          </Link>
        </div>

        {/* -------- RIGHT SIDE-------- */}
        <div className="md:w-1/2 relative">
          <img
            className="w-full md:absolute bottom-0 h-auto rounded-lg"
            src={assets.header_img}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
