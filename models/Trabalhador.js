const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TrabalhadorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    password2: { type: String, required: true },
    marcacoes: { type: Schema.Types.ObjectId, ref:'Marcacao' },
    role: { type: String, required: true, default: 'Trabalhador'}
},
{collection: 'Trabalhador'}
)

module.exports = mongoose.model('Trabalhador', TrabalhadorSchema);