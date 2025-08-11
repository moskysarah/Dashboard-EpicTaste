
import { IoMdHeartEmpty } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Pizza() {
  
  
    return (
      
      <div className="p-6 text-xl font-semibold bg-white   w-[1320px] h-[200px]">
          <div className="bg-orange-600 h-9 w-50 rounded-lg  ml-137 hover:bg-white group cursor-pointer">
                <p 
                  className="mt-2 ml-7   text-white  hover:text-orange-600 group ">
                     Pizza choice list
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

                                <Link to="/customerorder">
                    
                                    <div className="h-78 w-80  rounded-lg ml-30 shadow-lg  hover:bg-orange-600 bg-white hover:bg-orange-600 group transition duration-300 cursor-pointer ">
                      
                                            <img src="https://i.pinimg.com/1200x/d4/bf/d5/d4bfd54c3f5f672af5be24513e12902f.jpg" 
                                                alt=""  
                                                className="h-50 w-80  object-cover  rounded-t-lg"
                                            />
  
                                        <div className="flex items-center gap-2 w-23 px-4 py-2"> 
                                            <IoMdHeartEmpty  className="text-orange-600 group-hover:text-white transition" /> 
                                            <IoMdHeartEmpty className="text-orange-600 group-hover:text-white transition" />
                                            <IoMdHeartEmpty className="text-orange-600 group-hover:text-white transition" />
                                        </div>
                              
                                        <p className="text-gray-800 ml-4  text-lg group-hover:text-white transition">Pizza Margherita</p> 
                                        <p className="text-orange-600 ml-4 text-lg group-hover:text-white transition">$15.5</p>
                           
                                    </div>
                                </Link>

                                    <div className="h-78 w-80  rounded-lg ml-15 shadow-lg  hover:bg-orange-600 bg-white hover:bg-orange-600 group transition duration-300 ">
                                            <img src="https://i.pinimg.com/736x/29/6b/91/296b91c11ae81476d8b800d828534780.jpg" 
                                                alt="" 
                                                className="h-50 w-80 rounded-t-lg object-cover "
                                            />
  
                                        <div className="flex items-center gap-2 w-23 px-4 py-2"> 
                                            <IoMdHeartEmpty  className="text-orange-600 group-hover:text-white transition" /> 
                                            <IoMdHeartEmpty className="text-orange-600 group-hover:text-white transition" />
                                            <IoMdHeartEmpty className="text-orange-600 group-hover:text-white transition" />
                                        </div>
                                            <p className="text-gray-800 ml-4 text-lg group-hover:text-white transition font-pacifico">Pizza Napolitaine</p>
                                            <p className="text-orange-600 ml-4  text-lg group-hover:text-white transition">$20.5</p>
                                    </div>
                  
                          <div className="h-78 w-80  rounded-lg   shadow-lg  hover:bg-orange-600 bg-white hover:bg-orange-600 group transition duration-300 ">
                              <img src="https://i.pinimg.com/736x/0f/a4/bd/0fa4bdbf278e0d30b36a7fa2ddfaca60.jpg" 
                                       alt="" 
                                      className="h-50 w-80 rounded-t-lg object-cover"
                              />
                              <div className="flex items-center gap-2 w-23 px-4 py-2"> 
                                  <IoMdHeartEmpty  className="text-orange-600 group-hover:text-white transition" /> 
                                  <IoMdHeartEmpty className="text-orange-600 group-hover:text-white transition" />
                                  <IoMdHeartEmpty className="text-orange-600 group-hover:text-white transition" />
                              </div>
                              <p className="text-gray-800 ml-4 text-lg group-hover:text-white transition">Pizza Peperoni</p>
                              <p className="text-orange-600 ml-4  text-lg group-hover:text-white transition">$22.5</p>
                          </div>
  
          </div>
  
          <div className="grid grid-cols-3 gap-2 mt-8 ">
                      <div className="h-78 w-80  rounded-lg ml-30 shadow-lg  hover:bg-orange-600 bg-white hover:bg-orange-600 group transition duration-300 ">
  
                          <img src="https://i.pinimg.com/1200x/32/11/36/3211366c0ef30aa2ed101fb63168d2d3.jpg"     
                              alt=""  
                              className="h-50 w-80  object-cover  rounded-t-lg"
                          />
                              <div className="flex items-center gap-2 w-23 px-4 py-2"> 
                                  <IoMdHeartEmpty  className="text-orange-600 group-hover:text-white transition" /> 
                                  <IoMdHeartEmpty className="text-orange-600 group-hover:text-white transition" />
                                  <IoMdHeartEmpty className="text-orange-600 group-hover:text-white transition" />
                              </div>
                          <p className="text-gray-800 ml-4 text-lg group-hover:text-white transition">Pizza Huaweinne</p>
                          <p className="text-orange-600 ml-4 text-lg group-hover:text-white transition">$8.5</p>
                      </div>
                          <div className="h-78 w-80  rounded-lg ml-15 shadow-lg  hover:bg-orange-600 bg-white hover:bg-orange-600 group transition duration-300 ">
                              <img src="https://i.pinimg.com/736x/96/10/5e/96105e3bc37057ef7b54c51a6772449f.jpg" 
                                   alt="" 
                                  className="h-50 w-80 rounded-t-lg object-cover "
                              />
  
                              <div className="flex items-center gap-2 w-23 px-4 py-2"> 
                                  <IoMdHeartEmpty  className="text-orange-600 group-hover:text-white transition" /> 
                                  <IoMdHeartEmpty className="text-orange-600 group-hover:text-white transition" />
                                  <IoMdHeartEmpty className="text-orange-600 group-hover:text-white transition" />
                              </div>
                              <p className="text-gray-800 ml-4 text-lg group-hover:text-white transition">Pizza BBQ Chicken</p>
                              <p className="text-orange-600 ml-4  text-lg group-hover:text-white transition">$18.5</p>
                          </div>
                  
                          <div className="h-78 w-80  rounded-lg   shadow-lg  hover:bg-orange-600 bg-white hover:bg-orange-600 group transition duration-300 ">
                              <img src="https://i.pinimg.com/1200x/9e/66/ff/9e66ff8daf52370c1a91f27ad360345b.jpg" 
                                       alt="" 
                                      className="h-50 w-80 rounded-t-lg object-cover"
                              />
                              <div className="flex items-center gap-2 w-23 px-4 py-2"> 
                                  <IoMdHeartEmpty  className="text-orange-600 group-hover:text-white transition" /> 
                                  <IoMdHeartEmpty className="text-orange-600 group-hover:text-white transition" />
                                  <IoMdHeartEmpty className="text-orange-600 group-hover:text-white transition" />
                              </div>
                              <p className="text-gray-800 ml-4 text-lg group-hover:text-white transition">Pizza Panini</p>
                              <p className="text-orange-600 ml-4  text-lg group-hover:text-white transition">$2.5</p>
                          </div>
  
  
  
                          
                          
  
          </div>
  
          
          
      </div>
              
    );
  }
  
  