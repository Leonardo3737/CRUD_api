import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import IVehicle from "../interfaces/IVehicle";
import db from "../db"

class Vehicle
  extends Model<InferAttributes<Vehicle>, InferCreationAttributes<Vehicle>>
  implements IVehicle {
  declare id: CreationOptional<number>
  declare model: string | null
  declare brand: string | null
  declare year: number | null
  declare price: number | null
}

Vehicle.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    model: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    brand: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
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