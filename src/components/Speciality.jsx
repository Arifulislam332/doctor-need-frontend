import { specialityData } from "@/assets/assets_frontend/assets";
import { Link } from "react-router-dom";

const Speciality = () => {
  return (
    <div
      id="speciality"
      className="mt-20 px-10 sm:px-0 container mx-auto items-center flex flex-col justify-items-center text-center gap-4"
    >
      <h1 className="text-3xl font-semibold text-gray-700">
        Find By Speciality
      </h1>
      <p className="text-gray-500 text-sm sm:w-1/3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime Lorem,
        ipsum dolor. Lorem, ipsum.Lorem, ipsum.
      </p>
      <div className="flex sm:justify-center w-full pt-5 gap-3">
        {specialityData.map((item, index) => (
          <Link
            onClick={() => scrollTo(0, 0)}
            className="flex w-16 sm:w-24 flex-col text-xs flex-shrink-0 cursor-pointer hover:translate-y-[-10px] transition duration-500 ease-in-out items-center text-center gap-1"
            key={index}
            to={`/doctors/${item.speciality}`}
          >
            <img src={item.image} alt="" />
            <p>{item.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Speciality;
