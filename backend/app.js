const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Post = require('./models/post');

mongoose.connect('sua string de conexão aqui').then(() => {
  console.log("Conexão OK")
}).catch(() => {
  console.log("Conexão NOK")
});
app.use(bodyParser.json());

const posts = [
  {
    id: '1',
    titulo: 'Jose',
    texto: '11223344'
  },
  {
    id: '2',
    titulo: 'Jose',
    texto: '11223344'
  },
]
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', "*");
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
  next();
});

app.post('/api/posts', (req, res, next) => {
  const post = new Post({
    titulo: req.body.titulo,
    data: req.body.data,
    imagem: req.body.imagem,
    texto: req.body.texto

  })
  cliente.save();
  console.log(post);
  res.status(201).json({ mensagem: 'Post inserido' })
});

app.use('/api/posts', (req, res, next) => {
  res.status(200).json({
    mensagem: "Tudo OK",
    posts: posts
  });
});
module.exports = app;
