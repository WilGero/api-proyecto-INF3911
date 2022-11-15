const express = require('express');
const { restart }=require('nodemon');
const ruta = express.Router();
const cusuario=require('../controllers/usuario');

ruta.get('/listar',cusuario.listar);
ruta.post('/login ',cusuario.login);
module.exports=ruta;