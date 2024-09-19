import React, { useState } from 'react';

function App() {
  // Definir los estados para cada campo del formulario
  const [nombre, setNombre] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [direccion, setDireccion] = useState('');
  const [telefono, setTelefono] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const student = {
      nombres: nombre,
      apellidos: apellidos,
      fechaNacimiento: fechaNacimiento,
      direccion: direccion,
      telefono: telefono,
    };

    try {
      const response = await fetch('http://localhost:5000/api/estudiantes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(student),
      });

      const data = await response.json();
      console.log(data.message); // Mensaje de éxito
    } catch (error) {
      console.error('Error al registrar estudiante:', error);
    }
  };

  return (
    <div className="App">
      <h1>Registro de Estudiantes</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombres:</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}  // Actualizar el estado
          />
        </div>
        <div>
          <label>Apellidos:</label>
          <input
            type="text"
            value={apellidos}
            onChange={(e) => setApellidos(e.target.value)}  // Actualizar el estado
          />
        </div>
        <div>
          <label>Fecha de Nacimiento:</label>
          <input
            type="date"
            value={fechaNacimiento}
            onChange={(e) => setFechaNacimiento(e.target.value)}  // Actualizar el estado
          />
        </div>
        <div>
          <label>Dirección:</label>
          <input
            type="text"
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}  // Actualizar el estado
          />
        </div>
        <div>
          <label>Teléfono:</label>
          <input
            type="text"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}  // Actualizar el estado
          />
        </div>
        <button type="submit">Registrar Estudiante</button>
      </form>
    </div>
  );
}

export default App;
