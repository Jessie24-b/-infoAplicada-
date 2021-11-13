import express from 'express'
import config from './config'
import cors from 'cors'
import employeeRoutes from './routes/employee.routes'
import loginRoutes from './routes/login.routes'
import requestRouter from './routes/request.routes'
const app = express() 

//settings
app.set('port', config.port)

//middlewares
app.use(cors('http://localhost:4200/'));
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

//Routes
app.use('/employees', employeeRoutes);
app.use('/login', loginRoutes);
app.use('/request', requestRouter);

export default app