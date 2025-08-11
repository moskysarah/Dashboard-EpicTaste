
import { IoMdHeartEmpty } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Pasta() {
  
  
    return (
      
      <div className="p-6 text-xl font-semibold bg-white   w-[1320px] h-[200px]">
          <div className="bg-orange-600 h-9 w-50 rounded-lg  ml-137 hover:bg-white group cursor-pointer">
                <p 
                  className="mt-2 ml-7   text-white  hover:text-orange-600 group ">
                     Pasta choice list
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
                      
                          <img src="https://i.pinimg.com/1200x/f0/7e/0d/f07e0de98edfae25bcae5e0128d8e702.jpg" 
                              alt=""  
                              className="h-50 w-80  object-cover  rounded-t-lg"
                          />
  
                              <div className="flex items-center gap-2 w-23 px-4 py-2"> 
                                  <IoMdHeartEmpty  className="text-orange-600 group-hover:text-white transition" /> 
                                  <IoMdHeartEmpty className="text-orange-600 group-hover:text-white transition" />
                                  <IoMdHeartEmpty className="text-orange-600 group-hover:text-white transition" />
                              </div>
                              
                          <p className="text-gray-800 ml-4  text-lg group-hover:text-white transition">Spaghetti</p> 
                          <p className="text-orange-600 ml-4 text-lg group-hover:text-white transition">$5.5</p>
                           
                      </div>
                          <div className="h-78 w-80  rounded-lg ml-15 shadow-lg  hover:bg-orange-600 bg-white hover:bg-orange-600 group transition duration-300 ">
                              <img src="https://i.pinimg.com/736x/5d/8b/4b/5d8b4bbba56c164db87f3b261b2c1559.jpg" 
                                   alt="" 
                                  className="h-50 w-80 rounded-t-lg object-cover "
                              />
  
                              <div className="flex items-center gap-2 w-23 px-4 py-2"> 
                                  <IoMdHeartEmpty  className="text-orange-600 group-hover:text-white transition" /> 
                                  <IoMdHeartEmpty className="text-orange-600 group-hover:text-white transition" />
                                  <IoMdHeartEmpty className="text-orange-600 group-hover:text-white transition" />
                              </div>
                              <p className="text-gray-800 ml-4 text-lg group-hover:text-white transition font-pacifico">Linguine</p>
                              <p className="text-orange-600 ml-4  text-lg group-hover:text-white transition">$12.5</p>
                          </div>
                  
                          <div className="h-78 w-80  rounded-lg   shadow-lg  hover:bg-orange-600 bg-white hover:bg-orange-600 group transition duration-300 ">
                              <img src="https://i.pinimg.com/1200x/df/6f/76/df6f76a785a000a1cb95387cbfd2d39d.jpg" 
                                       alt="" 
                                      className="h-50 w-80 rounded-t-lg object-cover"
                              />
                              <div className="flex items-center gap-2 w-23 px-4 py-2"> 
                                  <IoMdHeartEmpty  className="text-orange-600 group-hover:text-white transition" /> 
                                  <IoMdHeartEmpty className="text-orange-600 group-hover:text-white transition" />
                                  <IoMdHeartEmpty className="text-orange-600 group-hover:text-white transition" />
                              </div>
                              <p className="text-gray-800 ml-4 text-lg group-hover:text-white transition">Bolognese</p>
                              <p className="text-orange-600 ml-4  text-lg group-hover:text-white transition">$12.5</p>
                          </div>
  
          </div>
  
          <div className="grid grid-cols-3 gap-2 mt-8 ">
                      <div className="h-78 w-80  rounded-lg ml-30 shadow-lg  hover:bg-orange-600 bg-white hover:bg-orange-600 group transition duration-300 ">
  
                          <img src="https://i.pinimg.com/1200x/be/ff/48/beff489eab4ee361377880ad8a8c5262.jpg"     
                              alt=""  
                              className="h-50 w-80  object-cover  rounded-t-lg"
                          />
                              <div className="flex items-center gap-2 w-23 px-4 py-2"> 
                                  <IoMdHeartEmpty  className="text-orange-600 group-hover:text-white transition" /> 
                                  <IoMdHeartEmpty className="text-orange-600 group-hover:text-white transition" />
                                  <IoMdHeartEmpty className="text-orange-600 group-hover:text-white transition" />
                              </div>
                          <p className="text-gray-800 ml-4 text-lg group-hover:text-white transition">Pappardelle</p>
                          <p className="text-orange-600 ml-4 text-lg group-hover:text-white transition">$8.5</p>
                      </div>
                          <div className="h-78 w-80  rounded-lg ml-15 shadow-lg  hover:bg-orange-600 bg-white hover:bg-orange-600 group transition duration-300 ">
                              <img src="https://i.pinimg.com/1200x/ac/76/bf/ac76bfebd082e6a9e63eee7dd431c0d2.jpg" 
                                   alt="" 
                                  className="h-50 w-80 rounded-t-lg object-cover "
                              />
  
                              <div className="flex items-center gap-2 w-23 px-4 py-2"> 
                                  <IoMdHeartEmpty  className="text-orange-600 group-hover:text-white transition" /> 
                                  <IoMdHeartEmpty className="text-orange-600 group-hover:text-white transition" />
                                  <IoMdHeartEmpty className="text-orange-600 group-hover:text-white transition" />
                              </div>
                              <p className="text-gray-800 ml-4 text-lg group-hover:text-white transition">Capellini</p>
                              <p className="text-orange-600 ml-4  text-lg group-hover:text-white transition">$18.5</p>
                          </div>
                  
                          <div className="h-78 w-80  rounded-lg   shadow-lg  hover:bg-orange-600 bg-white hover:bg-orange-600 group transition duration-300 ">
                              <img src="https://i.pinimg.com/736x/bd/7d/7e/bd7d7ec995289ecba2aec1c315460447.jpg" 
                                       alt="" 
                                      className="h-50 w-80 rounded-t-lg object-cover"
                              />
                              <div className="flex items-center gap-2 w-23 px-4 py-2"> 
                                  <IoMdHeartEmpty  className="text-orange-600 group-hover:text-white transition" /> 
                                  <IoMdHeartEmpty className="text-orange-600 group-hover:text-white transition" />
                                  <IoMdHeartEmpty className="text-orange-600 group-hover:text-white transition" />
                              </div>
                              <p className="text-gray-800 ml-4 text-lg group-hover:text-white transition">Bigoli</p>
                              <p className="text-orange-600 ml-4  text-lg group-hover:text-white transition">$2.5</p>
                          </div>
  
  
  
                          
                          
  
          </div>
  
          
          
      </div>
              
    );
  }
  
  