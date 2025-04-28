import React, { useEffect, useContext } from 'react';
import { AdminContext } from '../../context/AdminContext';
import { AppContext } from '../../context/AppContext';
import cancelIcon from "../../assets/cancel_icon.svg";

const AllAppointments = () => {
  const { aToken, appointments, getAllAppointments, cancelAppointment } = useContext(AdminContext);
  const { calculateAge, slotDateFormat, currency } = useContext(AppContext);

  useEffect(() => {
    if (aToken) {
      getAllAppointments();
    }
  }, [aToken]);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">All Appointments</h2>
      
      <div className="grid grid-cols-12 font-semibold bg-gray-100 p-2 rounded-md text-center">
        <div className="col-span-1">#</div>
        <div className="col-span-2">Patient</div>
        <div className="col-span-1">Age</div>
        <div className="col-span-2">Date & Time</div>
        <div className="col-span-2">Doctor</div>
        <div className="col-span-2">Fees</div>
        <div className="col-span-2">Actions</div>
      </div>

      <hr className="my-2" />

      {appointments.map((item, index) => (
        <div
          key={index}
          className="grid grid-cols-12 items-center text-center bg-white rounded-md shadow-sm p-2 my-2 hover:bg-gray-50 transition"
        >
          <div className="col-span-1">{index + 1}</div>
          
          <div className="col-span-2 flex items-center gap-2 justify-center">
            <img src={item.userData.image} alt="patient" className="w-10 h-10 rounded-full object-cover" />
            <span>{item.userData.name}</span>
          </div>

          <div className="col-span-1">
            {isNaN(calculateAge(item.userData.dob)) ? "N/A" : calculateAge(item.userData.dob)}
          </div>

          <div className="col-span-2">{slotDateFormat(item.slotDate)}, {item.slotTime}</div>

          <div className="col-span-2 flex items-center gap-2 justify-center">
            <img src={item.docData.image} alt="doctor" className="w-10 h-10 rounded-full bg-blue-500 object-cover" />
            <span>{item.docData.name}</span>
          </div>

          <div className="col-span-2">{currency}{item.amount}</div>

          <div className="col-span-2">
            {item.cancelled ? (
              <span className="text-red-600 font-semibold">Cancelled</span>
            ) : item.isCompleted ? (
              <span className="text-green-600 font-semibold">Completed</span>
            ) : (
              <img
                onClick={() => cancelAppointment(item._id)}
                src={cancelIcon}
                alt="Cancel"
                className="w-6 h-6 mx-auto cursor-pointer hover:scale-110 transition-transform"
              />
            )}
          </div>
        </div>
      ))}

      <hr className="my-4" />
    </div>
  );
};

export default AllAppointments;
