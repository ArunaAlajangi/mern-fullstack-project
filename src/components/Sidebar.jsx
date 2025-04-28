import React, { useContext } from "react";
import { AdminContext } from "../context/AdminContext";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";
import { DoctorContext } from "../context/DoctorContext";

const Sidebar = () => {
  const { aToken } = useContext(AdminContext);
  const { dToken } = useContext(DoctorContext);

  return (
    <div className="min-h-screen bg-white border-r p-4">
      {aToken && (
        <ul className="space-y-3 mt-6">
          <li>
            <NavLink
              to="/admin-dashboard"
              className={({ isActive }) =>
                `flex items-center gap-4 px-5 py-3 rounded-md transition-all ${
                  isActive
                    ? "bg-[#F2F3FF] border-r-4 border-blue-600 text-blue-600 font-semibold"
                    : "text-[#515151] hover:bg-gray-100"
                }`
              }
            >
              <img src={assets.dash_icon} alt="Dashboard" className="w-6" />
              <span>Dashboard</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/all-appointments"
              className={({ isActive }) =>
                `flex items-center gap-4 px-5 py-3 rounded-md transition-all ${
                  isActive
                    ? "bg-[#F2F3FF] border-r-4 border-blue-600 text-blue-600 font-semibold"
                    : "text-[#515151] hover:bg-gray-100"
                }`
              }
            >
              <img src={assets.app_icon} alt="Appointments" className="w-6" />
              <span>Appointments</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/add-doctor"
              className={({ isActive }) =>
                `flex items-center gap-4 px-5 py-3 rounded-md transition-all ${
                  isActive
                    ? "bg-[#F2F3FF] border-r-4 border-blue-600 text-blue-600 font-semibold"
                    : "text-[#515151] hover:bg-gray-100"
                }`
              }
            >
              <img src={assets.add_icon} alt="Add Doctor" className="w-6" />
              <span>Add Doctor</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/doctors-list"
              className={({ isActive }) =>
                `flex items-center gap-4 px-5 py-3 rounded-md transition-all ${
                  isActive
                    ? "bg-[#F2F3FF] border-r-4 border-blue-600 text-blue-600 font-semibold"
                    : "text-[#515151] hover:bg-gray-100"
                }`
              }
            >
              <img
                src={assets.doclist_icon}
                alt="Doctors List"
                className="w-6"
              />
              <span>Doctors List</span>
            </NavLink>
          </li>
        </ul>
      )}
      {dToken && (
        <ul className="space-y-3 mt-6">
          <li>
            <NavLink
              to="/doctor-dashboard"
              className={({ isActive }) =>
                `flex items-center gap-4 px-5 py-3 rounded-md transition-all ${
                  isActive
                    ? "bg-[#F2F3FF] border-r-4 border-blue-600 text-blue-600 font-semibold"
                    : "text-[#515151] hover:bg-gray-100"
                }`
              }
            >
              <img
                src={assets.dash_icon}
                alt="Doctor Dashboard"
                className="w-6"
              />
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/doctor-appointments"
              className={({ isActive }) =>
                `flex items-center gap-4 px-5 py-3 rounded-md transition-all ${
                  isActive
                    ? "bg-[#F2F3FF] border-r-4 border-blue-600 text-blue-600 font-semibold"
                    : "text-[#515151] hover:bg-gray-100"
                }`
              }
            >
              <img
                src={assets.app_icon}
                alt="Doctor Appointments"
                className="w-6"
              />
              <span>Appointments</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/doctor-profile"
              className={({ isActive }) =>
                `flex items-center gap-4 px-5 py-3 rounded-md transition-all ${
                  isActive
                    ? "bg-[#F2F3FF] border-r-4 border-blue-600 text-blue-600 font-semibold"
                    : "text-[#515151] hover:bg-gray-100"
                }`
              }
            >
              <img
                src={assets.doclist_icon}
                alt="Doctor Profile"
                className="w-6"
              />
              <span>Profile</span>
            </NavLink>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Sidebar;
