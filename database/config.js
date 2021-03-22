// Start third party exports
const mongoose = require('mongoose');
require('dotenv').config();
// End third party exports

const dbConnection = async() => {
    try {
        await mongoose.connect(process.env.DB_CNN ,{
            useNewUrlParser: true,
            useUnifiedTopologyr: true,
            useCreateIndex: true
        });
        console.log('DB Online');
    } catch (error) {
        console.log(error);
        throw new Error('Error al iniciar la base de datos ver logs');
    }
};

module.exports = {
    dbConnection
}
