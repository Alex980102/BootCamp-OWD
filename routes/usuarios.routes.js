/*
    Rute: /api/usuarios
*/

// Start third party imports
const {Router} = require('express');
const {check} = require('express-validator');
// End third party imports

// Start Local imports
const { validateFields } = require('../middlewares/validate-fields');
const { getUsers, postUser } = require('../controllers/usuarios.controllers');
const { validateJWT } = require('../middlewares/validate-jwt');
// End local imports

// Initilize routor from exoress
const router = Router();

// Create User CRUD Routes
// Get route
// TODO: router.get('/', validateJWT, getUsers);
router.get('/', validateJWT, getUsers);

// Post User
router.post('/', [
    check('name.First_Name', 'El nombre del usuario es obligatorio').not().isEmpty(),
    check('name.Last_Name', 'El apellido del usuario es obligatorio').not().isEmpty(),
    check('password', 'El password es obligarorio').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    validateFields
], postUser);

// TODO: quitar comentario si funciona el post
// router.post('/', postUser);

module.exports = router;
