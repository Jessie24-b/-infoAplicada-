import { Router } from "express";

import { checkLogin } from '../controllers/login.controller';

const router = Router();

router.get('/:correo/:contrasenna/', checkLogin)

module.exports = router ;

