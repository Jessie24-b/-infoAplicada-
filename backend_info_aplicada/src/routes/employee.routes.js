import { Router } from "express";
import {getEmployees, addEmployee, deleteEmployee, getEmployeeById, updateEmployee, } from '../controllers/employee.controller';
import { checkLogin } from '../controllers/login.controller';
const router = Router();

router.get('/checkLogin/:correo/:contrasenna/', checkLogin)

router.get('/getEmployees',getEmployees)

router.post('/addEmployee', addEmployee)

router.delete('/deleteEmployee/:id', deleteEmployee)

router.get('/getEmployeeById/:id', getEmployeeById)

router.put('/updateEmployee', updateEmployee)



export default router