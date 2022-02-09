/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
// import { toast } from 'react-toastify';
import axios from 'axios';

import Dialog from '@mui/material/Dialog';
import Select from 'react-select';
// import { Link } from 'react-router-dom';

// import { Link } from 'react-router-dom';

const Index = () => {
  const [openLogDialogAdmin, setOpenloginDialogAdmin] = useState(false);

  const popUpTabAdmin = () => {
    setOpenloginDialogAdmin(true);
  };

  return (
    <div className='flex flex-col w-full items-center '>
      <div className='m-16 flex flex-col items-center'>
        <h1 className='font-extrabold text-2xl'>Ingreso</h1>
        <button
          type='button'
          className='m-10 bg-slate-500'
          onClick={popUpTabAdmin}
        >
          Ingresar
        </button>

        <Dialog
          open={openLogDialogAdmin}
          onClose={() => {
            setOpenloginDialogAdmin(false);
          }}
        >
          <ContentLogingAdmin />
        </Dialog>
      </div>
    </div>
  );
};

// ****************************** User ***************************

//  ****************** Admin ****************************************
const ContentLogingAdmin = () => {
  const [emailSelectedAdmin, setEmailSelectedAdmin] = useState('');
  const [emailOptionsAdmin, setEmailOptionsAdmin] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [contraseñaId, setContraseñaId] = useState('');
  const [contraseñaRole, setContraseñaRole] = useState('');

  useEffect(() => {
    const getEmail = async () => {
      const emailRequestAdmin = {
        method: 'GET',
        url: 'http://localhost:4001/admin',
        headres: { 'content-Type': 'applicactions/json' },
      };

      const email = await axios.request(emailRequestAdmin);
      console.log(
        'este es el objeto con todos los datos de todos los usuarios',
        email
      );
      const userdata = email.data.emails.map((infoUser) => ({
        value: infoUser.id,
        label: infoUser.email,
        role: infoUser.role,
      }));
      setEmailOptionsAdmin(userdata);
      //   console.log('these are the emails', userdata);
    };
    getEmail();
  }, []);

  useEffect(() => {
    console.log('el email seleccionado es:::::::', emailSelectedAdmin);
  }, [emailSelectedAdmin]);

  const validation = () => {
    //   toast('Contraseña equivocada', {
    //     position: 'bottom-center',
    //   });
    if (contraseña === contraseñaId && contraseñaRole === 'Client') {
      window.location.replace('/client  ');
      console.log('Contraseña correctaaa cliente');
    } else if (
      contraseña === contraseñaId &&
      contraseñaRole === 'Administrator'
    ) {
      window.location.replace('/administrator  ');
      console.log('Contraseña correcta administrador');
    } else if (contraseña === contraseñaId && contraseñaRole === 'Developer') {
      window.location.replace('/developer  ');

      console.log('Contraseña correctaaa desarrollador');
    } else {
      console.log('contraseña indicatorSeparatorCSS');
    }
  };
  // eslint-disable-next-line consistent-return

  // eslint-disable-next-line consistent-return

  return (
    <div className='w-72 h-72 flex flex-col'>
      <h1> Ingrese su correo </h1>
      {/* <Select options={emailOptionsAdmin} onChange={(e) => setEmailSelectedAdmin(e)} /> */}
      <Select
        className='w-full'
        options={emailOptionsAdmin}
        onChange={(e) => {
          setEmailSelectedAdmin(e);
          setContraseñaId(e.value);
          setContraseñaRole(e.role);
        }}
      />
      <form>
        <div className='py-5'>
          <label
            htmlFor='login'
            onChange={(e) => setContraseña(e.target.value)}
          >
            <span>Ingresar ID</span>
            <input name='login' type='text' />
          </label>
        </div>
        <button
          type='button'
          className='bg-green-500 w-20 self-center'
          onClick={validation}
        >
          {' '}
          Ingresar
          {/* <Link to={}> Ingresar </Link> */}
          {/* <Link to={`${directing}`}> Ingresar </Link> */}
        </button>
      </form>
    </div>
  );
};

export default Index;
