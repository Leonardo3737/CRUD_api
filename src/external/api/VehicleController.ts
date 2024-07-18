import { Express, Request, Response } from "express";
import IVehicle from "../interfaces/IVehicle";
import { WhereOptions } from "sequelize";

export default class VehicleController {
  constructor(
    private route: string,
    private app: Express,
    private vehicleService: UseCaseCRUD<IVehicle, WhereOptions>
  ) {

    app.get(route, async(_, res: Response) => {
      try {
        const resService = await vehicleService.get()
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
        const resService = await vehicleService.register(req.body)
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
        const resService = await vehicleService.delete({id: req.params.id})
        res.status(204).send(resService)
      }
      catch (err) {
        if(err instanceof Error){
          res.status(500).send(err.message);
        }
        res.status(500).send("Erro ao apagar veiculo")
      }
    })

    app.put(`${route}/:id`, async (req, res) => {
      try {
        const resService = await vehicleService.update(req.body, {id: req.params.id})
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