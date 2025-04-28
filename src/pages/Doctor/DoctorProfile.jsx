import React, { useContext, useState, useEffect } from 'react';
import { DoctorContext } from '../../context/DoctorContext';
import { AppContext } from '../../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const DoctorProfiles = () => {
    const { dToken, profileData, setProfileData, getProfileData, backendUrl } = useContext(DoctorContext);
    const { currency } = useContext(AppContext);
    const [isEdit, setIsEdit] = useState(false);

    const UpdateProfile = async () => {
        try {
            const updateData = {
                address: profileData.address,
                fees: profileData.fees,
                available: profileData.available
            };

            const { data } = await axios.post(backendUrl + '/api/doctor/update-profile', updateData, { headers: { dToken } });
            if (data.success) {
                toast.success(data.message);
                setIsEdit(false);
                getProfileData();
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error(error.message);
            console.log(error);
        }
    }; 

    useEffect(() => {
        getProfileData();
    }, [dToken]);

    return profileData && (
        <div className="max-w-4xl mx-auto mt-10 px-4">
            <div className="bg-white shadow-xl rounded-xl p-6">
                <div className="flex flex-col md:flex-row items-center gap-6">
                    {/* Doctor Image */}
                    <div className="flex justify-center">
                        <img
                            src={profileData.image}
                            alt={profileData.name}
                            className="w-36 h-36 object-cover rounded-full border-4 border-blue-500"
                        />
                    </div>

                    {/* Doctor Info */}
                    <div className="text-center md:text-left flex-1">
                        <h2 className="text-2xl font-bold">{profileData.name}</h2>
                        <p className="text-gray-600">
                            {profileData.degree} - {profileData.speciality}
                        </p>
                        <p className="bg-blue-100 text-blue-700 inline-block mt-2 px-4 py-1 rounded-md font-medium">
                            {profileData.experience} Years Experience
                        </p>
                    </div>
                </div>

                <hr className="my-6" />

                {/* About Section */}
                <h3 className="text-xl font-semibold mb-2">About</h3>
                <p className="text-gray-700 mb-4">{profileData.about}</p>

                {/* Fee */}
                <p className="text-lg font-semibold mb-2">
                    Appointment Fee:
                    <span className="text-green-600 ml-2">
                        {currency} {isEdit ? (
                            <input
                                type="number"
                                className="ml-2 px-2 py-1 border rounded-md"
                                value={profileData.fees}
                                onChange={(e) => setProfileData(prev => ({ ...prev, fees: e.target.value }))}
                            />
                        ) : profileData.fees}
                    </span>
                </p>

                {/* Address Section */}
                <div className="mb-4">
                    <h4 className="font-semibold">Address:</h4>
                    <p className="text-gray-700">
                        {isEdit ? (
                            <input
                                type="text"
                                className="w-full mt-1 mb-2 px-2 py-1 border rounded-md"
                                value={profileData.address.line1}
                                onChange={(e) => setProfileData(prev => ({
                                    ...prev,
                                    address: { ...prev.address, line1: e.target.value }
                                }))}
                            />
                        ) : profileData.address.line1}
                    </p>
                    <p className="text-gray-700">
                        {isEdit ? (
                            <input
                                type="text"
                                className="w-full mt-1 mb-2 px-2 py-1 border rounded-md"
                                value={profileData.address.line2}
                                onChange={(e) => setProfileData(prev => ({
                                    ...prev,
                                    address: { ...prev.address, line2: e.target.value }
                                }))}
                            />
                        ) : profileData.address.line2}
                    </p>
                </div>

                {/* Availability Checkbox */}
                <div className="flex items-center mb-4">
                    <input
                        type="checkbox"
                        className="mr-2"
                        checked={profileData.available}
                        onChange={() => isEdit && setProfileData(prev => ({ ...prev, available: !prev.available }))}
                    />
                    <span>{profileData.available ? "Available" : "Not Available"}</span>
                    <label className="font-semibold">Available</label>
                </div>

                {/* Edit / Save Button */}
                {
                    isEdit ? (
                        <button
                            onClick={UpdateProfile}
                            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"
                        >
                            Save
                        </button>
                    ) : (
                        <button
                            onClick={() => setIsEdit(true)}
                            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"
                        >
                            Edit
                        </button>
                    )
                }
            </div>
        </div>
    );
};

export default DoctorProfiles;
