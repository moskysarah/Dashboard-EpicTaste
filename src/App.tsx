import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import Settings from './pages/Settings'
import Favorites from './pages/Favorites'
import Customers from './pages/Customers'
import Order from './pages/Order'
import Messages from './pages/Messages'
import Tacos from "./pages/Tacos";
import Burger from "./pages/Burger";
import Sushi from "./pages/Sushi";
import Pizza from "./pages/Pizza";
import Strawberry from './pages/Strawberry'
import Pasta from './pages/Pasta'
import Steak from './pages/Steak'
import CustomerOrder from './pages/CustomerOrder'


export default function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 bg-white min-h-screen">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/Order" element={<Order />} />
            <Route path="/Customers" element={<Customers />} />
             <Route path="/Favorites" element={<Favorites />} />
             <Route path="/Messages" element={<Messages />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/tacos" element={<Tacos />} />
            <Route path="/burger" element={<Burger />} />
            <Route path="/sushi" element={<Sushi />} />
            <Route path="/pizza" element={<Pizza />} />
            <Route path="/steak" element={<Steak />} />
            <Route path="/pates" element={<Pasta />} />
            <Route path="/strawberry" element={<Strawberry />} />
            <Route path="/customerorder" element={<CustomerOrder />} /> 

          </Routes>
        </div>
      </div>
    </Router>
  )
}
