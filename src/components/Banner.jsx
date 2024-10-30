import { assets } from "@/assets/assets_frontend/assets";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

const Banner = () => {
  const nevigate = useNavigate();
  return (
    <div className="mt-20 px-10 sm:px-0">
      <div className="container mx-auto flex bg-purpule_blue rounded-lg gap-5 px-6 sm:px-10 md:px-10 lg:px-12">
        {/* LEFT */}

        <div className="flex-1 py-8 md:py-16 lg:py-24 lg:pl-5">
          <div className="text-xl text-white sm:text-2xl md:text-3xl lg:text-5xl font-semibold flex flex-col gap-2">
            <p className="">Book Appoinment</p>
            <p className="">With 100+ Trusted Doctors</p>
          </div>

          <Button
            onClick={() => {
              nevigate("/login");
              scrollTo(0, 0);
            }}
            className="transition duration-300 ease-in-out hover:scale-105 rounded-full flex gap-2 items-center bg-white text-gray-600 sm:text-xl text-sm font-semibold hover:bg-white mt-5"
          >
            Create account
          </Button>
        </div>

        {/* RIGHT */}
        <div className="hidden md:block md:w-1/2 lg:w-[370px] relative">
          <img
            className="md:absolute w-full bottom-0 right-0 max-w-md"
            src={assets.appointment_img}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
