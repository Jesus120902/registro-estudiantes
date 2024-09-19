const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Ruta para registrar estudiantes
app.post('/api/estudiantes', (req, res) => {
    const studentData = req.body;
    console.log(studentData);  // Puedes ver los datos del estudiante en la consola
    res.status(200).json({ message: 'Estudiante registrado con éxito', data: studentData });
});

// Iniciar servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${5000}`);
});
