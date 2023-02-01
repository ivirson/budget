import { AppError } from "../../../../shared/models/error.model";
import UsersRepository from "../../../core/users/repositories/users.repository";
import BankAccount from "../models/bank-account.model";
import BankAccountsRepository from "../repositories/bank-accounts.repository";

const bankAccountsRepository = new BankAccountsRepository();
const usersRepository = new UsersRepository();

export default class BankAccountsService {
  public async findAll(userId: string): Promise<BankAccount[]> {
    const user = await usersRepository.findById(userId);
    if (!user) {
      throw new AppError("User not found");
    }
    return await bankAccountsRepository.findAll(userId);
  }

  public async findById(
    userId: string,
    bankAccountId: string
  ): Promise<BankAccount | null> {
    const user = await usersRepository.findById(userId);
    if (!user) {
      throw new AppError("User not found");
    }

    const bankAccount = await bankAccountsRepository.findById(
      userId,
      bankAccountId
    );
    if (!bankAccount) {
      throw new AppError("Bank Account not found");
    }

    return bankAccount;
  }

  public async save(userId: string, bankAccount: any): Promise<BankAccount> {
    const user = await usersRepository.findById(userId);
    if (!user) {
      throw new AppError("User not found");
    }

    bankAccount.userId = userId;
    return await bankAccountsRepository.save(bankAccount);
  }

  public async update(
    userId: string,
    bankAccountId: string,
    bankAccount: BankAccount
  ): Promise<BankAccount | null> {
    const user = await usersRepository.findById(userId);
    if (!user) {
      throw new AppError("User not found");
    }

    const bankAccountExist = await bankAccountsRepository.findById(
      userId,
      bankAccountId
    );
    if (!bankAccountExist) {
      throw new AppError("Bank Account not found");
    }

    return await bankAccountsRepository.update(
      userId,
      bankAccountId,
      bankAccount
    );
  }

  public async delete(userId: string, bankAccountId: string): Promise<void> {
    const user = await usersRepository.findById(userId);
    if (!user) {
      throw new AppError("User not found");
    }

    const bankAccountExist = await bankAccountsRepository.findById(
      userId,
      bankAccountId
    );
    if (!bankAccountExist) {
      throw new AppError("Bank Account not found");
    }

    await bankAccountsRepository.delete(userId, bankAccountId);
  }
}
