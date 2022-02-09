import React from 'react';
import { Link } from 'react-router-dom';

const CreateUser = () => (
  <div>
    <div className='h-full flex flex-col items-center justify-start'>
      <div className='self-start m-6'>
        <Link to='/'>
          <i className='fas fa-arrow-left hover:text-indigo-600 text-xl' />
        </Link>
      </div>
      <h1 className='text-3xl text-gray-800 my-6'> Nuevo Usuario </h1>
      <form>
        <div className='flex flex-col bg-slate-400 rounded-xl'>
          <label htmlFor='email'>
            <span>Correo del usuario</span>
            <input name='email' type='text' placeholder='El mejor producto' />
          </label>
          <label htmlFor='enterpriseName'>
            <span>email de la Empresa</span>
            <input
              name='enterpriseName'
              type='text'
              placeholder='la mejor enterpriseName'
            />
          </label>
          <label htmlFor='UserType'>
            <span>Tipo de usuario</span>
            <input name='UserType' type='text' placeholder='' />
          </label>
          <button type='submit' className='button-submit'>
            Enviar
          </button>
        </div>
      </form>
    </div>
  </div>
);

export default CreateUser;
