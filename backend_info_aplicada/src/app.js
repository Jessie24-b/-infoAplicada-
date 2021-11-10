import express from 'express'
import config from './config'
import cors from 'cors'
import employeeRoutes from './routes/employee.routes'

const app = express() 

//settings
app.set('port', config.port)

//middlewares
app.use(cors('http://localhost:4200/'));
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.use(employeeRoutes)  

export default app