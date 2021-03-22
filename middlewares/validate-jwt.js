const jwt = require('jsonwebtoken');
const {response, request} = require('express')

const validateJWT = (req=request, res=response, next) => {
    
    // Read token 
    const token = req.header('x-token');

    if (!token) {
        return res.status(401).json({
            ok: false,
            msg: 'No hay json web token'
        });
    }
    try {
        const { id } = jwt.verify(token, process.env.JWT_SECRET);
        req.id = id; 
    } catch (error) {
        return res.status(401).json({
            ok: false,
            msg: 'Token no valido'
        });
    };
    next();
}

module.exports = {
    validateJWT
}