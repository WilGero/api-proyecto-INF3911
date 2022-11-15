const coneccion = require("../basedatos");

module.exports={
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