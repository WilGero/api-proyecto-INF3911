const coneccion = require("../basedatos");

module.exports={
    listar:(callBack)=>{
        coneccion.query(
            'SELECT * FROM convocatorias',
            (error,results)=>{
                if(error) callBack(error);
                return callBack(null,results); 
            }
            )
    }
}