import CreditCardPurchase from "../models/credit-card-purchase.model";

export default class CreditCardPurchasesRepository {
  public async findAll(creditCardId: string): Promise<CreditCardPurchase[]> {
    return await CreditCardPurchase.findAll({
      where: {
        creditCardId,
      },
    });
  }

  public async findById(id: string): Promise<CreditCardPurchase | null> {
    return await CreditCardPurchase.findByPk(id);
  }

  public async save(
    creditCard: CreditCardPurchase
  ): Promise<CreditCardPurchase> {
    return await CreditCardPurchase.create(creditCard);
  }

  public async update(
    id: string,
    creditCard: any
  ): Promise<CreditCardPurchase | null> {
    await CreditCardPurchase.update(creditCard, {
      where: {
        id,
      },
    });

    return await CreditCardPurchase.findByPk(id);
  }

  public async delete(id: string): Promise<void> {
    await CreditCardPurchase.destroy({
      where: { id },
    });
  }
}
