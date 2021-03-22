// Start third party imports
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./database/config');
// End third party imports

// Initialize express on variable app
const app = express();

// Initialize cors
app.use(cors());

// Lecture and parse of the body
app.use(express.json());

// Run Data Base
dbConnection();

// Rutes
app.use('/api/user', require('./routes/usuarios.routes'));


app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
});

