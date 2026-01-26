import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import RoleSelect from "./pages/RoleSelect";
import PatientLogin from "./pages/PatientLogin";
import DoctorLogin from "./pages/DoctorLogin";
import PatientDashboard from "./pages/PatientDashboard";
import DoctorDashboard from "./pages/DoctorDashboard";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<RoleSelect />} />
        <Route path="/login/patient" element={<PatientLogin />} />
        <Route path="/login/doctor" element={<DoctorLogin />} />
        <Route path="/patient" element={<PatientDashboard />} />
        <Route path="/doctor" element={<DoctorDashboard />} />
        <Route
  path="/patient"
  element={
    <ProtectedRoute role="patient">
      <PatientDashboard />
    </ProtectedRoute>
  }
/>

<Route
  path="/doctor"
  element={
    <ProtectedRoute role="doctor">
      <DoctorDashboard />
    </ProtectedRoute>
  }
/>

      </Routes>
    </>
  );
}
