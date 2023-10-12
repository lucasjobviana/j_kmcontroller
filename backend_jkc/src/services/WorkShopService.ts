import { TWorkShop } from '../interfaces/types/TWorkShop';
import WorkShopModel from '../models/WorkShopModel';
import { IWorkShopModel } from '../interfaces/IWorkShopModel';

export default class WorkShopService {
  constructor(
    private workshopModel: IWorkShopModel = new WorkShopModel(),
  ) { }

  public async getAll(): Promise<TWorkShop[]> {
    const workshop = await this.workshopModel.findAll({});
    return workshop;
  }

  public async findAllLikeByName(name:string): Promise<TWorkShop[]> {
    const workshop = await this.workshopModel.findAllLikeByName(name);
    return workshop;
  }

  public async deleteWorkShop(id:string): Promise<void> {
    await this.workshopModel.deleteWorkShop(id); 
  }

  public async updateWorkShop(id:string, workShop:TWorkShop): Promise<TWorkShop> {
    const updatedWorkShop = await this.workshopModel.updateWorkShop(id, workShop);
    return updatedWorkShop;
  }

  public async createWorkShop(workShop:TWorkShop): Promise<TWorkShop> {
    const createdWorkShop = await this.workshopModel.createWorkShop(workShop);
    return createdWorkShop; 
  }
}
