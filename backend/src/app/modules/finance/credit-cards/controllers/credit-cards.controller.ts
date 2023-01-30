import { Request, Response } from "express";
import { Error } from "sequelize";
import { AppError } from "../../../../shared/models/error.model";
import CreditCardsService from "../services/credit-cards.service";

const creditCardsService = new CreditCardsService();

export default class CreditCardsController {
  /**
   * @swagger
   * /users/{:id}/credit-cards:
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
      const creditCards = await creditCardsService.findAll();
      return response.status(200).json(creditCards);
    } catch (error: Error | any) {
      return response
        .status(500)
        .json(
          new AppError(
            "There was an error querying the data.",
            error.errors ? error.errors.map((e: Error) => e.message) : error
          )
        );
    }
  }

  /**
   * @swagger
   * /users/{:id}/credit-cards/{:id}:
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
    const { id } = request.params;
    try {
      const creditCard = await creditCardsService.findById(id);

      if (!creditCard) {
        return response
          .status(404)
          .json(new AppError("Credit card not found."));
      }

      return response.status(200).json(creditCard);
    } catch (error: Error | any) {
      return response
        .status(500)
        .json(
          new AppError(
            "There was an error querying the data.",
            error.errors ? error.errors.map((e: Error) => e.message) : error
          )
        );
    }
  }

  /**
   * @swagger
   * /users/{:id}/credit-cards:
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
    const creditCard = request.body;

    try {
      const createdCreditCard = await creditCardsService.save(creditCard);
      return response.status(201).json(createdCreditCard);
    } catch (error: Error | any) {
      return response
        .status(500)
        .json(
          new AppError(
            "There was an error saving the data.",
            error.errors ? error.errors.map((e: Error) => e.message) : error
          )
        );
    }
  }

  /**
   * @swagger
   * /users/{:id}/credit-cards/{:id}:
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
    const { id } = request.params;
    const creditCard = request.body;

    try {
      const creditCardExist = await creditCardsService.findById(id);

      if (!creditCardExist) {
        return response
          .status(404)
          .json(new AppError("Credit Card not found."));
      }

      const updatedCreditCard = await creditCardsService.update(id, creditCard);
      return response.status(200).json(updatedCreditCard);
    } catch (error: Error | any) {
      return response
        .status(500)
        .json(
          new AppError(
            "There was an error updating the data.",
            error.errors ? error.errors.map((e: Error) => e.message) : error
          )
        );
    }
  }

  /**
   * @swagger
   * /users/{:id}/credit-cards/{:id}:
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
    const { id } = request.params;

    try {
      await creditCardsService.delete(id);
      return response.status(200).json();
    } catch (error: Error | any) {
      return response
        .status(500)
        .json(
          new AppError(
            "There was an error removing the data.",
            error.errors ? error.errors.map((e: Error) => e.message) : error
          )
        );
    }
  }
}
