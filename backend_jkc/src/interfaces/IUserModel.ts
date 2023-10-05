import { TUser } from './types/TUser';

export interface IUserModel {
  findAll(): Promise<TUser[]>,
  login(email:string): Promise<TUser>,
}
