// Start third party imports
const jwt = require('jsonwebtoken');
// End third party imports

const generarJWT = (id) => {
    return new Promise((resolve, reject) => {
        const payload = {
            id,
        }
        jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: '12h'
        }, (err, token) => {
            if (err) {
                console.log(err);
                reject('No se pudo generar el token JWT');
            }else{
                resolve(token);
            }
        });
    });
};

module.exports = {
    generarJWT
}