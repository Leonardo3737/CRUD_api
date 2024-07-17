import { Express, Request, Response } from "express";
import VehicleService from "../services/VehicleService";
import IVehicle from "../interfaces/IVehicle";

export default class VehicleController {
  constructor(
    private route: string,
    private app: Express
  ) {

    app.get(route, async(_, res: Response) => {
      try {
        const resService = await VehicleService.getVehicles()
        res.status(200).send(resService)
      }
      catch (err) {
        if(err instanceof Error){
          res.status(500).send(err.message);
        }
        res.status(500).send("Erro ao buscar veiculo")
      }
    })

    app.post(route, async (req, res) => {
      try {
        const resService = await VehicleService.RegisterVehicle(req.body)
        res.status(201).send(resService)
      }
      catch (err) {
        if(err instanceof Error){
          res.status(500).send(err.message);
        }
        res.status(500).send("Erro ao cadastrar veiculo")
      }
    })

    app.delete(`${route}/:id`, async (req, res) => {
      try {
        const resService = await VehicleService.deleteVehicles(parseInt(req.params.id))
        res.status(204).send(resService)
      }
      catch (err) {
        if(err instanceof Error){
          res.status(500).send(err.message);
        }
        res.status(500).send("Erro ao apagar veiculo")
      }
    })

    app.put(route, async (req, res) => {
      try {
        const resService = await VehicleService.updateVehicles(req.body)
        res.status(204).send(resService)
      }
      catch (err) {
        if(err instanceof Error){
          res.status(500).send(err.message);
        }
        res.status(500).send("Erro ao Editar veiculo")
      }
    })
  }
}