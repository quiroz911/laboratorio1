import React, { useEffect, useState } from 'react';
import CardProducto from 'components/CardProducto';
import axios from 'axios';
import { Link } from 'react-router-dom';

const IndexProductos = () => {
  // eslint-disable-next-line no-unused-vars
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const obtenerProductos = async () => {
      const options = {
        method: 'GET',
        url: 'http://localhost:5000/productos',
        headres: { 'content-Type': 'applicactions/json' },
      };
      const respuesta = await axios.request(options);
      // eslint-disable-next-line no-console
      setProductos(respuesta.data);
      setLoading(false);
    };
    if (loading) {
      obtenerProductos();
    }
  }, [loading]);

  if (loading) return <div>Cargando....</div>;

  return (
    <div className='flex flex-col p-10 '>
      <button type='button' className='button-submit self-end'>
        <Link to='/productos/nuevo '> Crear nuevo producto</Link>
      </button>
      Productos
      <div className='flex flex-wrap'>
        {productos.map((producto) => (
          <CardProducto
            id={producto.id}
            key={producto.id}
            nombre={producto.nombre}
            descripcion={producto.descripcion}
            precio={producto.precio}
            setLoading={setLoading}
          />
        ))}
      </div>
    </div>
  );
};

export default IndexProductos;
