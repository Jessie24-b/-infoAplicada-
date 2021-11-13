import { Router } from "express";
import { addRequest, getRequest } from '../controllers/request.controller';

const router = Router();

router.get('/get',getRequest)

router.post('/add', addRequest)
/*
router.delete('/delete/:id', deleteEmployee)

router.get('/getById/:id', getEmployeeById)

router.put('/update', updateEmployee)
*/
module.exports = router ;