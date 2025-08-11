
import { IoMdHeartEmpty } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Tacos() {
  
  
    return (
      
      <div className="p-6 text-xl font-semibold bg-white   w-[1320px] h-[200px]">
          <div className="bg-orange-600 h-9 w-50 rounded-lg  ml-137 hover:bg-white group cursor-pointer">
                <p 
                  className="mt-2 ml-6   text-white  hover:text-orange-600 group ">
                     Tacos choice list
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
                     <Link to="/">
                     
                                <div className="h-78 w-80  rounded-lg ml-30 shadow-lg  hover:bg-orange-600 bg-white hover:bg-orange-600 group transition duration-300 ">
                      
                                    <img src="https://i.pinimg.com/1200x/b1/9f/09/b19f0925ace4a598cb95745d5902c3f5.jpg" 
                                        alt=""  
                                        className="h-50 w-80  object-cover  rounded-t-lg"
                                    />
  
                              <div className="flex items-center gap-2 w-23 px-4 py-2"> 
                                  <IoMdHeartEmpty  className="text-orange-600 group-hover:text-white transition" /> 
                                  <IoMdHeartEmpty className="text-orange-600 group-hover:text-white transition" />
                                  <IoMdHeartEmpty className="text-orange-600 group-hover:text-white transition" />
                              </div>
                              
                                <p className="text-gray-800 ml-4  text-lg group-hover:text-white transition">Tacos al Pastor</p> 
                                <p className="text-orange-600 ml-4 text-lg group-hover:text-white transition">$5.5</p>
                           
                            </div>

                     
                     </Link>


                          <div className="h-78 w-80  rounded-lg ml-15 shadow-lg  hover:bg-orange-600 bg-white hover:bg-orange-600 group transition duration-300 ">
                              <img src="https://i.pinimg.com/1200x/58/91/50/58915091a8cd201356fbf95d8247f4ae.jpg" 
                                   alt="" 
                                  className="h-50 w-80 rounded-t-lg object-cover "
                              />
  
                              <div className="flex items-center gap-2 w-23 px-4 py-2"> 
                                  <IoMdHeartEmpty  className="text-orange-600 group-hover:text-white transition" /> 
                                  <IoMdHeartEmpty className="text-orange-600 group-hover:text-white transition" />
                                  <IoMdHeartEmpty className="text-orange-600 group-hover:text-white transition" />
                              </div>
                              <p className="text-gray-800 ml-4 text-lg group-hover:text-white transition font-pacifico">Tacos Carnitas</p>
                              <p className="text-orange-600 ml-4  text-lg group-hover:text-white transition">$12.5</p>
                          </div>
                  
                          <div className="h-78 w-80  rounded-lg   shadow-lg  hover:bg-orange-600 bg-white hover:bg-orange-600 group transition duration-300 ">
                              <img src="https://i.pinimg.com/1200x/a4/17/d7/a417d70f3e7bca1602006e74d4577cec.jpg" 
                                       alt="" 
                                      className="h-50 w-80 rounded-t-lg object-cover"
                              />
                              <div className="flex items-center gap-2 w-23 px-4 py-2"> 
                                  <IoMdHeartEmpty  className="text-orange-600 group-hover:text-white transition" /> 
                                  <IoMdHeartEmpty className="text-orange-600 group-hover:text-white transition" />
                                  <IoMdHeartEmpty className="text-orange-600 group-hover:text-white transition" />
                              </div>
                              <p className="text-gray-800 ml-4 text-lg group-hover:text-white transition">Tacos Barbacoa</p>
                              <p className="text-orange-600 ml-4  text-lg group-hover:text-white transition">$12.5</p>
                          </div>
  
          </div>
  
          <div className="grid grid-cols-3 gap-2 mt-8 ">
                      <div className="h-78 w-80  rounded-lg ml-30 shadow-lg  hover:bg-orange-600 bg-white hover:bg-orange-600 group transition duration-300 ">
  
                          <img src="https://i.pinimg.com/1200x/d0/c2/a1/d0c2a1fae83886bef3f0b58cfed6c40e.jpg"     
                              alt=""  
                              className="h-50 w-80  object-cover  rounded-t-lg"
                          />
                              <div className="flex items-center gap-2 w-23 px-4 py-2"> 
                                  <IoMdHeartEmpty  className="text-orange-600 group-hover:text-white transition" /> 
                                  <IoMdHeartEmpty className="text-orange-600 group-hover:text-white transition" />
                                  <IoMdHeartEmpty className="text-orange-600 group-hover:text-white transition" />
                              </div>
                          <p className="text-gray-800 ml-4 text-lg group-hover:text-white transition">Tacos Pollo</p>
                          <p className="text-orange-600 ml-4 text-lg group-hover:text-white transition">$8.5</p>
                      </div>
                          <div className="h-78 w-80  rounded-lg ml-15 shadow-lg  hover:bg-orange-600 bg-white hover:bg-orange-600 group transition duration-300 ">
                              <img src="https://i.pinimg.com/736x/b2/b6/86/b2b68603bed4ad9211df3679a7f83c72.jpg" 
                                   alt="" 
                                  className="h-50 w-80 rounded-t-lg object-cover "
                              />
  
                              <div className="flex items-center gap-2 w-23 px-4 py-2"> 
                                  <IoMdHeartEmpty  className="text-orange-600 group-hover:text-white transition" /> 
                                  <IoMdHeartEmpty className="text-orange-600 group-hover:text-white transition" />
                                  <IoMdHeartEmpty className="text-orange-600 group-hover:text-white transition" />
                              </div>
                              <p className="text-gray-800 ml-4 text-lg group-hover:text-white transition">Tacos Pescado</p>
                              <p className="text-orange-600 ml-4  text-lg group-hover:text-white transition">$18.5</p>
                          </div>
                  
                          <div className="h-78 w-80  rounded-lg   shadow-lg  hover:bg-orange-600 bg-white hover:bg-orange-600 group transition duration-300 ">
                              <img src="https://i.pinimg.com/736x/11/70/ac/1170ac83bfe1100d3ae067f9def90b12.jpg" 
                                       alt="" 
                                      className="h-50 w-80 rounded-t-lg object-cover"
                              />
                              <div className="flex items-center gap-2 w-23 px-4 py-2"> 
                                  <IoMdHeartEmpty  className="text-orange-600 group-hover:text-white transition" /> 
                                  <IoMdHeartEmpty className="text-orange-600 group-hover:text-white transition" />
                                  <IoMdHeartEmpty className="text-orange-600 group-hover:text-white transition" />
                              </div>
                              <p className="text-gray-800 ml-4 text-lg group-hover:text-white transition">Tacos Veganos</p>
                              <p className="text-orange-600 ml-4  text-lg group-hover:text-white transition">$2.5</p>
                          </div>
  
  
  
                          
                          
  
          </div>
  
          
          
      </div>
              
    );
  }
  
  