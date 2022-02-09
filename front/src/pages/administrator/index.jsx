import 'styles/globals.css';
import React from 'react';
import { Link } from 'react-router-dom';

const AdministratorIndex = () => (
  <div className='mt-28 mx-10 flex justify-between '>
    <div className='administratorBoxes'>
      <div className='m-10 administratorBoxesButton'>
        <Link to='/createUser'>Crear usuario</Link>
      </div>
      <div className=' administratorBoxesButton'>
        <Link to='/'>Ver Usuarios</Link>
      </div>
    </div>
    <div className=' administratorBoxes'>
      <div className='m-10 administratorBoxesButton'>
        <Link to='/createEnterprise'>Crear Empresa</Link>
      </div>
      <div className=' administratorBoxesButton'>
        <Link to='/'>Ver Empresas</Link>
      </div>
    </div>
    <div className='administratorBoxes'>
      <div className='m-10 administratorBoxesButton'>
        <Link to='/createProyect'>Crear Proyecto</Link>
      </div>
      <div className=' administratorBoxesButton'>
        <Link to='/'>Ver Proyectos</Link>
      </div>
    </div>
    <div className='administratorBoxes'>
      <div className='m-10 administratorBoxesButton'>
        <Link to='/createIssue'>Crear Isuue</Link>
      </div>
      <div className=' administratorBoxesButton'>
        <Link to='/'>Ver Issues</Link>
      </div>
    </div>
  </div>
);

export default AdministratorIndex;
