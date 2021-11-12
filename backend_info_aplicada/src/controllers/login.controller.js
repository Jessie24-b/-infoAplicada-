import {getconnection} from '../database/connection'

export const checkLogin = async (req, res) => {
    console.log("entro al loguear")
    const { correo } = req.params;
    const { contrasenna } = req.params;

    try {
        const pool = await getconnection();
        const result = await pool.request().query("exec [dbo].[existeUsuario] '" + correo+ "','" + contrasenna+"'");
       
        if(result.recordset[0] == null){
            console.log("falso dioo")
            res.send(null);
        }else{
            res.send(result.recordset[0]);
        }
       
    } catch (error) {
        console.log(error);
        console.log(result.recordset[0]);
       // res.send(result.recordset[0]);
        
    }
  

};