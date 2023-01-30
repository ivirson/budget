import CreditCard from "../models/credit-card.model";
import CreditCardsRepository from "../repositories/credit-card.repository";

const creditCardsRepository = new CreditCardsRepository();

export default class CreditCardsService {
  public async findAll(): Promise<CreditCard[]> {
    return await creditCardsRepository.findAll();
  }

  public async findById(id: string): Promise<CreditCard | null> {
    return await creditCardsRepository.findById(id);
  }

  public async save(creditCard: any): Promise<CreditCard> {
    return await creditCardsRepository.save(creditCard);
  }

  public async update(
    id: string,
    creditCard: CreditCard
  ): Promise<CreditCard | null> {
    return await creditCardsRepository.update(id, creditCard);
  }

  public async delete(id: string): Promise<void> {
    await creditCardsRepository.delete(id);
  }
}
