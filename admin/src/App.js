import React, { useContext } from 'react'
import Login from './pages/Login'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AdminContext } from './context/AdminContext';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Admin/Dashboard';
import AllAppointments from './pages/Admin/AllAppointments';
import AddDoctor from './pages/Admin/AddDoctor';
import DoctorList from './pages/Admin/DoctorList';
import { DoctorContext } from './context/DoctorContext';
import DoctorDashboard from './pages/Doctor/DoctorDashboard';
import DoctorAppointments from './pages/Doctor/DoctorAppointments';
import DoctorProfile from './pages/Doctor/DoctorProfile';

const App = () => {

  const {aToken} = useContext(AdminContext);
  const {dToken} = useContext(DoctorContext);

  return aToken || dToken ? (
    <div className='bg-gray-100 m-1'>
      <ToastContainer/>
      <Navbar/>
      <hr className='border-b '/>
      <div className='flex items-start'>
        <Sidebar/>
        <Routes>
          <Route path='/' element={aToken ? <Dashboard /> : <DoctorDashboard />} />
          {aToken && (
            <>
              <Route path='/admin-dashboard' element={<Dashboard />} />
              <Route path='/all-appointments' element={<AllAppointments />} />
              <Route path='/add-doctor' element={<AddDoctor />} />
              <Route path='/doctor-list' element={<DoctorList />} />
            </>
          )}
          {dToken && (
            <>
              <Route path='/doctor-dashboard' element={<DoctorDashboard />} />
              <Route path='/doctor-appointments' element={<DoctorAppointments />} />
              <Route path='/doctor-profile' element={<DoctorProfile />} />
            </>
          )}
        </Routes>
      </div>
    </div>
  )
  :(
    <>
      <ToastContainer/>
      <Login/>
    </>
  )
}

export default App