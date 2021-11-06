import { Router } from "express";
import {getEmployees, addEmployee, deleteEmployee, } from '../controllers/employee.controller'
const router = Router();

router.get('/getEmployee',getEmployees)

router.post('/addEmployee', addEmployee)

router.get('/deleteEmployee/:id', deleteEmployee)

router.delete('/employee',)

router.put('/employee',)



export default router