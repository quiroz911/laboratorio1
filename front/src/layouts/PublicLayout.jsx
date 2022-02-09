import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from 'components/Navbar';

const PublicLayout = () => (
  <div className='flex flex-col h-screen justify-between'>
    <Navbar />
    <div className='h-full   bg-slate-500'>
      <Outlet />
    </div>
  </div>
);

export default PublicLayout;
