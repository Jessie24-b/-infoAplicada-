import { Router } from "express";
import { addRequest, deleteRequest, getRequest, getRequestById, updateRequest,  getRequestByDate, getTransaction } from '../controllers/request.controller';

const router = Router();

router.get('/get',getRequest)

router.post('/add', addRequest)

router.delete('/delete/:id', deleteRequest)

router.get('/getById/:id', getRequestById)

router.put('/update', updateRequest)

router.get('/getByDate/:fechaInicio/:fechaFin', getRequestByDate )

router.get('/getTransacciones/:mesInicio/:mesFin', getTransaction )

module.exports = router ;