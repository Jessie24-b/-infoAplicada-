import { Router } from "express";
import {getEmployees, addEmployee, deleteEmployee, getEmployeeById, updateEmployee, getDepartaments, } from '../controllers/employee.controller';
import upload from '../multer'
const router = Router();


router.get('/get',getEmployees)

router.post('/add', addEmployee)

router.delete('/delete/:id', deleteEmployee)

router.get('/getById/:id', getEmployeeById)

router.put('/update', updateEmployee)

router.get('/getDepartaments', getDepartaments)

router.post("/single", upload.single("image"),(req, res) =>{
    console.log(req.file.filename);
    res.send("subio la imagen correctamente");
});

module.exports = router ;