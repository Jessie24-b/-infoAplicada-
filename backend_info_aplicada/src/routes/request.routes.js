import { Router } from "express";
import { addRequest, deleteRequest, getRequest, getRequestById, updateRequest } from '../controllers/request.controller';

const router = Router();

router.get('/get',getRequest)

router.post('/add', addRequest)

router.delete('/delete/:id', deleteRequest)

router.get('/getById/:id', getRequestById)

router.put('/update', updateRequest)

module.exports = router ;