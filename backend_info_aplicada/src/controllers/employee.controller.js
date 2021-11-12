
import {getconnection} from '../database/connection'

export const getEmployees = async (req, res) => {
    
    try {
        const pool = await getconnection();
        const result = await pool.request().query('exec [dbo].[sp_getEmployees]')
        res.json(result.recordset)
        pool.close;
    } catch (error) {
        res.status(500);
        res.send(error.message);
       
    }

};

export const addEmployee = async  (req, res) => {
    console.log("entro");
    const {nombre, apellidos, fechaNacimiento, sexo, departamento, loginName, contrasena} = req.body;
    console.log(req.body)

    try {
        const pool = await getconnection();

        await pool.request().query( "exec [dbo].[sp_AddEmployee] '" + nombre+ "','" + apellidos+"','"+fechaNacimiento +"',"
        + sexo+","+ departamento+",'"+ loginName+"','" +contrasena+"'");
         res.sendStatus(204);
    } catch (error) {
        res.status(500);
        res.send(error.message);
        
    }
 
};

export const deleteEmployee = async (req, res) => {
    
    const {id} = req.params;
    const pool = await getconnection();
    const result = await pool.request().query("exec [dbo].[sp_deleteEmployee]'"+id+"'");
    res.sendStatus(204);

};

export const getEmployeeById = async (req, res) => {
    
    const {id} = req.params;
    const pool = await getconnection();
    const result = await pool.request().query("exec [dbo].[sp_getEmployee]'"+id+"'");
    res.send(result.recordset[0]);

};


export const updateEmployee = async  (req, res) => {
    console.log(req.body);
    const {id, nombre, apellidos, fechaNacimiento, sexo, departamento, loginName, contrasena} = req.body;
    
    try {
        const pool = await getconnection();

        await pool.request().query( "exec [dbo].[sp_updateEmployee] '"+ id +"','"+ nombre+ "','" + apellidos+"','"+fechaNacimiento +
       "','" + sexo+"','"+ departamento+"','"+ loginName+"','" +contrasena+"'");
         res.sendStatus(204);
    } catch (error) {
        console.log("error de update");
        res.status(500);
        res.send(error.message);
        
    }
 
};

