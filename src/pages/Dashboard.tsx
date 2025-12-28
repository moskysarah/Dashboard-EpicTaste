import { FaPizzaSlice } from "react-icons/fa";
import { GiTacos } from "react-icons/gi";
import { GiHamburger } from "react-icons/gi";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import Header from "../components/Header";

export default function Dashboard() {
    

  return (
    <div className="p-4 md:p-6 pt-20">
      <Header title="Dashboard" />
      <div className="mt-6">
        <img
          src="https://i.pinimg.com/1200x/e6/1c/ef/e61cef37dffe3af9ce48d9e119176203.jpg"
          alt="Dashboard"
          className="h-32 w-full rounded-xl object-cover"
        />
        <p className="mt-2 text-lg md:text-xl text-orange-600 text-center md:text-left md:ml-32">
          Best meal of the day
        </p>
        <p className="text-gray-600 text-base md:text-lg text-center md:text-left md:ml-32 mt-4 md:mt-10">
          Discover our delicious food options and enjoy a delightful dining experience
        </p>
        <div className="grid grid-cols-3 gap-4 mt-8 justify-items-center md:justify-items-start md:ml-32">
          <div className="w-16 h-16 md:w-20 md:h-10 bg-white rounded-lg border border-orange-600 flex items-center justify-center hover:scale-110 transition duration-300">
            <GiTacos className="text-orange-600 text-xl md:text-base" />
          </div>
          <div className="w-16 h-16 md:w-20 md:h-10 bg-white rounded-lg border border-orange-600 flex items-center justify-center hover:scale-110 transition duration-300">
            <FaPizzaSlice className="text-orange-600 text-xl md:text-base" />
          </div>
          <div className="w-16 h-16 md:w-20 md:h-10 bg-white rounded-lg border border-orange-600 flex items-center justify-center hover:scale-110 transition duration-300">
            <GiHamburger className="text-orange-600 text-xl md:text-base" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          <div className="bg-white rounded-lg shadow-lg hover:bg-orange-600 group transition duration-300 overflow-hidden">
            <img src="https://i.pinimg.com/736x/7c/4a/95/7c4a95db446afe14125f0b770f5c50a7.jpg"
              alt="Beef Tacos"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <FaRegStar className="text-orange-600 group-hover:text-white transition" />
                <FaRegStar className="text-orange-600 group-hover:text-white transition" />
                <FaRegStar className="text-orange-600 group-hover:text-white transition" />
              </div>
              <p className="text-gray-800 text-lg group-hover:text-white transition font-semibold">Beef Tacos</p>
              <p className="text-orange-600 text-lg group-hover:text-white transition font-bold">$15.5</p>
            </div>
          </div>

          <Link to="/pizza">
            <div className="bg-white rounded-lg shadow-lg hover:bg-orange-600 group transition duration-300 overflow-hidden">
              <img src="https://i.pinimg.com/736x/78/5e/d8/785ed8d715410f4d035f821a63f7fbf9.jpg"
                alt="Pizza Margherita"
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <FaRegStar className="text-orange-600 group-hover:text-white transition" />
                  <FaRegStar className="text-orange-600 group-hover:text-white transition" />
                  <FaRegStar className="text-orange-600 group-hover:text-white transition" />
                </div>
                <p className="text-gray-800 text-lg group-hover:text-white transition font-semibold font-pacifico">Pizza Margherita</p>
                <p className="text-orange-600 text-lg group-hover:text-white transition font-bold">$25.5</p>
              </div>
            </div>
          </Link>

          <div className="bg-white rounded-lg shadow-lg hover:bg-orange-600 group transition duration-300 overflow-hidden">
            <img src="https://i.pinimg.com/736x/5a/84/06/5a8406f7b4233d64ba88c34a105d9d8b.jpg"
              alt="Cheese Burger"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <FaRegStar className="text-orange-600 group-hover:text-white transition" />
                <FaRegStar className="text-orange-600 group-hover:text-white transition" />
                <FaRegStar className="text-orange-600 group-hover:text-white transition" />
              </div>
              <p className="text-gray-800 text-lg group-hover:text-white transition font-semibold">Cheese Burger</p>
              <p className="text-orange-600 text-lg group-hover:text-white transition font-bold">$12.5</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          <div className="bg-white rounded-lg shadow-lg hover:bg-orange-600 group transition duration-300 overflow-hidden">
            <img src="https://i.pinimg.com/736x/c4/c4/db/c4c4dbb9d0f9bab138fa48b96661c90f.jpg"
              alt="Hot Dog"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <FaRegStar className="text-orange-600 group-hover:text-white transition" />
                <FaRegStar className="text-orange-600 group-hover:text-white transition" />
                <FaRegStar className="text-orange-600 group-hover:text-white transition" />
              </div>
              <p className="text-gray-800 text-lg group-hover:text-white transition font-semibold">Hot Dog</p>
              <p className="text-orange-600 text-lg group-hover:text-white transition font-bold">$8.5</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg hover:bg-orange-600 group transition duration-300 overflow-hidden">
            <img src="https://i.pinimg.com/736x/61/d0/44/61d044e9d1c298e56382977444ae6dd9.jpg"
              alt="Mac and Cheese"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <FaRegStar className="text-orange-600 group-hover:text-white transition" />
                <FaRegStar className="text-orange-600 group-hover:text-white transition" />
                <FaRegStar className="text-orange-600 group-hover:text-white transition" />
              </div>
              <p className="text-gray-800 text-lg group-hover:text-white transition font-semibold">Mac and Cheese</p>
              <p className="text-orange-600 text-lg group-hover:text-white transition font-bold">$18.5</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg hover:bg-orange-600 group transition duration-300 overflow-hidden">
            <img src="https://i.pinimg.com/736x/f2/d0/26/f2d02692144394fa8849bf3fb47f2423.jpg"
              alt="Garlic Bread Sloppy"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <FaRegStar className="text-orange-600 group-hover:text-white transition" />
                <FaRegStar className="text-orange-600 group-hover:text-white transition" />
                <FaRegStar className="text-orange-600 group-hover:text-white transition" />
              </div>
              <p className="text-gray-800 text-lg group-hover:text-white transition font-semibold">Garlic Bread Sloppy</p>
              <p className="text-orange-600 text-lg group-hover:text-white transition font-bold">$10.5</p>
            </div>
          </div>
        </div>
      </div>
    </div>
            
  );
}

