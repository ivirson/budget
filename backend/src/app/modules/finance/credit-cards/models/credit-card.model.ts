import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
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
  declare availableLimit: number;
  declare flag: string;
  declare color: string;
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
    },
    dueDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    invoiceClosingDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    limit: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    availableLimit: DataTypes.NUMBER,
    flag: DataTypes.STRING,
    color: DataTypes.STRING,
  },
  {
    sequelize: database,
    modelName: "CreditCard",
  }
);
