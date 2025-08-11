import { GiChefToque } from "react-icons/gi";

export default function ReservationForm() {
  return (
    <div className="min-h-210  flex items-center justify-center px-4 mt-6">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-lg p-8 border-orange-200 border-1">
                <div className="flex  items-center justify-center">
                        <h2 className="text-2xl font-bold text-gray-400 text-center mb-6">     
                                <GiChefToque  className="text-orange-600"/>Order a meal
               
                    </h2>
                    
                </div>
                    

        <form className="space-y-4">
          
          <div>
            <label className="block text-gray-600 mb-1">Full Name</label>
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
            />
          </div>

         
          <div>
            <label className="block text-gray-600 mb-1">Phone Number</label>
            <input
              type="tel"
              placeholder="+243"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
            />
          </div>

          {/* Date */}
          <div>
            <label className="block text-gray-600 mb-1">Date</label>
            <input
              type="date"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none  focus:ring-orange-600"
            />
          </div>

          {/* Heure */}
          <div>
            <label className="block text-gray-600 mb-1">Time</label>
            <input
              type="time"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-1">Choose a meal</label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600">
              <option value="select">Select</option>  
              <option>Pizza</option>
              <option>Burger</option>
              <option>Fried Chicken</option>
              <option>Sushi</option>
              <option>Pasta</option>
            </select>
          </div>

          
          <div>
            <label className="block text-gray-600 mb-1">Message</label>
            <textarea
              rows={3}
              placeholder="Any special request?"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
            ></textarea>
          </div>

          {/* Bouton */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-white-500 hover:bg-orange-600 hover:text-white border-1 border-bg-orange-300 text-orange-600 font-bold py-2 px-6 rounded-lg transition duration-300"
            >
              Confirm Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
