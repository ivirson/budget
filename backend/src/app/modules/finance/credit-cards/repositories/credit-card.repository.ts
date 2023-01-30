import CreditCard from "../models/credit-card.model";

export default class CreditCardsRepository {
  public async findAll(): Promise<CreditCard[]> {
    return await CreditCard.findAll();
  }

  public async findById(id: string): Promise<CreditCard | null> {
    return await CreditCard.findByPk(id);
  }

  public async save(creditCard: CreditCard): Promise<CreditCard> {
    return await CreditCard.create(creditCard);
  }

  public async update(id: string, creditCard: any): Promise<CreditCard | null> {
    await CreditCard.update(creditCard, {
      where: {
        id,
      },
    });

    return await CreditCard.findByPk(id);
  }

  public async delete(id: string): Promise<void> {
    await CreditCard.destroy({
      where: { id },
    });
  }
}
