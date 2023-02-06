import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";
import database from "../../../../database/db";

export default class CreditCardPurchase extends Model<
  InferAttributes<CreditCardPurchase>,
  InferCreationAttributes<CreditCardPurchase>
> {
  declare id: CreationOptional<string>;
  declare description: string;
  declare creditCardId: string;
  declare isInstallments: boolean;
  declare isFixed: boolean;
  declare value: number;
  declare firstBill: number;
  declare date: Date;
  declare createdAt?: CreationOptional<Date>;
  declare updatedAt?: CreationOptional<Date>;
}

CreditCardPurchase.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    creditCardId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isInstallments: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    isFixed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    value: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    firstBill: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize: database,
    modelName: "CreditCardPurchase",
  }
);
