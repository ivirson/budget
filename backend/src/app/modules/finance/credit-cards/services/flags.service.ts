import { AppError } from "../../../../shared/models/error.model";
import Flag from "../models/flag.model";
import FlagsRepository from "../repositories/flags.repository";

const flagsRepository = new FlagsRepository();

export default class FlagsService {
  public async findAll(): Promise<Flag[]> {
    return await flagsRepository.findAll();
  }

  public async findById(id: string): Promise<Flag | null> {
    const flag = await flagsRepository.findById(id);
    if (!flag) {
      throw new AppError("Flag not found");
    }

    return flag;
  }
}
