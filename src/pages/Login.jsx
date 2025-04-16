import React, { useState, useContext } from 'react';
import { assets } from '../assets/assets';
import { AdminContext } from '../context/AdminContext';
import { DoctorContext } from '../context/DoctorContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {
  const [state, setState] = useState('Admin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setAToken, backendUrl } = useContext(AdminContext);
  const { setDToken } = useContext(DoctorContext);

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      if (state === 'Admin') {
        const { data } = await axios.post(backendUrl + '/api/admin/login', { email, password });
        if (data.success) {
          localStorage.setItem('aToken', data.token);
          setAToken(data.token);
        } else {
          toast.error(data.message);
        }
      } else {
        const { data } = await axios.post(backendUrl + '/api/doctor/login', { email, password });
        if (data.success) {
          localStorage.setItem('dToken', data.token);
          setDToken(data.token);
        } else {
          toast.error(data.message);
        }
      }
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form
        onSubmit={onSubmitHandler}
        className="w-full max-w-md bg-white shadow-lg border border-gray-200 rounded-xl p-6 space-y-5"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">
          <span className="text-blue-600">{state}</span> Login
        </h2>

        <div>
          <label className="block text-gray-700 mb-1">Email</label>
          <input
            type="email"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Password</label>
          <input
            type="password"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition"
        >
          Login
        </button>

        <p className="text-center text-sm text-gray-600">
          {state === 'Admin' ? (
            <>
              Doctor Login?
              <span
                className="text-blue-600 ml-2 cursor-pointer hover:underline"
                onClick={() => setState('Doctor')}
              >
                Click here
              </span>
            </>
          ) : (
            <>
              Admin Login?
              <span
                className="text-blue-600 ml-2 cursor-pointer hover:underline"
                onClick={() => setState('Admin')}
              >
                Click here
              </span>
            </>
          )}
        </p>
      </form>
    </div>
  );
};

export default Login;
