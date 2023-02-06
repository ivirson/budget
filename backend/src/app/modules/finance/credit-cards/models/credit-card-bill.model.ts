import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";
import database from "../../../../database/db";
import CreditCardPurchase from "./credit-card-purchase.model";

export default class CreditCardBill extends Model<
  InferAttributes<CreditCardBill>,
  InferCreationAttributes<CreditCardBill>
> {
  declare id?: CreationOptional<string>;
  declare creditCardId: string;
  declare purchases?: CreationOptional<CreditCardPurchase[]>;
  declare wasPaid?: boolean;
  declare totalValue?: number;
  declare createdAt?: CreationOptional<Date>;
  declare updatedAt?: CreationOptional<Date>;
}

CreditCardBill.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    creditCardId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    wasPaid: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    totalValue: {
      type: DataTypes.NUMBER,
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    sequelize: database,
    modelName: "CreditCardBill",
  }
);
