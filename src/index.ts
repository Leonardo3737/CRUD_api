import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express'
import cors from 'cors'

import VehicleController from './api/VehicleController';
import { dbConnectionTest } from './db';


const app = express()
dbConnectionTest()

app.use(express.json())
app.use(cors())

app.listen(process.env.PORT, ()=> {
  console.log('Rodando na porta: ', process.env.PORT);
})

new VehicleController('/vehicle', app)