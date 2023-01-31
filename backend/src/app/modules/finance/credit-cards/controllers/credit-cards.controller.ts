import { Request, Response } from "express";
import { Error } from "sequelize";
import { AppError } from "../../../../shared/models/error.model";
import CreditCardsService from "../services/credit-cards.service";

const creditCardsService = new CreditCardsService();

export default class CreditCardsController {
  /**
   * @swagger
   * /users/{:userId}/credit-cards:
   *  get:
   *    tags:
   *      - CreditCard
   *    summary: Get credit cards from user
   *    responses:
   *      200:
   *        description: Returns all credit cards from a user
   *        content:
   *          application/json:
   *            schema:
   *              type: array
   *              items:
   *                $ref: '#/components/schemas/CreditCard'
   */
  public async findAll(
    request: Request,
    response: Response
  ): Promise<Response> {
    try {
      const { userId } = request.params;
      const creditCards = await creditCardsService.findAll(userId);
      return response.status(200).json(creditCards);
    } catch (error: AppError | any) {
      return response.status(error.statusCode || 500).json(error);
    }
  }

  /**
   * @swagger
   * /users/{:userId}/credit-cards/{:cardId}:
   *  get:
   *    tags:
   *      - CreditCard
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
   *              $ref: '#/components/schemas/CreditCard'
   *      404:
   *        description: Credit Card not found
   */
  public async findById(
    request: Request,
    response: Response
  ): Promise<Response> {
    try {
      const { userId, cardId } = request.params;
      const creditCard = await creditCardsService.findById(userId, cardId);
      return response.status(200).json(creditCard);
    } catch (error: AppError | any) {
      return response.status(error.statusCode || 500).json(error);
    }
  }

  /**
   * @swagger
   * /users/{:userId}/credit-cards:
   *   post:
   *     tags:
   *       - CreditCard
   *     summary: Save creditCard
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/NewCreditCard'
   *     responses:
   *       201:
   *         description: Created
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/CreditCard'
   */
  public async save(request: Request, response: Response): Promise<Response> {
    try {
      const { userId } = request.params;
      const creditCard = request.body;
      const createdCreditCard = await creditCardsService.save(
        userId,
        creditCard
      );
      return response.status(201).json(createdCreditCard);
    } catch (error: AppError | any) {
      return response.status(error.statusCode || 500).json(error);
    }
  }

  /**
   * @swagger
   * /users/{:userId}/credit-cards/{:cardId}:
   *   put:
   *     tags:
   *       - CreditCard
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
   *             $ref: '#/components/schemas/CreditCard'
   *     responses:
   *       200:
   *         description: Updated
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/CreditCard'
   *       404:
   *         description: CreditCard not found
   */
  public async update(request: Request, response: Response): Promise<Response> {
    try {
      const { userId, cardId } = request.params;
      const creditCard = request.body;
      const updatedCreditCard = await creditCardsService.update(
        userId,
        cardId,
        creditCard
      );
      return response.status(200).json(updatedCreditCard);
    } catch (error: AppError | any) {
      return response.status(error.statusCode || 500).json(error);
    }
  }

  /**
   * @swagger
   * /users/{:userId}/credit-cards/{:cardId}:
   *   delete:
   *     tags:
   *       - CreditCard
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
    const { userId, cardId } = request.params;

    try {
      await creditCardsService.delete(userId, cardId);
      return response.status(200).json();
    } catch (error: AppError | any) {
      return response.status(error.statusCode || 500).json(error);
    }
  }
}
