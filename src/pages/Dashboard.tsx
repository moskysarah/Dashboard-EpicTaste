import { FaPizzaSlice } from "react-icons/fa";
import { GiTacos } from "react-icons/gi";
import { GiHamburger } from "react-icons/gi";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";


export default function Dashboard() {
    

  return (
    
    <div className="p-6 text-xl font-semibold bg-white   shadow w-[1320px] h-[200px]">
            <img 
                src="https://i.pinimg.com/1200x/e6/1c/ef/e61cef37dffe3af9ce48d9e119176203.jpg" 
                alt="Dashboard"
                className="h-32 w-full rounded-xl object-cover"
            />
            <p 
                className="mt-2  ml-125 text-orange-600 ">
                Best meal of the day
            </p>
            <p className="text-gray-600 text-lg ml-80 mt-10">
                Discover our delicious food options and enjoy a delightful dining experience

            </p>
            <div className="grid grid-cols-3 ml-62 ">
                <div className="w-20 bg-white rounded-lg h-10 mr-4 mt-10 border-1 border-orange-600 flex items-center justify-center">
                    <GiTacos className="text-orange-600  transition duration-300" />
                </div>
                <div className="w-20  h-10 bg-white rounded-lg h-10  ml-4  mt-10 border-1 border-orange-600 flex items-center justify-center">
                   <FaPizzaSlice className="text-orange-600" />
                </div>
                <div className="w-20 h-10 bg-white rounded-lg h-10  ml-8 mt-10 border-1 border-orange-600 flex items-center justify-center">
                   <GiHamburger className="text-orange-600" />
                </div>
            </div>
        <div className="grid grid-cols-3 gap-2 mt-8 ">

                    <div className="h-78 w-80  rounded-lg ml-30 shadow-lg  hover:bg-orange-600 bg-white hover:bg-orange-600 group transition duration-300 ">
                    
                        <img src="https://i.pinimg.com/736x/7c/4a/95/7c4a95db446afe14125f0b770f5c50a7.jpg" 
                            alt=""  
                            className="h-50 w-80  object-cover  rounded-t-lg"
                        />

                            <div className="flex items-center gap-2 w-23 px-4 py-2"> 
                                <FaRegStar  className="text-orange-600 group-hover:text-white transition" /> 
                                <FaRegStar className="text-orange-600 group-hover:text-white transition" />
                                <FaRegStar className="text-orange-600 group-hover:text-white transition" />
                            </div>
                            
                        <p className="text-gray-800 ml-4  text-lg group-hover:text-white transition">Beef Tacos</p> 
                        <p className="text-orange-600 ml-4 text-lg group-hover:text-white transition">$15.5</p>
                         
                    </div>      <Link to="/pizza">
                                    <div className="h-78 w-80  rounded-lg ml-15 shadow-lg  hover:bg-orange-600 bg-white hover:bg-orange-600 group transition duration-300 ">
                                        <img src="https://i.pinimg.com/736x/78/5e/d8/785ed8d715410f4d035f821a63f7fbf9.jpg" 
                                            alt="" 
                                            className="h-50 w-80 rounded-t-lg object-cover "
                                        />

                                        <div className="flex items-center gap-2 w-23 px-4 py-2"> 
                                            <FaRegStar  className="text-orange-600 group-hover:text-white transition" /> 
                                            <FaRegStar className="text-orange-600 group-hover:text-white transition" />
                                            <FaRegStar className="text-orange-600 group-hover:text-white transitio" />
                                        </div>
                               
                                        <p className="text-gray-800 ml-4 text-lg group-hover:text-white transition font-pacifico">Pizza Margherita</p>
                                        <p className="text-orange-600 ml-4  text-lg group-hover:text-white transition">$25.5</p>
                                    </div>
                                 </Link>

                
                        <div className="h-78 w-80  rounded-lg   shadow-lg  hover:bg-orange-600 bg-white hover:bg-orange-600 group transition duration-300 ">
                            <img src="https://i.pinimg.com/736x/5a/84/06/5a8406f7b4233d64ba88c34a105d9d8b.jpg" 
                                     alt="" 
                                    className="h-50 w-80 rounded-t-lg object-cover"
                            />
                            <div className="flex items-center gap-2 w-23 px-4 py-2"> 
                                <FaRegStar  className="text-orange-600 group-hover:text-white transition" /> 
                                <FaRegStar className="text-orange-600 group-hover:text-white transitio" />
                                <FaRegStar className="text-orange-600 group-hover:text-white transitio" />
                            </div>
                            <p className="text-gray-800 ml-4 text-lg group-hover:text-white transition">Cheese Burger</p>
                            <p className="text-orange-600 ml-4  text-lg group-hover:text-white transition">$12.5</p>
                        </div>

        </div>

        <div className="grid grid-cols-3 gap-2 mt-8 ">

                    <div className="h-78 w-80  rounded-lg ml-30 shadow-lg  hover:bg-orange-600 bg-white hover:bg-orange-600 group transition duration-300 ">

                        <img src="https://i.pinimg.com/736x/c4/c4/db/c4c4dbb9d0f9bab138fa48b96661c90f.jpg"     
                            alt=""  
                            className="h-50 w-80  object-cover  rounded-t-lg"
                        />
                            <div className="flex items-center gap-2 w-23 px-4 py-2"> 
                                <FaRegStar  className="text-orange-600 group-hover:text-white transition" /> 
                                <FaRegStar className="text-orange-600 group-hover:text-white transitio" />
                                <FaRegStar className="text-orange-600 group-hover:text-white transitio" />

                            </div>
                        <p className="text-gray-800 ml-4 text-lg group-hover:text-white transition">Hot Dog</p>
                        <p className="text-orange-600 ml-4 text-lg group-hover:text-white transition">$8.5</p>
                    </div>
                        <div className="h-78 w-80  rounded-lg ml-15 shadow-lg  hover:bg-orange-600 bg-white hover:bg-orange-600 group transition duration-300 ">
                            <img src="https://i.pinimg.com/736x/61/d0/44/61d044e9d1c298e56382977444ae6dd9.jpg" 
                                 alt="" 
                                className="h-50 w-80 rounded-t-lg object-cover "
                            />

                            <div className="flex items-center gap-2 w-23 px-4 py-2"> 
                                <FaRegStar  className="text-orange-600 group-hover:text-white transition" /> 
                                <FaRegStar className="text-orange-600 group-hover:text-white transition" />
                                <FaRegStar className="text-orange-600 group-hover:text-white transition" />

                            </div>
                            <p className="text-gray-800 ml-4 text-lg group-hover:text-white transition">Mac and Cheese</p>
                            <p className="text-orange-600 ml-4  text-lg group-hover:text-white transition">$18.5</p>
                        </div>
                
                        <div className="h-78 w-80  rounded-lg   shadow-lg  hover:bg-orange-600 bg-white hover:bg-orange-600 group transition duration-300 ">
                            <img src="https://i.pinimg.com/736x/f2/d0/26/f2d02692144394fa8849bf3fb47f2423.jpg" 
                                     alt="" 
                                    className="h-50 w-80 rounded-t-lg object-cover"
                            />
                            <div className="flex items-center gap-2 w-23 px-4 py-2"> 
                                <FaRegStar  className="text-orange-600 group-hover:text-white transition" /> 
                                <FaRegStar className="text-orange-600 group-hover:text-white transition" />
                                <FaRegStar className="text-orange-600 group-hover:text-white transition" />
                            </div>
                            <p className="text-gray-800 ml-4 text-lg group-hover:text-white transition">Garlic Bread Sloppy</p>
                            <p className="text-orange-600 ml-4  text-lg group-hover:text-white transition">$10.5</p>
                        </div>



                        
                        

        </div>

        
        
    </div>
            
  );
}

