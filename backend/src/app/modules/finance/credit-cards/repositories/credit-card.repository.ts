import CreditCard from "../models/credit-card.model";

export default class CreditCardsRepository {
  public async findAll(userId: string): Promise<CreditCard[]> {
    return await CreditCard.findAll({
      where: {
        userId,
      },
    });
  }

  public async findById(
    userId: string,
    id: string
  ): Promise<CreditCard | null> {
    return await CreditCard.findOne({
      where: {
        userId,
        id,
      },
    });
  }

  public async save(creditCard: CreditCard): Promise<CreditCard> {
    return await CreditCard.create(creditCard);
  }

  public async update(
    userId: string,
    id: string,
    creditCard: any
  ): Promise<CreditCard | null> {
    await CreditCard.update(creditCard, {
      where: {
        userId,
        id,
      },
    });

    return await CreditCard.findByPk(id);
  }

  public async delete(userId: string, id: string): Promise<void> {
    await CreditCard.destroy({
      where: { userId, id },
    });
  }
}
