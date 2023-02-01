import { Request, Response } from "express";
import { AppError } from "../../../../shared/models/error.model";
import BankAccountsService from "../services/bank-accounts.service";

const bankAccountsService = new BankAccountsService();

export default class BankAccountsController {
  /**
   * @swagger
   * /users/{:userId}/bank-accounts:
   *  get:
   *    tags:
   *      - BankAccount
   *    summary: Get bank accounts from user
   *    responses:
   *      200:
   *        description: Returns all bank accounts from a user
   *        content:
   *          application/json:
   *            schema:
   *              type: array
   *              items:
   *                $ref: '#/components/schemas/BankAccount'
   */
  public async findAll(
    request: Request,
    response: Response
  ): Promise<Response> {
    try {
      const { userId } = request.params;
      const bankAccounts = await bankAccountsService.findAll(userId);
      return response.status(200).json(bankAccounts);
    } catch (error: AppError | any) {
      return response.status(error.statusCode || 500).json(error);
    }
  }

  /**
   * @swagger
   * /users/{:userId}/bank-accounts/{:bankAccountId}:
   *  get:
   *    tags:
   *      - BankAccount
   *    summary: Get bank account by id
   *    parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         description: Numeric ID of the bank account to retrieve.
   *         schema:
   *           type: integer
   *    responses:
   *      200:
   *        description: Returns a bank account
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/BankAccount'
   *      404:
   *        description: Bank Account not found
   */
  public async findById(
    request: Request,
    response: Response
  ): Promise<Response> {
    try {
      const { userId, bankAccountId } = request.params;
      const bankAccount = await bankAccountsService.findById(
        userId,
        bankAccountId
      );
      return response.status(200).json(bankAccount);
    } catch (error: AppError | any) {
      return response.status(error.statusCode || 500).json(error);
    }
  }

  /**
   * @swagger
   * /users/{:userId}/bank-accounts:
   *   post:
   *     tags:
   *       - BankAccount
   *     summary: Save bank account
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/NewBankAccount'
   *     responses:
   *       201:
   *         description: Created
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/BankAccount'
   */
  public async save(request: Request, response: Response): Promise<Response> {
    try {
      const { userId } = request.params;
      const bankAccount = request.body;
      const createdBankAccount = await bankAccountsService.save(
        userId,
        bankAccount
      );
      return response.status(201).json(createdBankAccount);
    } catch (error: AppError | any) {
      return response.status(error.statusCode || 500).json(error);
    }
  }

  /**
   * @swagger
   * /users/{:userId}/bank-accounts/{:bankAccountId}:
   *   put:
   *     tags:
   *       - BankAccount
   *     summary: Update bank account
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         description: Numeric ID of the bank account to update.
   *         schema:
   *           type: integer
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/BankAccount'
   *     responses:
   *       200:
   *         description: Updated
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/BankAccount'
   *       404:
   *         description: BankAccount not found
   */
  public async update(request: Request, response: Response): Promise<Response> {
    try {
      const { userId, bankAccountId } = request.params;
      const bankAccount = request.body;
      const updatedBankAccount = await bankAccountsService.update(
        userId,
        bankAccountId,
        bankAccount
      );
      return response.status(200).json(updatedBankAccount);
    } catch (error: AppError | any) {
      return response.status(error.statusCode || 500).json(error);
    }
  }

  /**
   * @swagger
   * /users/{:userId}/bank-accounts/{:bankAccountId}:
   *   delete:
   *     tags:
   *       - BankAccount
   *     summary: Delete bank account
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         description: Numeric ID of the bank account to delete.
   *         schema:
   *           type: integer
   *     responses:
   *       200:
   *         description: Deleted
   */
  public async delete(request: Request, response: Response): Promise<Response> {
    const { userId, bankAccountId } = request.params;

    try {
      await bankAccountsService.delete(userId, bankAccountId);
      return response.status(200).json();
    } catch (error: AppError | any) {
      return response.status(error.statusCode || 500).json(error);
    }
  }
}
