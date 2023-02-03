import { AppError } from "../../../../shared/models/error.model";
import UsersRepository from "../../../core/users/repositories/users.repository";
import CreditCard from "../models/credit-card.model";
import CreditCardsRepository from "../repositories/credit-card.repository";

const creditCardsRepository = new CreditCardsRepository();
const usersRepository = new UsersRepository();

export default class CreditCardsService {
  public async findAll(userId: string): Promise<CreditCard[]> {
    const user = await usersRepository.findById(userId);
    if (!user) {
      throw new AppError("User not found");
    }
    return await creditCardsRepository.findAll(userId);
  }

  public async findById(
    userId: string,
    cardId: string
  ): Promise<CreditCard | null> {
    const user = await usersRepository.findById(userId);
    if (!user) {
      throw new AppError("User not found");
    }

    const creditCard = await creditCardsRepository.findById(userId, cardId);
    if (!creditCard) {
      throw new AppError("Credit card not found");
    }

    return creditCard;
  }

  public async save(userId: string, creditCard: any): Promise<CreditCard> {
    const user = await usersRepository.findById(userId);
    if (!user) {
      throw new AppError("User not found");
    }

    creditCard.userId = userId;
    creditCard.availableLimit = creditCard.limit;

    const colorFirstCharacter = creditCard.color.substring(1, 2);
    creditCard.fontColor = isNaN(colorFirstCharacter) ? "#000000" : "#FFFFFF";

    return await creditCardsRepository.save(creditCard);
  }

  public async update(
    userId: string,
    cardId: string,
    creditCard: CreditCard
  ): Promise<CreditCard | null> {
    const user = await usersRepository.findById(userId);
    if (!user) {
      throw new AppError("User not found");
    }

    const creditCardExist = await creditCardsRepository.findById(
      userId,
      cardId
    );
    if (!creditCardExist) {
      throw new AppError("Credit card not found");
    }

    return await creditCardsRepository.update(userId, cardId, creditCard);
  }

  public async delete(userId: string, cardId: string): Promise<void> {
    const user = await usersRepository.findById(userId);
    if (!user) {
      throw new AppError("User not found");
    }

    const creditCardExist = await creditCardsRepository.findById(
      userId,
      cardId
    );
    if (!creditCardExist) {
      throw new AppError("Credit card not found");
    }

    await creditCardsRepository.delete(userId, cardId);
  }
}
