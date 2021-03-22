// Start Third party imports
const {Schema, model} = require('mongoose');
// End third party imports

const UserSchema = new Schema({
    name: {
        First_Name: {
            type: String,
            required: true
        },
        Last_Name: {
            type: String,
            required: true
        }
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    img:{
        type: String
    },
    role:{
        type: String,
        required: true,
        default: 'USER_ROLE'
    }
});

UserSchema.method('toJSON', function() {
    const {__v, password,_id, ...object} = this.toObject();
    object.id = _id;
    return object;
});

module.exports = model('User', UserSchema);
