

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

export const getProyectInfo = async (req, res) => {
    
    try {
        const pool = await getconnection();
        const result = await pool.request().query('exec [dbo].[sp_getProyectInfo]')
        res.json(result.recordset)
        pool.close();
    } catch (error) {
        res.status(500);
        res.send(error.message);
       
    }

};

export const addRequest = async  (req, res) => {
    console.log("entro");
    const {usuarioAplicativo, usuarioResponsable, usuarioFinal, fechaInicio, fechaFin, nombreProyecto, acta} = req.body;
    console.log(req.body)

    try {
        const pool = await getconnection();

        await pool.request().query( "exec [dbo].[sp_AddRequest] " + usuarioAplicativo+ "," + usuarioResponsable+","+usuarioFinal +",'"
        + fechaInicio+"','"+ fechaFin+"','"+ nombreProyecto +"','"+ acta+"'");
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
        const result = await pool.request().query("exec [dbo].[sp_getRequestById]'"+id+"'");
        res.send(result.recordset[0]);
        pool.close();
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
  
};

export const getRequestByDate = async (req, res) => {
    
    const {fechaInicio} = req.params;
    const {fechaFin} = req.params;
    console.log("Fecha Inicio: "+fechaInicio+" Fecha fin: " + fechaFin );
    try {
        const pool = await getconnection();
        const result = await pool.request().query("exec [dbo].[sp_getSolicitudByFecha]'"+fechaInicio+"','"+fechaFin+"'");
         console.log(result);
        res.send(result.recordset);
        pool.close();
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
  
};

export const getTransaction = async (req, res) => {
    
    const {mesInicio} = req.params;
    const {mesFin} = req.params;
    console.log("Fecha Inicio: "+mesInicio+" Fecha fin: " + mesFin );
    try {
        const pool = await getconnection();
        const result = await pool.request().query("exec [dbo].[sp_getTransacciones]'"+mesInicio+"','"+mesFin+"'");
         console.log(result);
        res.send(result.recordset);
        pool.close();
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
  
};


export const updateRequest = async  (req, res) => {
    const {idSolicitud, usuarioResponsable, usuarioFinal, fechaInicio, fechaFin, acta} = req.body;
    console.log(req.body);
    try {
        const pool = await getconnection();

        await pool.request().query( "exec [dbo].[sp_updateRequest] " + idSolicitud + "," +
         usuarioResponsable+","+usuarioFinal +",'" + fechaInicio+"','"+ fechaFin+"','"+ 
         nombreProyecto +"','"+ acta+"'");
         res.sendStatus(204);
         pool.close();
    } catch (error) {
        
        res.status(500);

        res.send(error.message);
        
    }
 
};