const db_conection  = require('../config/DataBase.js');

exports.login = (req, res) => {

    const { correo } = req.params;

    const { contrasenna } = req.params;

    db_conection.sql.connect(db_conection.config, function (err) {

        
        
        if (err) {
            console.log(err);
        }else{
                        
            db_conection.sql.query(
                
                "exec [dbo].[existeUsuario] '" + correo+ "','" + contrasenna+"'", function (err, result) {
                
                if (err) {
                    console.log(err);
                } else {
                    if (!result.recordset[0]){
                        res.json('No existe');
                    }else{
                      
                     res.json('Si existe');
                    }
                }
            });
        }
  
    });
};