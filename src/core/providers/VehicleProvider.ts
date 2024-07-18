import IRepository from "../interfaces/IRepository";
import IVehicle from "../interfaces/IVehicle";

export default interface VehicleProvider<IQueryOptions> extends IRepository<IVehicle, IQueryOptions>{}