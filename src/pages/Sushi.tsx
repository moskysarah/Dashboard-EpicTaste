
import { IoMdHeartEmpty } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Sushi() {
  
  
    return (
      
      <div className="p-6 text-xl font-semibold bg-white   w-[1320px] h-[200px]">
          <div className="bg-orange-600 h-9 w-50 rounded-lg  ml-137 hover:bg-white group cursor-pointer">
                <p 
                  className="mt-2 ml-7   text-white  hover:text-orange-600 group ">
                     Sushi choice list
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
                      
                          <img src="https://i.pinimg.com/736x/22/f1/75/22f175ba2a20d7074508c7709186e7ff.jpg" 
                              alt=""  
                              className="h-50 w-80  object-cover  rounded-t-lg"
                          />
  
                              <div className="flex items-center gap-2 w-23 px-4 py-2"> 
                                  <IoMdHeartEmpty  className="text-orange-600 group-hover:text-white transition" /> 
                                  <IoMdHeartEmpty className="text-orange-600 group-hover:text-white transition" />
                                  <IoMdHeartEmpty className="text-orange-600 group-hover:text-white transition" />
                              </div>
                              
                          <p className="text-gray-800 ml-4  text-lg group-hover:text-white transition">Nigiri Saumon</p> 
                          <p className="text-orange-600 ml-4 text-lg group-hover:text-white transition">$5.5</p>
                           
                      </div>
                          <div className="h-78 w-80  rounded-lg ml-15 shadow-lg  hover:bg-orange-600 bg-white hover:bg-orange-600 group transition duration-300 ">
                              <img src="https://i.pinimg.com/736x/c7/13/60/c7136023dc56f4474eff4038d8b69860.jpg" 
                                   alt="" 
                                  className="h-50 w-80 rounded-t-lg object-cover "
                              />
  
                              <div className="flex items-center gap-2 w-23 px-4 py-2"> 
                                  <IoMdHeartEmpty  className="text-orange-600 group-hover:text-white transition" /> 
                                  <IoMdHeartEmpty className="text-orange-600 group-hover:text-white transition" />
                                  <IoMdHeartEmpty className="text-orange-600 group-hover:text-white transition" />
                              </div>
                              <p className="text-gray-800 ml-4 text-lg group-hover:text-white transition font-pacifico">Nigiri Thon</p>
                              <p className="text-orange-600 ml-4  text-lg group-hover:text-white transition">$12.5</p>
                          </div>
                  
                          <div className="h-78 w-80  rounded-lg   shadow-lg  hover:bg-orange-600 bg-white hover:bg-orange-600 group transition duration-300 ">
                              <img src="https://i.pinimg.com/736x/04/fa/37/04fa372eb5a999d0e21dc339f299e923.jpg" 
                                       alt="" 
                                      className="h-50 w-80 rounded-t-lg object-cover"
                              />
                              <div className="flex items-center gap-2 w-23 px-4 py-2"> 
                                  <IoMdHeartEmpty  className="text-orange-600 group-hover:text-white transition" /> 
                                  <IoMdHeartEmpty className="text-orange-600 group-hover:text-white transition" />
                                  <IoMdHeartEmpty className="text-orange-600 group-hover:text-white transition" />
                              </div>
                              <p className="text-gray-800 ml-4 text-lg group-hover:text-white transition">Nigiri Crevette</p>
                              <p className="text-orange-600 ml-4  text-lg group-hover:text-white transition">$12.5</p>
                          </div>
  
          </div>
  
          <div className="grid grid-cols-3 gap-2 mt-8 ">
                      <div className="h-78 w-80  rounded-lg ml-30 shadow-lg  hover:bg-orange-600 bg-white hover:bg-orange-600 group transition duration-300 ">
  
                          <img src="https://i.pinimg.com/1200x/e4/75/9e/e4759e390c4486c9bbc31506502e9683.jpg"     
                              alt=""  
                              className="h-50 w-80  object-cover  rounded-t-lg"
                          />
                              <div className="flex items-center gap-2 w-23 px-4 py-2"> 
                                  <IoMdHeartEmpty  className="text-orange-600 group-hover:text-white transition" /> 
                                  <IoMdHeartEmpty className="text-orange-600 group-hover:text-white transition" />
                                  <IoMdHeartEmpty className="text-orange-600 group-hover:text-white transition" />
                              </div>
                          <p className="text-gray-800 ml-4 text-lg group-hover:text-white transition">Nigiri Anguille</p>
                          <p className="text-orange-600 ml-4 text-lg group-hover:text-white transition">$8.5</p>
                      </div>
                          <div className="h-78 w-80  rounded-lg ml-15 shadow-lg  hover:bg-orange-600 bg-white hover:bg-orange-600 group transition duration-300 ">
                              <img src="https://i.pinimg.com/1200x/e7/ac/c3/e7acc3a8db16fa5ec24de84948546226.jpg" 
                                   alt="" 
                                  className="h-50 w-80 rounded-t-lg object-cover "
                              />
  
                              <div className="flex items-center gap-2 w-23 px-4 py-2"> 
                                  <IoMdHeartEmpty  className="text-orange-600 group-hover:text-white transition" /> 
                                  <IoMdHeartEmpty className="text-orange-600 group-hover:text-white transition" />
                                  <IoMdHeartEmpty className="text-orange-600 group-hover:text-white transition" />
                              </div>
                              <p className="text-gray-800 ml-4 text-lg group-hover:text-white transition">Hosomaki</p>
                              <p className="text-orange-600 ml-4  text-lg group-hover:text-white transition">$18.5</p>
                          </div>
                  
                          <div className="h-78 w-80  rounded-lg   shadow-lg  hover:bg-orange-600 bg-white hover:bg-orange-600 group transition duration-300 ">
                              <img src="https://i.pinimg.com/736x/8c/50/33/8c5033515c5fa3c8d486fca983fcc31f.jpg" 
                                       alt="" 
                                      className="h-50 w-80 rounded-t-lg object-cover"
                              />
                              <div className="flex items-center gap-2 w-23 px-4 py-2"> 
                                  <IoMdHeartEmpty  className="text-orange-600 group-hover:text-white transition" /> 
                                  <IoMdHeartEmpty className="text-orange-600 group-hover:text-white transition" />
                                  <IoMdHeartEmpty className="text-orange-600 group-hover:text-white transition" />
                              </div>
                              <p className="text-gray-800 ml-4 text-lg group-hover:text-white transition">Futomaki</p>
                              <p className="text-orange-600 ml-4  text-lg group-hover:text-white transition">$2.5</p>
                          </div>
  
  
  
                          
                          
  
          </div>
  
          
          
      </div>
              
    );
  }
  
  