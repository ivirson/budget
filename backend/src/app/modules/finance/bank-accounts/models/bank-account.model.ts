import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
  NUMBER,
  STRING,
} from "sequelize";
import database from "../../../../database/db";

export default class BankAccount extends Model<
  InferAttributes<BankAccount>,
  InferCreationAttributes<BankAccount>
> {
  declare id: CreationOptional<string>;
  declare alias: CreationOptional<string>;
  declare bank: string;
  declare balance: number;
  declare userId: string;
  declare createdAt?: CreationOptional<Date>;
  declare updatedAt?: CreationOptional<Date>;
}

BankAccount.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    bank: {
      type: STRING,
      allowNull: false,
    },
    balance: {
      type: NUMBER,
      allowNull: false,
      defaultValue: 0,
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    alias: DataTypes.STRING,
  },
  {
    sequelize: database,
    modelName: "BankAccount",
  }
);
