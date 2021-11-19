import { Router } from "express";
import { addAdvance, deleteAdvance, getAdvanceById, getAdvanceByIdRequest, getAdvances, updateAdvance } from '../controllers/advance.controller'
const router = Router();

router.get('/get',getAdvances)

router.post('/add', addAdvance)

router.delete('/delete/:id', deleteAdvance)

router.get('/getById/:id', getAdvanceById)

router.get('/getByIdRequest/:id', getAdvanceByIdRequest)

router.put('/update', updateAdvance)

module.exports = router ;