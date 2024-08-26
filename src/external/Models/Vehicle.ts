import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import IVehicle from "../interfaces/IVehicle";
import db from "../db"

class Vehicle
  extends Model<InferAttributes<Vehicle>, InferCreationAttributes<Vehicle>>
  implements IVehicle {
  declare id: CreationOptional<number>
  declare vehicle_type: string | null
  declare id_model: number | null
  declare model: string | null
  declare id_brand: number | null
  declare brand: string | null
  declare year: string | null
  declare price: number | null
  declare notes: string | null
  declare km: number | null
  declare color: string | null
}

Vehicle.init(
  {
    id: {
      type: DataTypes.INTEGER, 
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    }, 
    vehicle_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id_brand: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    brand: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id_model: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    model: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    year: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    notes: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    km: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    tableName: 'vehicle',
    createdAt: false,
    updatedAt: false
  }
);

export default Vehicle