
import { IoMdHeartEmpty } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Steak() {
  
  
    return (
      
      <div className="p-6 text-xl font-semibold bg-white   w-[1320px] h-[200px]">
          <div className="bg-orange-600 h-9 w-50 rounded-lg  ml-137 hover:bg-white group cursor-pointer">
                <p 
                  className="mt-2 ml-7   text-white  hover:text-orange-600 group ">
                     Steak choice list
              </p>  
          </div>
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
                      
                          <img src="https://i.pinimg.com/1200x/37/bc/5b/37bc5b815ac27d769c6d387a4f6df43c.jpg" 
                              alt=""  
                              className="h-50 w-80  object-cover  rounded-t-lg"
                          />
  
                              <div className="flex items-center gap-2 w-23 px-4 py-2"> 
                                  <IoMdHeartEmpty  className="text-orange-600 group-hover:text-white transition" /> 
                                  <IoMdHeartEmpty className="text-orange-600 group-hover:text-white transition" />
                                  <IoMdHeartEmpty className="text-orange-600 group-hover:text-white transition" />
                              </div>
                              
                          <p className="text-gray-800 ml-4  text-lg group-hover:text-white transition">Ribeye</p> 
                          <p className="text-orange-600 ml-4 text-lg group-hover:text-white transition">$5.5</p>
                           
                      </div>
                          <div className="h-78 w-80  rounded-lg ml-15 shadow-lg  hover:bg-orange-600 bg-white hover:bg-orange-600 group transition duration-300 ">
                              <img src="https://i.pinimg.com/736x/83/cc/6f/83cc6f3e2d9d8130d2a5b98fe91f1ffb.jpg" 
                                   alt="" 
                                  className="h-50 w-80 rounded-t-lg object-cover "
                              />
  
                              <div className="flex items-center gap-2 w-23 px-4 py-2"> 
                                  <IoMdHeartEmpty  className="text-orange-600 group-hover:text-white transition" /> 
                                  <IoMdHeartEmpty className="text-orange-600 group-hover:text-white transition" />
                                  <IoMdHeartEmpty className="text-orange-600 group-hover:text-white transition" />
                              </div>
                              <p className="text-gray-800 ml-4 text-lg group-hover:text-white transition font-pacifico">Tomahawk</p>
                              <p className="text-orange-600 ml-4  text-lg group-hover:text-white transition">$12.5</p>
                          </div>
                  
                          <div className="h-78 w-80  rounded-lg   shadow-lg  hover:bg-orange-600 bg-white hover:bg-orange-600 group transition duration-300 ">
                              <img src="https://i.pinimg.com/736x/86/a0/de/86a0de14944676a2f922576fcdef83b7.jpg" 
                                       alt="" 
                                      className="h-50 w-80 rounded-t-lg object-cover"
                              />
                              <div className="flex items-center gap-2 w-23 px-4 py-2"> 
                                  <IoMdHeartEmpty  className="text-orange-600 group-hover:text-white transition" /> 
                                  <IoMdHeartEmpty className="text-orange-600 group-hover:text-white transition" />
                                  <IoMdHeartEmpty className="text-orange-600 group-hover:text-white transition" />
                              </div>
                              <p className="text-gray-800 ml-4 text-lg group-hover:text-white transition">Sirloin Steak</p>
                              <p className="text-orange-600 ml-4  text-lg group-hover:text-white transition">$12.5</p>
                          </div>
  
          </div>
  
          <div className="grid grid-cols-3 gap-2 mt-8 ">
                      <div className="h-78 w-80  rounded-lg ml-30 shadow-lg  hover:bg-orange-600 bg-white hover:bg-orange-600 group transition duration-300 ">
  
                          <img src="https://i.pinimg.com/1200x/ef/ff/33/efff33fadebfe5b9d01321fb8cb6f4e7.jpg"     
                              alt=""  
                              className="h-50 w-80  object-cover  rounded-t-lg"
                          />
                              <div className="flex items-center gap-2 w-23 px-4 py-2"> 
                                  <IoMdHeartEmpty  className="text-orange-600 group-hover:text-white transition" /> 
                                  <IoMdHeartEmpty className="text-orange-600 group-hover:text-white transition" />
                                  <IoMdHeartEmpty className="text-orange-600 group-hover:text-white transition" />
                              </div>
                          <p className="text-gray-800 ml-4 text-lg group-hover:text-white transition">Tenderloin</p>
                          <p className="text-orange-600 ml-4 text-lg group-hover:text-white transition">$8.5</p>
                      </div>
                          <div className="h-78 w-80  rounded-lg ml-15 shadow-lg  hover:bg-orange-600 bg-white hover:bg-orange-600 group transition duration-300 ">
                              <img src="https://i.pinimg.com/1200x/fb/99/28/fb9928e20eaa60400bcaf355e3d3c526.jpg" 
                                   alt="" 
                                  className="h-50 w-80 rounded-t-lg object-cover "
                              />
  
                              <div className="flex items-center gap-2 w-23 px-4 py-2"> 
                                  <IoMdHeartEmpty  className="text-orange-600 group-hover:text-white transition" /> 
                                  <IoMdHeartEmpty className="text-orange-600 group-hover:text-white transition" />
                                  <IoMdHeartEmpty className="text-orange-600 group-hover:text-white transition" />
                              </div>
                              <p className="text-gray-800 ml-4 text-lg group-hover:text-white transition">Flank Steak</p>
                              <p className="text-orange-600 ml-4  text-lg group-hover:text-white transition">$18.5</p>
                          </div>
                  
                          <div className="h-78 w-80  rounded-lg   shadow-lg  hover:bg-orange-600 bg-white hover:bg-orange-600 group transition duration-300 ">
                              <img src="https://i.pinimg.com/1200x/31/59/48/315948b753444733290b90320f549697.jpg" 
                                       alt="" 
                                      className="h-50 w-80 rounded-t-lg object-cover"
                              />
                              <div className="flex items-center gap-2 w-23 px-4 py-2"> 
                                  <IoMdHeartEmpty  className="text-orange-600 group-hover:text-white transition" /> 
                                  <IoMdHeartEmpty className="text-orange-600 group-hover:text-white transition" />
                                  <IoMdHeartEmpty className="text-orange-600 group-hover:text-white transition" />
                              </div>
                              <p className="text-gray-800 ml-4 text-lg group-hover:text-white transition">Hanger Steak</p>
                              <p className="text-orange-600 ml-4  text-lg group-hover:text-white transition">$8.5</p>
                          </div>
  
  
  
                          
                          
  
          </div>
  
          
          
      </div>
              
    );
  }
  
  