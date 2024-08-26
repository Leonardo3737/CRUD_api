import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express'
import cors from 'cors'

import VehicleController from './external/api/VehicleController';
import { dbConnectionTest } from './external/db';
import VehicleService from './core/services/VehicleService';
import VehicleRepository from './external/repositories/VehicleRepository';
import IVehicle from './external/interfaces/IVehicle';
import { WhereOptions } from 'sequelize';


const app = express()
dbConnectionTest()

app.use(express.json())
app.use(cors())

app.listen(process.env.PORT, ()=> {
  console.log('Rodando na porta: ', process.env.PORT);
})


const vehicleService = new VehicleService<IVehicle, WhereOptions>(new VehicleRepository())

new VehicleController('/vehicle', app, vehicleService)