import React from 'react';

const Card = ({ cita, removeCita }) => {
  const { mascota, duenio, fecha, hora, sintomas, id } = cita;
  return (
    <div className="cita">
      <p>Mascota: <span>{mascota}</span></p>
      <p>Dueño: <span>{duenio}</span></p>
      <p>Fecha: <span>{fecha}</span></p>
      <p>Hora: <span>{hora}</span></p>
      <p>Síntoma <span>{sintomas}</span></p>
      <button
        className="btn btn-danger button eliminar"
        onClick={() => {removeCita(id)}}
      >
        Eliminar &times;
      </button>
    </div>
  );
}
 
export default Card;