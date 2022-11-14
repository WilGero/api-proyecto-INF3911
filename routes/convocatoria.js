const express = require('express');
const { restart }=require('nodemon');
const ruta = express.Router();
const cconvocatoria=require('../controllers/convocatoria');

ruta.get('/listar',cconvocatoria.listar);

module.exports=ruta;