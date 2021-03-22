// Start third party imports
const {response, request} = require('express'); 
const bcrypt = require('bcrypt');
// End third party imports

// Start local imports
const User = require('../models/user.model');
const {generarJWT} = require('../helpers/jwt')
// End local imports

// Start Get Users
const getUsers = async(req, res = response) => {
    try {
        const users = await User.find({}, 'Nombre Email Password');
        res.json({
            ok: true,
            users
        });
    } catch (error) {
        console.log(error);
        res.status(404).json({
            ok: false,
            error
        });
    };
};
// End Get Users

// Start Post Users
const postUser = async (req, res=response) => {

    const {email, password, name} = req.body;

    try {
        // check if the mail exists
        const emailExist = await User.findOne({email});
        if(emailExist){
            return res.status(400).json({
                ok: false,
                msg: 'El correo ya existe'
            });
        }
        // check if the mail exists
        const user = new User(req.body);

        // encrypt password
        const salt = bcrypt.genSaltSync();
        console.log(password);
        console.log(salt);
        console.log(user);
        console.log(user);
        user.password = bcrypt.hashSync(password.toString(), salt);
        
        // encrypt password

        // Save User on mongo
        // TODO: mover comentario de la funcion para gusradar al usuario en la base de datos
        // await usuario.save();
        // Save User on mongo

        // Generate JWT
        const token = await generarJWT(user.id);
        res.json({
            ok: true,
            user,
            token
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error checar logs'
        });
    }
};
// End Post User

module.exports = {
    getUsers,
    postUser
}