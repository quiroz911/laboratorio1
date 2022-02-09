import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className='flex'>
    <div> First Lab </div>
    <Link to='/'>----Inicio------</Link>
  </div>
);

export default Navbar;
