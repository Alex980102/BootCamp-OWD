// Start third party imports
const {validationResult} = require('express-validator');
const {response, request} = require('express');
// Finish Third party imports

const validateFields = (req, res=response, next)=>{
    const errores = validationResult(req);

    if (!errores.isEmpty()) {
        return res.status(400).json({
            ok: false,
            errors: errores.mapped()
        });
    }
    next();

}

module.exports = {validateFields}