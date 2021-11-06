import { Router } from "express";
import {getEmployees, addEmployee} from '../controllers/employee.controller'
const router = Router();

router.get('/getEmployee',getEmployees)

router.post('/addEmployee', addEmployee)

router.get('/employee',)

router.delete('/employee',)

router.put('/employee',)



export default router