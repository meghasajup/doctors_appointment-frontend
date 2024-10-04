import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DoctorsPage from './pages/DoctorsPage';
import LoginPage from './pages/LoginPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import MyProfilePage from './pages/MyProfilePage';
import MyAppointmentPage from './pages/MyAppoinmentPage';
import AppointmentPage from './pages/AppointmentPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]' >
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/doctors' element={<DoctorsPage />} />
        <Route path='/doctors/:speciality' element={<DoctorsPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/my-profile' element={<MyProfilePage />} />
        <Route path='/my-appointments' element={<MyAppointmentPage />} />
        <Route path='/appointment/:docId' element={<AppointmentPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
