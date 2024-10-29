import { doctors } from "@/assets/assets_frontend/assets";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

const TopDoctors = () => {
  const navigate = useNavigate();
  return (
    <div className="mt-20 px-10 sm:px-0 container mx-auto flex flex-col items-center gap-4">
      <h1 className="text-3xl font-semibold text-gray-700">Top Doctors</h1>
      <p className="text-gray-500 text-sm sm:w-1/3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime Lorem,
        ipsum dolor. Lorem, ipsum.Lorem, ipsum.
      </p>

      <div className=" w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0">
        {doctors.slice(0, 10).map((item, indx) => (
          <div
            onClick={() => navigate(`/appoinment/${item._id}`)}
            key={indx}
            className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 ease-in-out"
          >
            <img className="bg-blue-50" src={item.image} alt="" />
            <div className="p-4">
              <div className="flex items-center gap-2 text-sm text-center text-green-500">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <p>Available</p>
              </div>
              <p className="text-gray-900 text-lg font-medium">{item.name}</p>
              <p className="text-gray-600 text-sm">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>
      <Button
        onClick={() => navigate("/doctors")}
        className="hover:bg-blue-50 border border-gray-200 bg-blue-50 text-gray-600 px-12 py-3 rounded-full mt-10"
      >
        View More
      </Button>
    </div>
  );
};

export default TopDoctors;
