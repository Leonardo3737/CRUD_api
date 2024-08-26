import { WhereOptions } from "sequelize";
import IVehicle from "../interfaces/IVehicle";
import Vehicle from "../Models/Vehicle";
import RepositoryProvider from "../../core/providers/RepositoryProvider";

export default class VehicleRepository implements RepositoryProvider<IVehicle, WhereOptions> {
  create(obj: IVehicle){
    return Vehicle.create(obj)
  }

  getById(id: number){
    const vehicle = Vehicle.findByPk(id)
    return vehicle
  }

  getAll(){
    return Vehicle.findAll();  
  }

  update(obj: IVehicle, where: WhereOptions){
    return Vehicle.update(obj, { where })
  }

  delete(where: WhereOptions){
    return Vehicle.destroy({ where })
  }
  
}