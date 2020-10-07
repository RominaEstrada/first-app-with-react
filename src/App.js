import React, { useState, useEffect } from 'react';
import Form from './components/Form/Form';
import Card from './components/Card/Card';


function App() {

  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  if(!citasIniciales) {
    citasIniciales = [];
  }
  const [citas, setCitas] = useState(citasIniciales);

  const addCita = cita => {
    setCitas([
      ...citas,
      cita
    ]);
  }

  const removeCita = id => {
    const citasActualizadas = citas.filter(cita => cita.id !== id );
    setCitas(citasActualizadas);
  }

  useEffect(() => {
    let citasIniciales = JSON.parse(localStorage.getItem('citas'));

    if (citasIniciales) {
      localStorage.setItem('citas', JSON.stringify(citas))
    } else {
      localStorage.setItem('citas', JSON.stringify([]));
    }
  }, [citas]);

  const title = citas.length === 0 ? 'Añada una nueva cita' : 'Administrar citas';

  return (
    <>
      <h1>Administrador de pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <Form addCita={addCita} />
          </div>
          <div className="col-6">
            <h2>{title}</h2>
            {
              citas.length > 0 ?
              citas.map((cita, index) => {
                return (
                  <Card
                    key={index}
                    cita={cita}
                    removeCita={removeCita}
                  />
                )
              })
              : null
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
