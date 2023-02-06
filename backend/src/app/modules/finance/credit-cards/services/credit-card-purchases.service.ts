import { AppError } from "../../../../shared/models/error.model";
import CreditCardPurchase from "../models/credit-card-purchase.model";
import CreditCardPurchasesRepository from "../repositories/credit-card-purchases.repository";

const creditCardPurchasesRepository = new CreditCardPurchasesRepository();

export default class CreditCardPurchasesService {
  public async findAll(creditCardId: string): Promise<CreditCardPurchase[]> {
    return await creditCardPurchasesRepository.findAll(creditCardId);
  }

  public async findById(
    purchaseId: string
  ): Promise<CreditCardPurchase | null> {
    const creditCardPurchase = await creditCardPurchasesRepository.findById(
      purchaseId
    );
    if (!creditCardPurchase) {
      throw new AppError("Purchase not found");
    }

    return creditCardPurchase;
  }

  public async save(
    cardId: string,
    creditCardPurchase: CreditCardPurchase
  ): Promise<CreditCardPurchase> {
    creditCardPurchase.creditCardId = cardId;
    return await creditCardPurchasesRepository.save(creditCardPurchase);
  }

  public async update(
    purchaseId: string,
    creditCardPurchase: CreditCardPurchase
  ): Promise<CreditCardPurchase | null> {
    const purchaseExist = await creditCardPurchasesRepository.findById(
      purchaseId
    );
    if (!purchaseExist) {
      throw new AppError("Purchase not found");
    }

    return await creditCardPurchasesRepository.update(
      purchaseId,
      creditCardPurchase
    );
  }

  public async delete(purchaseId: string): Promise<void> {
    const purchaseExist = await creditCardPurchasesRepository.findById(
      purchaseId
    );
    if (!purchaseExist) {
      throw new AppError("Purchase not found");
    }

    await creditCardPurchasesRepository.delete(purchaseId);
  }
}
