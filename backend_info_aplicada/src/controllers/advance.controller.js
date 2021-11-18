
import {getconnection} from '../database/connection'

export const getAdvances = async (req, res) => {
    
    try {
        const pool = await getconnection();
        const result = await pool.request().query('exec [dbo].[sp_getAdvances]')
        res.json(result.recordset)
        pool.close();
    } catch (error) {
        res.status(500);
        res.send(error.message);
       
    }

};

export const addAdvance = async  (req, res) => {
    console.log("entro");
    const {idTrimestre, documento, usuarioAplicativo, idSolicitud} = req.body;
    console.log(req.body)

    try {
        const pool = await getconnection();

        await pool.request().query( "exec [dbo].[sp_AddAdvance] " + idTrimestre+ ",'" + documento+"',"+usuarioAplicativo +","
        + idSolicitud);
         res.sendStatus(204);
      //   pool.close();
    } catch (error) {
        res.status(500);
        res.send(error.message);
        
    }
 
};

export const deleteAdvance = async (req, res) => {
    
    const {id} = req.params;
    try {
        const pool = await getconnection();
        const result = await pool.request().query("exec [dbo].[sp_deleteAdvance]'"+id+"'");
        res.sendStatus(204);
        pool.close();
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    

};

export const getAdvanceById = async (req, res) => {
    
    const {id} = req.params;
    try {
        const pool = await getconnection();
        const result = await pool.request().query("exec [dbo].[sp_getAdvanceById]'"+id+"'");
        res.send(result.recordset[0]);
        pool.close();
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
  
};


export const updateAdvance = async  (req, res) => {
    const { idAvance, idTrimestre, documento, usuarioAplicativo, idSolicitud} = req.body;
    console.log(req.body);
    try {
        const pool = await getconnection();

        await pool.request().query( "exec [dbo].[sp_updateAdvance] " + idAvance + "," +
        idTrimestre+",'"+documento +"'," + usuarioAplicativo+","+ idSolicitud);
         res.sendStatus(204);
         pool.close();
    } catch (error) {
        
        res.status(500);

        res.send(error.message);
        
    }
 
};