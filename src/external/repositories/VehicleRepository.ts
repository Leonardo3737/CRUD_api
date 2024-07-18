import { Options, QueryOptions, WhereOptions } from "sequelize";
import VehicleProvider from "../../core/providers/VehicleProvider";
import IVehicle from "../../core/interfaces/IVehicle";
import Vehicle from "../Models/Vehicle";

export default class VehicleRepository implements VehicleProvider<WhereOptions> {
  create(obj: IVehicle){
    return Vehicle.create(obj)
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