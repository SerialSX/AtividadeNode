const mongoose = require('mongoose');
const produtoSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  preco: {
    type: Number,
    required: true
  },
  descricao: {
    type: String,
    required: false
  },
  emEstoque: {
    type: Boolean,
    default: true 
  }
}, {
  timestamps: true 
});

module.exports = mongoose.model('Produto', produtoSchema);