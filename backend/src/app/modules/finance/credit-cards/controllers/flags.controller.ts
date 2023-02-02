import { Request, Response } from "express";
import { AppError } from "../../../../shared/models/error.model";
import FlagsService from "../services/flags.service";

const flagsService = new FlagsService();

export default class FlagsController {
  /**
   * @swagger
   * /flags:
   *  get:
   *    tags:
   *      - Flag
   *    summary: Get all flags
   *    responses:
   *      200:
   *        description: Returns all flags
   *        content:
   *          application/json:
   *            schema:
   *              type: array
   *              items:
   *                $ref: '#/components/schemas/Flag'
   */
  public async findAll(
    request: Request,
    response: Response
  ): Promise<Response> {
    try {
      const flags = await flagsService.findAll();
      return response.status(200).json(flags);
    } catch (error: AppError | any) {
      return response.status(error.statusCode || 500).json(error);
    }
  }

  /**
   * @swagger
   * /flags/{:id}:
   *  get:
   *    tags:
   *      - Flag
   *    summary: Get flag by id
   *    parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         description: Numeric ID of the flag to retrieve.
   *         schema:
   *           type: integer
   *    responses:
   *      200:
   *        description: Returns a flag
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/Flag'
   *      404:
   *        description: Flag not found
   */
  public async findById(
    request: Request,
    response: Response
  ): Promise<Response> {
    try {
      const { id } = request.params;
      const flag = await flagsService.findById(id);
      return response.status(200).json(flag);
    } catch (error: AppError | any) {
      return response.status(error.statusCode || 500).json(error);
    }
  }
}
