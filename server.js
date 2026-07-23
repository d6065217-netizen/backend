const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();

// Configurar puerto dinámico para Render o puerto local por defecto
const PORT = process.env.PORT || 3000;

// Middleware para entender JSON
app.use(express.json());

// Ruta de prueba para verificar que el backend responde
app.get('/', (req, res) => {
    res.json({ status: 'API de R-Care funcionando correctamente' });
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});