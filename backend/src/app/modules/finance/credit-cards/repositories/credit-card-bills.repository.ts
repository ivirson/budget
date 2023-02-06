import CreditCardBill from "../models/credit-card-bill.model";

export default class CreditCardBillsRepository {
  public async findAll(creditCardId: string): Promise<CreditCardBill[]> {
    return await CreditCardBill.findAll({
      where: {
        creditCardId,
      },
    });
  }

  public async findById(id: string): Promise<CreditCardBill | null> {
    return await CreditCardBill.findByPk(id);
  }

  public async save(creditCard: CreditCardBill): Promise<CreditCardBill> {
    return await CreditCardBill.create(creditCard);
  }

  public async update(
    id: string,
    creditCard: any
  ): Promise<CreditCardBill | null> {
    await CreditCardBill.update(creditCard, {
      where: {
        id,
      },
    });

    return await CreditCardBill.findByPk(id);
  }

  public async delete(id: string): Promise<void> {
    await CreditCardBill.destroy({
      where: { id },
    });
  }
}
