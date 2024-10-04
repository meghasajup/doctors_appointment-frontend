import React, { useState } from 'react';
import Lottie from 'react-lottie';
import profileAnimation from '../assets/assets_frontend/json/profile.json'; 
import { assets } from '../assets/assets_frontend/assets';

const MyProfilePage = () => {
  const [userData, setUserData] = useState({
    name: 'Abhin',
    Image: assets.profile_pic,
    email: 'abhinraj8086@gmail.com',
    phone: '1234567890',
    address: {
      line1: "57th Cross, Richmond ",
      line2: "Circle, Church Road, London",
    },
    gender: "Male",
    dob: "1990-01-01",
  });

  const [isEdit, setEdit] = useState(false);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: profileAnimation, // Use the profile animation
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Dividing the page into two sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left section - Profile Details */}
        <div className="flex flex-col gap-2 text-sm">
          <img className='w-36 rounded' src={userData.Image} alt="Profile" />
          {
            isEdit
              ? <input className='bg-gray-50 text-3xl font-medium max-w-60 mt-4' type="text" value={userData.name} onChange={e => setUserData(prev => ({ ...prev, name: e.target.value }))} />
              : <p className='font-medium text-3xl text-neutral-800 mt-4'>{userData.name}</p>
          }

          <hr className='bg-zinc-400 h-[1px] border-none' />
          <div>
            <p className='text-neutral-500 underline mt-3'>CONTACT INFORMATION</p>
            <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
              <p className='font-medium'>Email id:</p>
              <p className='text-blue-500'>{userData.email}</p>
              <p className='font-medium'>Phone:</p>
              {
                isEdit
                  ? <input className='bg-gray-100 max-w-52' type="text" value={userData.phone} onChange={e => setUserData(prev => ({ ...prev, phone: e.target.value }))} />
                  : <p className='text-blue-400'>{userData.phone}</p>
              }
              <p className='font-medium'>Address:</p>
              {
                isEdit
                  ? <p>
                    <input className='bg-gray-50' onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))} value={userData.address.line1} type="text" />
                    <br />
                    <input className='bg-gray-50' onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))} value={userData.address.line2} type="text" />
                  </p>
                  : <p className='text-gray-500'>
                    {userData.address.line1}
                    <br />
                    {userData.address.line2}
                  </p>
              }
            </div>
          </div>

          <div>
            <p className='text-neutral-500 underline mt-3'>BASIC INFORMATION</p>
            <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
              <p className='font-medium'>Gender:</p>
              {
                isEdit
                  ? <select className='max-w-20 bg-gray-100' onChange={(e) => setUserData(prev => ({ ...prev, gender: e.target.value }))} value={userData.gender}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                  : <p className='text-gray-400'>{userData.gender}</p>
              }
              <p className='font-medium'>Birthday:</p>
              {
                isEdit
                  ? <input className='max-w-28' type="date" onChange={(e) => setUserData(prev => ({ ...prev, dob: e.target.value }))} value={userData.dob} />
                  : <p className='text-gray-400'>{userData.dob}</p>
              }
            </div>
          </div>

          <div className='mt-10'>
            {
              isEdit
                ? <button className='border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all' onClick={() => setEdit(false)}>Save information</button>
                : <button className='border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all' onClick={() => setEdit(true)}>Edit</button>
            }
          </div>
        </div>

        {/* Right section - Lottie Animation */}
        <div className="flex justify-center items-center">
          {/* Lottie animation */}
          <Lottie options={defaultOptions} height={400} width={400} />
        </div>
      </div>
    </div>
  );
};

export default MyProfilePage;
