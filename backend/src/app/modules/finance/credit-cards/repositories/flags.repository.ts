import Flag from "../models/flag.model";

export default class FlagsRepository {
  public async findAll(): Promise<Flag[]> {
    return await Flag.findAll();
  }

  public async findById(id: string): Promise<Flag | null> {
    return await Flag.findByPk(id);
  }
}
