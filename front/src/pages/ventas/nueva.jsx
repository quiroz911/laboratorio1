/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Select from 'react-select';

const NuevaVenta = () => {
  const [clienteSeleccionado, setClienteSeleccionado] = useState('');
  const [productoSeleccionado, setProductoSeleccionado] = useState('');
  const [cantidadProducto, setCantidadProducto] = useState(0);
  const [total, setTotal] = useState(0);

  const [opcionesClientes, setopcionesClientes] = useState([]);
  const [opcionesProductos, setopcionesProductos] = useState([]);

  useEffect(() => {
    const obtenerClientes = async () => {
      const optionsRequestClientes = {
        method: 'GET',
        url: 'http://localhost:5000/clientes',
        headres: { 'content-Type': 'applicactions/json' },
      };

      const respuestaClientes = await axios.request(optionsRequestClientes);
      const opciones = respuestaClientes.data.clientes.map((cliente) => ({
        value: cliente.id,
        label: cliente.correo,
      }));
      setopcionesClientes(opciones);

      const optionsRequestProductos = {
        method: 'GET',
        url: 'http://localhost:5000/productos',
        headres: { 'content-Type': 'applicactions/json' },
      };

      const respuestaProductos = await axios.request(optionsRequestProductos);
      const opcionesProd = respuestaProductos.data.productos.map(
        (producto) => ({
          value: producto.id,
          label: producto.nombre,
          precio: producto.precio,
        })
      );
      setopcionesProductos(opcionesProd);
    };
    obtenerClientes();
  }, []);

  useEffect(() => {
    if (productoSeleccionado.precio) {
      setTotal(productoSeleccionado.precio * cantidadProducto);
    }
  }, [cantidadProducto, productoSeleccionado]);

  const crearVenta = async () => {
    console.log('producto', productoSeleccionado);
    console.log('cliente', clienteSeleccionado);
    console.log('cantidad', cantidadProducto);

    const optionsPost = {
      method: 'POST',
      url: 'http://localhost:5000/ventas',
      headres: { 'content-Type': 'applicactions/json' },
      data: {
        producto: productoSeleccionado.value,
        cliente: clienteSeleccionado.value,
        cantidad: cantidadProducto,
        total,
      },
    };
    await axios.request(optionsPost);
  };

  return (
    <div className='p-10 flex flex-col'>
      <h1> Creacion de nueva venta </h1>
      <div className='my-2'>
        <span>Seleccionar cliente </span>
        <Select
          options={opcionesClientes}
          onChange={(e) => setClienteSeleccionado(e)}
        />
      </div>
      <div className='my-2'>
        <span>Seleccionar producto </span>
        <Select
          options={opcionesProductos}
          onChange={(e) => setProductoSeleccionado(e)}
        />
      </div>
      <div>
        <label htmlFor='cantidad'>
          <span>cantidad vendida</span>
          <input
            value={cantidadProducto}
            onChange={(e) => {
              setCantidadProducto(e.target.value);
            }}
            name='cantidad'
            type='number'
            placeholder='150'
          />
        </label>
      </div>
      <span>total venta: {total}</span>
      <button type='button' className='button-submit' onClick={crearVenta}>
        Confirmar venta
      </button>
    </div>
  );
};

export default NuevaVenta;
