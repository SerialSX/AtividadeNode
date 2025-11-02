const Produto = require('../models/Produto');
const produtoController = {

  criar: async (req, res) => {
    try {
      const novoProduto = await Produto.create(req.body);
      res.status(201).json(novoProduto); 
    
    } catch (error) {
      res.status(500).json({ message: 'Erro ao criar produto', error: error.message });
    }
  },

  listarTodos: async (req, res) => {
    try {
      const produtos = await Produto.find();
      res.status(200).json(produtos);

    } catch (error) {
      res.status(500).json({ message: 'Erro ao listar produtos', error: error.message });
    }
  },

  listarUm: async (req, res) => {
    try {
      const produto = await Produto.findById(req.params.id);

      if (!produto) {
        return res.status(404).json({ message: 'Produto não encontrado' });
      }
      
      res.status(200).json(produto);

    } catch (error) {
      res.status(500).json({ message: 'Erro ao buscar produto', error: error.message });
    }
  }

};

module.exports = produtoController;