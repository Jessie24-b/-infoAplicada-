import { Router } from "express";
import {getEmployees, addEmployee, deleteEmployee, getEmployeeById, updateEmployee, getDepartaments, } from '../controllers/employee.controller';

const router = Router();


router.get('/get',getEmployees)

router.post('/add', addEmployee)

router.delete('/delete/:id', deleteEmployee)

router.get('/getById/:id', getEmployeeById)

router.put('/update', updateEmployee)

router.get('/getDepartaments', getDepartaments)

module.exports = router ;