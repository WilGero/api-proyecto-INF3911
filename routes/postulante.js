const express = require('express');
const { restart }=require('nodemon');
const ruta = express.Router();
const cpostulante=require('../controllers/postulante');

ruta.post('/agregar',cpostulante.agregar);
module.exports=ruta;