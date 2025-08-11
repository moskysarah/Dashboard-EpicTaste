import { Link } from "react-router-dom";

import { FaRegStar } from "react-icons/fa";


export default function Orders() {
    

  return (
    
    <div className="p-6 text-xl font-semibold bg-white   shadow w-[1320px] h-[200px]">
            <img 
                src="https://i.pinimg.com/1200x/75/95/d4/7595d43128b37efa858d8589220cad91.jpg" 
                alt="Dashboard"
                className="h-32 w-full rounded-xl object-cover"
            />
            <p 
                className="mt-2  ml-125 text-orange-600 ">
                Order something delicious
            </p>
            
            <div className="flex ml-102 ">

                  <Link to="/tacos">
                      <div className="w-10 bg-orange-200 rounded-lg h-10 mr-4 mt-10  flex items-center justify-center hover:bg-orange-500 hover:text-white transition cursor-pointer">
                        🌮
                      </div>
                  </Link>
                  <Link to="/pizza">
                      <div className="w-10  bg-orange-200 rounded-lg h-10  ml-4  mt-10  flex items-center justify-center hover:bg-orange-500 hover:text-white transition cursor-pointer">
                          🍕 
                      </div>
                  </Link>
                  <Link to="/burger">
                    <div className="w-10  bg-orange-200 rounded-lg h-10  ml-8 mt-10  flex items-center justify-center  hover:bg-orange-500 hover:text-white transition cursor-pointer">
                        🍔
                    </div>
                 </Link>
                 <Link to="/sushi">
                    <div className="w-10 bg-orange-200 rounded-lg h-10  ml-8 mt-10  flex items-center justify-center  hover:bg-orange-500 hover:text-white transition cursor-pointer">
                        🍣 
                    </div>
                 </Link>
                  <Link to="/steak">
                      <div className="w-10 bg-orange-200 rounded-lg h-10  ml-8 mt-10  flex items-center justify-center  hover:bg-orange-500 hover:text-white transition cursor-pointer">
                        🥩 
                      </div>
                </Link>
                  <Link to="/strawberry">
                      <div className="w-10 bg-orange-200 rounded-lg h-10  ml-8 mt-10  flex items-center justify-center  hover:bg-orange-500 hover:text-white transition cursor-pointer ">
                          🍓 
                      </div>
                 </Link>
                <Link to="/pates">
                      <div className="w-10 bg-orange-200 rounded-lg h-10  ml-8 mt-10 flex items-center justify-center  hover:bg-orange-500 hover:text-white transition cursor-pointer">
                          🍝 
                    </div>
                </Link>
                
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
                         
                    </div>
                        <div className="h-78 w-80  rounded-lg ml-15 shadow-lg  hover:bg-orange-600 bg-white hover:bg-orange-600 group transition duration-300 ">
                            <img src="https://i.pinimg.com/736x/78/5e/d8/785ed8d715410f4d035f821a63f7fbf9.jpg" 
                                 alt="" 
                                className="h-50 w-80 rounded-t-lg object-cover "
                            />

                            <div className="flex items-center gap-2 w-23 px-4 py-2"> 
                                <FaRegStar  className="text-orange-600 group-hover:text-white transition" /> 
                                <FaRegStar className="text-orange-600 group-hover:text-white transition" />
                                <FaRegStar className="text-orange-600 group-hover:text-white transition" />

                            </div>
                            <p className="text-gray-800 ml-4 text-lg group-hover:text-white transition font-pacifico">Pizza Margherita</p>
                            <p className="text-orange-600 ml-4  text-lg group-hover:text-white transition">$25.5</p>
                        </div>
                
                        <div className="h-78 w-80  rounded-lg   shadow-lg  hover:bg-orange-600 bg-white hover:bg-orange-600 group transition duration-300 ">
                            <img src="https://i.pinimg.com/736x/5a/84/06/5a8406f7b4233d64ba88c34a105d9d8b.jpg" 
                                     alt="" 
                                    className="h-50 w-80 rounded-t-lg object-cover"
                            />
                            <div className="flex items-center gap-2 w-23 px-4 py-2"> 
                                <FaRegStar  className="text-orange-600 group-hover:text-white transition" /> 
                                <FaRegStar className="text-orange-600 group-hover:text-white transition" />
                                <FaRegStar className="text-orange-600 group-hover:text-white transition" />
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
                                <FaRegStar className="text-orange-600 group-hover:text-white transition" />
                                <FaRegStar className="text-orange-600 group-hover:text-white transition" />

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

