import AppResponseError from '../AppResponseError';
import SequelizeUserModel from '../database/models/SequelizeUserModel';
import { TUser } from '../interfaces/types/TUser';
import { IUserModel } from '../interfaces/IUserModel';

export default class UserModel implements IUserModel {
  private model = SequelizeUserModel;

  async findAll(): Promise<TUser[]> {
    const dbData = await this.model.findAll();
    return dbData.map(({ id, username, role, password, email }) => (
      { id, username, role, password, email }
    ));
  }

  async login(email: string): Promise<TUser> {
    const dbData = await this.model.findOne({ where: { email } });
    if (!dbData) throw new AppResponseError('Invalid email or password');
    return dbData.dataValues;
  }
}
