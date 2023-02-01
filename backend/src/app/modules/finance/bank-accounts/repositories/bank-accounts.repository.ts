import BankAccount from "../models/bank-account.model";

export default class BankAccountsRepository {
  public async findAll(userId: string): Promise<BankAccount[]> {
    return await BankAccount.findAll({
      where: {
        userId,
      },
    });
  }

  public async findById(
    userId: string,
    id: string
  ): Promise<BankAccount | null> {
    return await BankAccount.findOne({
      where: {
        userId,
        id,
      },
    });
  }

  public async save(bankAccount: BankAccount): Promise<BankAccount> {
    return await BankAccount.create(bankAccount);
  }

  public async update(
    userId: string,
    id: string,
    bankAccount: any
  ): Promise<BankAccount | null> {
    await BankAccount.update(bankAccount, {
      where: {
        userId,
        id,
      },
    });

    return await BankAccount.findByPk(id);
  }

  public async delete(userId: string, id: string): Promise<void> {
    await BankAccount.destroy({
      where: { userId, id },
    });
  }
}
