
import {getconnection} from '../database/connection'

export const getEmployees = async (req, res) => {
    
    try {
        const pool = await getconnection();
        const result = await pool.request().query('exec [dbo].[sp_getEmployees]')
        res.json(result.recordset)
        pool.close();
    } catch (error) {
        res.status(500);
        res.send(error.message);
       
    }

};

export const getDepartaments = async (req, res) => {
    
    try {
        const pool = await getconnection();
        const result = await pool.request().query('exec [dbo].[sp_getDepartaments]')
        res.json(result.recordset)
        pool.close();
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
         pool.close();
    } catch (error) {
        res.status(500);
        res.send(error.message);
        
    }
 
};

export const deleteEmployee = async (req, res) => {
    
    const {id} = req.params;
    try {
        const pool = await getconnection();
        const result = await pool.request().query("exec [dbo].[sp_deleteEmployee]'"+id+"'");
        res.sendStatus(204);
        pool.close();
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    

};

export const getEmployeeById = async (req, res) => {
    
    const {id} = req.params;
    try {
        const pool = await getconnection();
        const result = await pool.request().query("exec [dbo].[sp_getEmployee]'"+id+"'");
        res.send(result.recordset[0]);
        pool.close();
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
  
};


export const updateEmployee = async  (req, res) => {
    const {id, nombre, apellidos, fechaNacimiento, sexo, departamento, loginName, contrasena} = req.body;
    console.log(req.body);
    try {
        const pool = await getconnection();

        await pool.request().query( "exec [dbo].[sp_updateEmployee] '"+ id +"','"+ nombre+ "','" + apellidos+"','"+fechaNacimiento +
       "','" + sexo+"','"+ departamento+"','"+ loginName+"','" +contrasena+"'");
         res.sendStatus(204);
         pool.close();
    } catch (error) {
        
        res.status(500);

        res.send(error.message);
        
    }
 
};

