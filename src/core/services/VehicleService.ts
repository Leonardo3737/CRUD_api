import IVehicle from "../interfaces/IVehicle";
import VehicleProvider from "../providers/VehicleProvider";

export default class VehicleService<IQueryOptions> implements UseCaseCRUD<IVehicle, IQueryOptions> {

  constructor(
    private vehicleProvider: VehicleProvider<IQueryOptions>
  ) {}

  async register(vehicle: IVehicle) {
    try {
      await this.vehicleProvider.create(vehicle)
      return "Veiculo criado com sucesso!"
    } 
    catch (err) {
      if(err instanceof Error){
        throw new Error("Erro ao cadastrar veiculo: " + err.message);
      }
      throw new Error("Erro ao cadastrar veiculo")
    }
  }

  async get() {
    try {
      const vehicles = await this.vehicleProvider.getAll()
      return vehicles
    }
    catch (err) {
      if(err instanceof Error){
        throw new Error("Erro ao buscar veiculos: " + err.message);
      }
      throw new Error("Erro ao buscar veiculos")
    }
  }

  async delete(queryOptions: IQueryOptions) {
    try {
      await this.vehicleProvider.delete(queryOptions)
      return "Veiculo apagado com sucesso"
    }
    catch (err) {
      if(err instanceof Error){
        throw new Error("Erro ao buscar veiculos: " + err.message);
      }
      throw new Error("Erro ao buscar veiculos")
    }
  }

  async update(vehicle: IVehicle, queryOptions: IQueryOptions) {
    try {
      await this.vehicleProvider.update(vehicle, queryOptions)
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