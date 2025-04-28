import React, { useContext } from 'react';
import Login from './pages/Login';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AdminContext } from './context/AdminContext';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Admin/DashBoard';
import AllAppointments from './pages/Admin/AllAppointments';
import DoctorList from './pages/Admin/DoctorsList';
import AddDoctors from './pages/Admin/AddDoctor';
import { DoctorContext } from './context/DoctorContext';
import DoctorAppointments from './pages/Doctor/DoctorAppointment';
import DoctorDashboards from './pages/Doctor/DoctorDashboard';
import DoctorProfiles from './pages/Doctor/DoctorProfile';

const App = () => {
  const { aToken } = useContext(AdminContext);
  const { dToken } = useContext(DoctorContext);

  return aToken || dToken ? (
    <div className="app-container bg-gray-100 min-h-screen">
      <ToastContainer />
      <Navbar />
      <div className="app flex">
        <Sidebar />
        <div className="content container mx-auto p-4">
          <Routes>
            {/* Admin Routes */}
            <Route path="/" element={<></>} />
            <Route path="/admin-dashboard" element={<Dashboard />} />
            <Route path="/all-appointments" element={<AllAppointments />} />
            <Route path="/add-doctor" element={<AddDoctors />} />
            <Route path="/doctors-list" element={<DoctorList />} />

            {/* Doctor Routes */}
            <Route path="/doctor-dashboard" element={<DoctorDashboards />} />
            <Route path="/doctor-appointments" element={<DoctorAppointments />} />
            <Route path="/doctor-profile" element={<DoctorProfiles />} />
          </Routes>
        </div>
      </div>
    </div>
  ) : (
    <>
      <Login />
      <ToastContainer />
    </>
  );
};

export default App;
