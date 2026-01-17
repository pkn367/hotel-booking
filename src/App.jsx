import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Hotels from "./pages/Hotels";
import MyBookings from "./pages/MyBookings";
import ProtectedRoute from "./components/ProtectedRoute";
import HotelDetails from "./pages/HotelDetails";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/hotel/:id" element={<HotelDetails />} />
        
        <Route
          path="/hotels"
          element={
            <ProtectedRoute>
              <Hotels />
            </ProtectedRoute>
          }
        />

        <Route
          path="/my-bookings"
          element={
            <ProtectedRoute>
              <MyBookings />
            </ProtectedRoute>
          }
        />

        {/* default route */}
        <Route path="*" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}





