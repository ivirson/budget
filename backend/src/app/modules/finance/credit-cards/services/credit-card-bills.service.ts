import { AppError } from "../../../../shared/models/error.model";
import CreditCardBill from "../models/credit-card-bill.model";
import CreditCardBillsRepository from "../repositories/credit-card-bills.repository";

const creditCardBillsRepository = new CreditCardBillsRepository();

export default class CreditCardBillsService {
  public async findAll(cardId: string): Promise<CreditCardBill[]> {
    return await creditCardBillsRepository.findAll(cardId);
  }

  public async findById(cardId: string): Promise<CreditCardBill | null> {
    const creditCard = await creditCardBillsRepository.findById(cardId);
    if (!creditCard) {
      throw new AppError("Credit card bill not found");
    }

    return creditCard;
  }

  public async save(cardId: string): Promise<CreditCardBill> {
    // To do - Implement creation of next bills
    const creditCard: Partial<CreditCardBill> = {
      creditCardId: cardId,
    };
    return await creditCardBillsRepository.save(creditCard as CreditCardBill);
  }

  public async update(
    cardId: string,
    creditCard: CreditCardBill
  ): Promise<CreditCardBill | null> {
    const billExist = await creditCardBillsRepository.findById(cardId);
    if (!billExist) {
      throw new AppError("Credit card bill not found");
    }

    return await creditCardBillsRepository.update(cardId, creditCard);
  }

  public async delete(cardId: string): Promise<void> {
    const creditCardExist = await creditCardBillsRepository.findById(cardId);
    if (!creditCardExist) {
      throw new AppError("Credit card bill not found");
    }

    await creditCardBillsRepository.delete(cardId);
  }
}
