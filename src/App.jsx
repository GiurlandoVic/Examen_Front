import React, { useState } from 'react';
import Form from './Form';
import Card from './Card';

function App() {
  const [formData, setFormData] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleFormSubmit = (data) => {
    // Validar datos
    if (data.wheelBrand.trim().length < 3 || /^\s/.test(data.wheelBrand) || data.numberOfWheels.length < 1) {
      setSuccessMessage('');
      setErrorMessage('Por favor chequea que la información sea correcta');
      return;
    }

    // Datos válidos, mostrar mensaje de éxito
    setFormData(data);
    setErrorMessage('');
    setSuccessMessage('Las ruedas han sido despachadas con éxito');
  };

  return (
    <div>
      <h1>Formulario de Ruedas de Auto</h1>
      <Form onSubmit={handleFormSubmit} />
      {formData && <Card {...formData} />}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
}

export default App;