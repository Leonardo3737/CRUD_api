import RepositoryProvider from "../providers/RepositoryProvider";

export default class VehicleService<Entity, IQueryOptions> implements UseCaseCRUD<Entity, IQueryOptions> {

  constructor(
    private vehicleProvider: RepositoryProvider<Entity, IQueryOptions>
  ) {}

  async register(vehicle: Entity) {
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

  async update(vehicle: Entity, queryOptions: IQueryOptions) {
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