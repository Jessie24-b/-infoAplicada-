
import {getconnection, sql} from '../database/connection'

export const getEmployees = async (req, res) => {
    const pool = await getconnection();
    const result = await pool.request().query('exec [dbo].[getEmployees]')
    res.json(result.recordset)

};

export const addEmployee = async  (req, res) => {
  
   
   // const { dato,dato,dato,dato,dato,dato,dato,dato,dato } = req.params
    const { numero, nombre, apellido} = req.body; 
    const pool = await getconnection();

   await pool.request().query( "exec [dbo].[getPrueba] '" + numero+ "','" + nombre+"','"+ apellido+"'");
    res.json('no esta insetando')
}