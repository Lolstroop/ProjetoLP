/*const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AdminSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }, 
    password2: { type: String, required: true },
    principal: { type: Boolean, default: '0' , required: true},
    role: { type: String, required: true, default: 'Adminstrador'}
},
{collection: 'Admin'}
)

module.exports = mongoose.model('Admin', AdminSchema);*/

//-------------------------------------------------------------------------------------------------
/*


const mongoose = require('mongoose');

//------------ User Schema ------------//
const AdminSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    verified: {
        type: Boolean,
        default: false
    },
    principal: { 
        type: Boolean, 
        default: '0' , 
        required: true
    },
    role: { type: String, 
        required: true, 
        default: 'Adminstrador'
    },
    resetLink: {
        type: String,
    default: ''
    }
}, { timestamps: true });

const Admin = mongoose.model('Admin', AdminSchema);

module.exports = Admin;

*/

//-----------------------------------------------------------------------------------------

const mongoose = require('mongoose');

//------------ User Schema ------------//
const AdminSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  verified: {
    type: Boolean,
    default: false
  },
  resetLink: {
    type: String,
    default: ''
  }
}, { timestamps: true });

const Admin = mongoose.model('Admin', AdminSchema);

module.exports = Admin;