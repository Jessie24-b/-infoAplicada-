import express from 'express'
import config from './config'
import employeeRoutes from './routes/employee.routes'

const app = express() 

//settings
app.set('port', config.port)

//middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.use(employeeRoutes)  

export default app