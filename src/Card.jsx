import React from 'react';

function Card({ wheelBrand, numberOfWheels }) {
  return (
    <div className="card">
      <h2>Información de Ruedas de Auto</h2>
      <p>Marca de las Ruedas: {wheelBrand}</p>
      <p>Número de Ruedas: {numberOfWheels}</p>
    </div>
  );
}

export default Card;