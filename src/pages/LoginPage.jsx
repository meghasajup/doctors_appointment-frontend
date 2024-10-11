import React, { useContext, useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import loginAnimation from '../assets/assets_frontend/json/login.json';
import signupAnimation from '../assets/assets_frontend/json/signUp.json';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const { backendUrl, setToken, token } = useContext(AppContext);
  const navigate = useNavigate()
  const [state, setState] = useState('Sign Up');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (state === 'Sign Up') {
        const { data } = await axios.post(`${backendUrl}/api/user/register`, { name, password, email });
        if (data.success) {
          localStorage.setItem('token', data.token);
          setToken(data.token);
          toast.success('Account created successfully!');
        } else {
          toast.error(data.message);
        }
      } else {
        const { data } = await axios.post(`${backendUrl}/api/user/login`, { password, email });
        if (data.success) {
          localStorage.setItem('token', data.token);
          setToken(data.token);
          toast.success('Logged in successfully!');
        } else {
          toast.error(data.message);
        }
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: state === 'Sign Up' ? signupAnimation : loginAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  useEffect(() => {
    if(token){
      navigate('/')
    }
  },[token])

  return (
    <form onSubmit={onSubmitHandler} className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col gap-4 m-auto items-center p-6 w-full max-w-md border rounded-xl bg-white shadow-lg">
        <Lottie {...defaultOptions} style={{ height: 100, width: 100 }} />
        <p className="text-2xl font-semibold text-gray-800">{state === 'Sign Up' ? "Create Account" : "Login"}</p>
        <p className="text-center text-gray-500">{state === 'Sign Up' ? "Please Sign up to book an appointment" : "Please log in to your account"}</p>
        {state === "Sign Up" && (
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-600">Full Name</label>
            <input
              className="border border-gray-300 rounded w-full p-2 mt-1"
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
          </div>
        )}
        <div className="w-full">
          <label className="block text-sm font-medium text-gray-600">Email</label>
          <input
            className="border border-gray-300 rounded w-full p-2 mt-1"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>
        <div className="w-full">
          <label className="block text-sm font-medium text-gray-600">Password</label>
          <input
            className="border border-gray-300 rounded w-full p-2 mt-1"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </div>
        <button type="submit" className="bg-primary text-white w-full py-2 rounded-md mt-3 text-base">
          {state === 'Sign Up' ? "Create Account" : "Login"}
        </button>
        {state === "Sign Up" ? (
          <p className="text-sm text-gray-500">
            Already have an account?{' '}
            <span onClick={() => setState('Login')} className="text-primary underline cursor-pointer">Login</span>
          </p>
        ) : (
          <p className="text-sm text-gray-500">
            Create an account?{' '}
            <span onClick={() => setState('Sign Up')} className="text-primary underline cursor-pointer">Click here</span>
          </p>
        )}
      </div>
    </form>
  );
};

export default LoginPage;
