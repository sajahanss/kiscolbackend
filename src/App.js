
import Home from "./components/home";

import 'bootstrap/dist/css/bootstrap.min.css';
import RegisterPage from "./components/pages/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./components/pages/Login";

import Reservation from "./components/Reservation";
import Booking from "./components/pages/Booking";
import "react-datepicker/dist/react-datepicker.css";

import Facilities from "./components/nav pages/Facilities";
import Rooms from "./components/nav pages/Rooms";
import Dining1 from "./components/nav pages/Dining and Bar";
import Banquets from "./components/nav pages/Banquets";
import Photos from "./components/nav pages/Photos";
import Aboutus from "./components/nav pages/About";
import Enquiry from "./components/nav pages/Enquiry";
import MyAccount from "./components/nav pages/MyAccount";
import Roomadmin from "./components/Admin/Roomadmin";
import BookingAdmin from "./components/Admin/BookingAdmin";
import Admin from "./components/Admin/Admin";

function App() {
  return (
    <div className='App'>
       
      
      <BrowserRouter>
      
          <Routes>
                <Route path="/register" element={<RegisterPage/>} />
                <Route path="/login" element={<LoginPage/>} />
                <Route path="/" element={<Home/>} />
                <Route path="/reservation" element={<Reservation />} />
                <Route path="/profile" element={<MyAccount />} />
                <Route path="/booking" element={<Booking />} />
                <Route path="/Facilities" element={<Facilities />} />
                <Route path="/rooms" element={<Rooms />} />
                <Route path="/dining" element={<Dining1 />} />
                <Route path="/banquets" element={<Banquets />} />
                <Route path="/photos" element={<Photos />} />
                <Route path="/about" element={<Aboutus />} />
                <Route path="/enquiry" element={<Enquiry />} />
                <Route path="/bookingAdmin" element={<BookingAdmin />} />
                <Route path="/Admin" element={<Admin />} />
                <Route path="/roomAdmin" element={<Roomadmin />} />
                
          </Routes>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
