import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';


const Form = ({ addCita }) => {

  const [error, setError] = useState(false);
  const [cita, setCita] = useState({
    mascota: '',
    duenio: '',
    fecha: '',
    hora: '',
    sintomas: ''
  })

  const { mascota, duenio, fecha, hora, sintomas } = cita;

  const handleOnChange = e => {
    setCita({
      ...cita,
      [e.target.name]: e.target.value
    })
  }

  const handleOnSubmit = e => {
    e.preventDefault();
    if(mascota.trim() === '' || duenio.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === '') {
      setError(true);
      return
    }
    setError(false);
    cita.id = uuid();
    addCita(cita);
    setCita({
      mascota: '',
      duenio: '',
      fecha: '',
      hora: '',
      sintomas: ''
    })
  }

  return (
    <>
      <h2>Crear cita</h2>
      {
        error ?
        <p className="alert alert-danger">Todos los campos son obligatorios</p>
        : null
      }
      <form onSubmit={handleOnSubmit}>
        <div className="form-group">
          <label>Nombre de la mascota</label>
          <input
            type="text"
            name="mascota"
            className="form-control"
            onChange={handleOnChange}
            value={mascota}
          />
        </div>
        <div className="form-group">
          <label>Dueño</label>
          <input
            type="text"
            name="duenio"
            className="form-control"
            value={duenio}
            onChange={handleOnChange}
          />
        </div>
        <div className="form-group">
          <label>Fecha</label>
          <input
            type="date"
            name="fecha"
            className="form-control"
            value={fecha}
            onChange={handleOnChange}
          />
        </div>
        <div className="form-group">
          <label>Horario</label>
          <input
            type="time"
            name="hora"
            className="form-control"
            value={hora}
            onChange={handleOnChange}
          />
        </div>
        <div className="form-group">
          <label>Nombre de la mascota</label>
          <textarea
            name="sintomas"
            className="form-control"
            value={sintomas}
            onChange={handleOnChange}
          >
          </textarea>
        </div>
        <div>
          <button type="submit" className="w-100 d-block btn btn-primary">
            Añadir cita
          </button>
        </div>
      </form>
    </>
  );
}
 
export default Form;