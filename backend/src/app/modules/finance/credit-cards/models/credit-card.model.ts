import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
  NUMBER,
} from "sequelize";
import database from "../../../../database/db";

export default class CreditCard extends Model<
  InferAttributes<CreditCard>,
  InferCreationAttributes<CreditCard>
> {
  declare id: CreationOptional<string>;
  declare alias: string;
  declare dueDate: Date;
  declare invoiceClosingDate: Date;
  declare limit: number;
  declare availableLimit?: number;
  declare flag: string;
  declare color: string;
  declare fontColor: string;
  declare userId: string;
  declare createdAt?: CreationOptional<Date>;
  declare updatedAt?: CreationOptional<Date>;
}

CreditCard.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    alias: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    dueDate: {
      type: NUMBER,
      allowNull: false,
    },
    invoiceClosingDate: {
      type: NUMBER,
      allowNull: false,
    },
    limit: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    availableLimit: DataTypes.NUMBER,
    flag: DataTypes.STRING,
    color: DataTypes.STRING,
    fontColor: DataTypes.STRING,
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  },
  {
    sequelize: database,
    modelName: "CreditCard",
  }
);
