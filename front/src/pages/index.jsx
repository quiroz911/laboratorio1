/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Dialog from '@mui/material/Dialog';
import Select from 'react-select';

const Index = () => {
  const [openLogDialog, setOpenloginDialog] = useState(false);
  const popUpTab = () => {
    setOpenloginDialog(true);
  };

  return (
    <div>
      <div>
        <button type='button' onClick={popUpTab}>
          Cliente
        </button>
        <button type='button'>Administrador</button>
        <button type='button'>Desarrollador</button>
        <div className='flex'>
          <Dialog
            open={openLogDialog}
            onClose={() => {
              setOpenloginDialog(false);
            }}
          >
            <ContentLoging />
          </Dialog>
        </div>
      </div>
    </div>
  );
};
const ContentLoging = () => {
  const [emailSelected, setEmailSelected] = useState('');

  useEffect(() => {
    console.log('el email seleccionado es', emailSelected);
  }, [emailSelected]);
  useEffect(() => {
    const getEmail = async () => {
      const emailRequest = {
        method: 'GET',
        url: 'http://localhost:5000/productos',
        headres: { 'content-Type': 'applicactions/json' },
      };

      const email = await axios.request(emailRequest);
      console.log('these are the emails', email);
    };
    getEmail();
  }, []);

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];
  return (
    <div className='w-72 h-72'>
      <h1> Correo Cliente </h1>
      <Select options={options} onChange={(e) => setEmailSelected(e)} />
    </div>
  );
};

export default Index;
