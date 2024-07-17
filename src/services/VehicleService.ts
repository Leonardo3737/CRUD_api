import IVehicle from "../interfaces/IVehicle";
import Vehicle from "../Models/Vehicle";

export default class VehicleService {

  static async RegisterVehicle(vehicle: IVehicle) {
    try {
      await Vehicle.create(vehicle)
      return "Veiculo criado com sucesso!"
    } 
    catch (err) {
      if(err instanceof Error){
        throw new Error("Erro ao cadastrar veiculo: " + err.message);
      }
      throw new Error("Erro ao cadastrar veiculo")
    }
  }

  static async getVehicles() {
    try {
      const vehicles = await Vehicle.findAll()
      return vehicles
    }
    catch (err) {
      if(err instanceof Error){
        throw new Error("Erro ao buscar veiculos: " + err.message);
      }
      throw new Error("Erro ao buscar veiculos")
    }
  }

  static async deleteVehicles(id: number) {
    try {
      await Vehicle.destroy({where: {id}})
      return "Veiculo apagado com sucesso"
    }
    catch (err) {
      if(err instanceof Error){
        throw new Error("Erro ao buscar veiculos: " + err.message);
      }
      throw new Error("Erro ao buscar veiculos")
    }
  }

  static async updateVehicles(vehicle: IVehicle) {
    try {
      await Vehicle.update(vehicle, { where: {id: vehicle.id}})
      return "Veiculo apagado com sucesso"
    }
    catch (err) {
      if(err instanceof Error){
        throw new Error("Erro ao Editar veiculo: " + err.message);
      }
      throw new Error("Erro ao Editar veiculo")
    }
  }
}