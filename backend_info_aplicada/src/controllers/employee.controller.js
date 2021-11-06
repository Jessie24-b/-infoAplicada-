
import {getconnection, sql} from '../database/connection'

export const getEmployees = async (req, res) => {
    const pool = await getconnection();
    const result = await pool.request().query('exec [dbo].[getEmployees]')
    res.json(result.recordset)

};

export const addEmployee = async  (req, res) => {
  
   
   
    const {nombre, apellidos, fechaNacimiento, sexo, departamento, loginName, contrasena} = req.body;
    const pool = await getconnection();

   await pool.request().query( "exec [dbo].[sp_AddEmployee] '" + nombre+ "','" + apellidos+"','"+fechaNacimiento +
  "','" + sexo+"','"+ departamento+"','"+ loginName+"','" +contrasena+"'");
    res.json('insercion exitosa')
}

export const deleteEmployee = async (req, res) => {
     console.log("HOLA");
    const {idFuncionario} = req.params
    console.log(idFuncionario);
    const pool = await getconnection();
    const result = await pool.request().query("exec [dbo].[sp_deleteEmployee]'"+idFuncionario+"'")
    res.json("delete")

};