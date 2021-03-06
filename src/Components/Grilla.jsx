import React, {fragment, useState} from 'react';

const GrillaEvent = user => {
  console.log('hola mundo');

  console.log(user.nombre);
};

const Grilla = () => {
  const [filas, setFilas] = useState(
    [{nombre: 'rodrigo', apellido: 'perez'}],
    [{nombre: 'pepe', apellido: 'gomez'}]
  );

  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>comando</td>
            <td>Nombre</td>
            <td>Apellido</td>
          </tr>
        </thead>
        <tbody>
          {filas.map((item, i) => {
            return (
              <tr>
                <td>
                  <button onClick={GrillaEvent(item)}> seleccionar </button>
                </td>
                <td>{item.nombre}</td>
                <td>{item.apellido}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Grilla;
