const coneccion = require("../basedatos");

module.exports={
    modificar:(datos,callBack)=>{
        coneccion.query(
            `update usuario set usuario=?,contra=?,nombre=?,tipo=? where id=?`,
            [datos.usuario.datos.contra,datos.nombre,datos.tipo,datos.id],
            (error,results,fields)=>{
                if(error) callBack(error);
                return callBack(null,results[0]); 
            }
            )
    },
    borrar:(id,callBack)=>{
        coneccion.query(
            `delete FROM usuario where id=?`,[id],
            (error,results,fields)=>{
                if(error) callBack(error);
                return callBack(null,results); 
            }
            )
    },
    agregar:(datos,callBack)=>{
        coneccion.query(
            `insert into usuario (usuario,contra,nombre,tipo) values(?,?,?,?)`,
            [datos.usuario.datos.contra,datos.nombre,datos.tipo],
            (error,results,fields)=>{
                if(error) callBack(error);
                return callBack(null,results[0]); 
            }
            )
    },
    listar:(callBack)=>{
        coneccion.query(
            'SELECT * FROM usuario',
            (error,results)=>{
                if(error) callBack(error);
                return callBack(null,results); 
            }
            )
    },
    verifica: (datos, callBack) => {
        coneccion.query(
        `select * from usuario where usuario= ? and contra=?`,
        [datos.usuario, datos.contra],
        (error, results, fields) => {
        if (error) {
        callBack(error);
        }
        return callBack(null, results[0]);
        }
        );
        },
}