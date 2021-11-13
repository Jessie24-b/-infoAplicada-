

import {getconnection} from '../database/connection'

export const getRequest = async (req, res) => {
    
    try {
        const pool = await getconnection();
        const result = await pool.request().query('exec [dbo].[sp_getRequest]')
        res.json(result.recordset)
        pool.close();
    } catch (error) {
        res.status(500);
        res.send(error.message);
       
    }

};

export const addRequest = async  (req, res) => {
    console.log("entro");
    const {usuarioAplicativo, usuarioResponsable, usuarioFinal, fechaInicio, fechaFin, acta} = req.body;
    console.log(req.body)

    try {
        const pool = await getconnection();

        await pool.request().query( "exec [dbo].[sp_AddRequest] " + usuarioAplicativo+ "," + usuarioResponsable+","+usuarioFinal +",'"
        + fechaInicio+"','"+ fechaFin+"','"+ acta+"'");
         res.sendStatus(204);
      //   pool.close();
    } catch (error) {
        res.status(500);
        res.send(error.message);
        
    }
 
};

export const deleteRequest = async (req, res) => {
    
    const {id} = req.params;
    try {
        const pool = await getconnection();
        const result = await pool.request().query("exec [dbo].[sp_deleteRequest]'"+id+"'");
        res.sendStatus(204);
        pool.close();
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    

};

export const getRequestById = async (req, res) => {
    
    const {id} = req.params;
    try {
        const pool = await getconnection();
        const result = await pool.request().query("exec [dbo].[sp_getRequest]'"+id+"'");
        res.send(result.recordset[0]);
        pool.close();
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
  
};


export const updateRequest = async  (req, res) => {
    const {id, nombre, apellidos, fechaNacimiento, sexo, departamento, loginName, contrasena} = req.body;
    console.log(req.body);
    try {
        const pool = await getconnection();

        await pool.request().query( "exec [dbo].[sp_updateRequest] '"+ id +"','"+ nombre+ "','" + apellidos+"','"+fechaNacimiento +
       "','" + sexo+"','"+ departamento+"','"+ loginName+"','" +contrasena+"'");
         res.sendStatus(204);
         pool.close();
    } catch (error) {
        
        res.status(500);

        res.send(error.message);
        
    }
 
};