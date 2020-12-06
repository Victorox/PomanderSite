//importando o pacote
const mongoose = require('mongoose');
//definindo o "schema"
//note a semelhança com recursos de bases relacionais
const postSchema = mongoose.Schema({
  titulo: { type: String, required: true },
  data: { type: String, required: true },
  imagem: { type: String, required: true },
  texto: { type: String, required: true }
});
//criamos o modelo associado ao nome Post e exportamos
//tornando acessível para outros módulos da aplicação
module.exports = mongoose.model('Post', postSchema);
