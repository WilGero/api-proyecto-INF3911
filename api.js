const express=require('express');
const dotenv=require('dotenv').config();
const bodyparser = require('body-parser');
const cors=require('cors');
const fileUpload=require('express-fileupload');

var corsOptions={
    origin:['http://127.0.0.1:8080','http://localhost:8080'],
    optionsSuccessStatus: 200
}
const app=express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(fileUpload());
app.use(cors(corsOptions));
app.use(require('./routes/index'));
app.use('/usr',require('./routes/usuario'));

app.use('/postulante',require('./routes/postulante'));
app.use('/convocatoria',require('./routes/convocatoria'));

app.listen(process.env.PORT,()=>{
    console.log('Ya esta funcionando el servidor...');
})