import React, { useState } from 'react';

function Form({ onSubmit }) {
  const [formData, setFormData] = useState({
    wheelBrand: '',
    numberOfWheels: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <form>
      <label htmlFor="wheelBrand">Marca de las Ruedas:</label>
      <input
        type="text"
        id="wheelBrand"
        name="wheelBrand"
        value={formData.wheelBrand}
        onChange={handleInputChange}
        required
      />

      <label htmlFor="numberOfWheels">Número de Ruedas:</label>
      <input
        type="text"
        id="numberOfWheels"
        name="numberOfWheels"
        value={formData.numberOfWheels}
        onChange={handleInputChange}
        required
      />

      <button type="button" onClick={() => onSubmit(formData)}>
        Enviar
      </button>
    </form>
  );
}

export default Form;