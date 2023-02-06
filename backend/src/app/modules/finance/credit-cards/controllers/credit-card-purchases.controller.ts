import { Request, Response } from "express";
import { AppError } from "../../../../shared/models/error.model";
import CreditCardPurchasesService from "../services/credit-card-purchases.service";

const purchasesService = new CreditCardPurchasesService();

export default class CreditCardPurchasesController {
  /**
   * @swagger
   * /credit-cards/{:cardId}/purchases:
   *  get:
   *    tags:
   *      - CreditCardPurchase
   *    summary: Get purchases from card
   *    responses:
   *      200:
   *        description: Returns all purchases from a card
   *        content:
   *          application/json:
   *            schema:
   *              type: array
   *              items:
   *                $ref: '#/components/schemas/CreditCardPurchase'
   */
  public async findAll(
    request: Request,
    response: Response
  ): Promise<Response> {
    try {
      const { cardId } = request.params;
      const purchases = await purchasesService.findAll(cardId);
      return response.status(200).json(purchases);
    } catch (error: AppError | any) {
      return response.status(error.statusCode || 500).json(error);
    }
  }

  /**
   * @swagger
   * /credit-cards/{:cardId}/purchases/{:purchaseId}:
   *  get:
   *    tags:
   *      - CreditCardPurchase
   *    summary: Get creditCard by id
   *    parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         description: Numeric ID of the creditCard to retrieve.
   *         schema:
   *           type: integer
   *    responses:
   *      200:
   *        description: Returns a creditCard
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/CreditCardPurchase'
   *      404:
   *        description: Credit Card not found
   */
  public async findById(
    request: Request,
    response: Response
  ): Promise<Response> {
    try {
      const { purchaseId } = request.params;
      const creditCard = await purchasesService.findById(purchaseId);
      return response.status(200).json(creditCard);
    } catch (error: AppError | any) {
      return response.status(error.statusCode || 500).json(error);
    }
  }

  /**
   * @swagger
   * /credit-cards/{:cardId}/purchases:
   *   post:
   *     tags:
   *       - CreditCardPurchase
   *     summary: Save creditCard
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/NewCreditCardPurchase'
   *     responses:
   *       201:
   *         description: Created
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/CreditCardPurchase'
   */
  public async save(request: Request, response: Response): Promise<Response> {
    try {
      const { cardId } = request.params;
      const creditCard = request.body;
      const createdCreditCardPurchase = await purchasesService.save(
        cardId,
        creditCard
      );
      return response.status(201).json(createdCreditCardPurchase);
    } catch (error: AppError | any) {
      return response.status(error.statusCode || 500).json(error);
    }
  }

  /**
   * @swagger
   * /credit-cards/{:cardId}/purchases/{:purchaseId}:
   *   put:
   *     tags:
   *       - CreditCardPurchase
   *     summary: Update creditCard
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         description: Numeric ID of the creditCard to update.
   *         schema:
   *           type: integer
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/CreditCardPurchase'
   *     responses:
   *       200:
   *         description: Updated
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/CreditCardPurchase'
   *       404:
   *         description: CreditCardPurchase not found
   */
  public async update(request: Request, response: Response): Promise<Response> {
    try {
      const { purchaseId } = request.params;
      const creditCard = request.body;
      const updatedCreditCardPurchase = await purchasesService.update(
        purchaseId,
        creditCard
      );
      return response.status(200).json(updatedCreditCardPurchase);
    } catch (error: AppError | any) {
      return response.status(error.statusCode || 500).json(error);
    }
  }

  /**
   * @swagger
   * /credit-cards/{:cardId}/purchases/{:purchaseId}:
   *   delete:
   *     tags:
   *       - CreditCardPurchase
   *     summary: Delete creditCard
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         description: Numeric ID of the creditCard to delete.
   *         schema:
   *           type: integer
   *     responses:
   *       200:
   *         description: Deleted
   */
  public async delete(request: Request, response: Response): Promise<Response> {
    const { purchaseId } = request.params;

    try {
      await purchasesService.delete(purchaseId);
      return response.status(200).json();
    } catch (error: AppError | any) {
      return response.status(error.statusCode || 500).json(error);
    }
  }
}
