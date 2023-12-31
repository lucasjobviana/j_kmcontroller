import BaseModel from '../models/BaseModel';

export default abstract class BaseService<T> {
  constructor(
    private model: BaseModel<T>, 
  ) { }

  public async findAllLikeByFieldName(fieldName:string='name',searchValue:string) {
    const data = await this.model.findAllLikeByFieldName(fieldName,searchValue);
    return data;
  }

  public async delete(id:string) { 
    await this.model.delete(id); 
  }

  public async update(id:string, obj:T){
    const updatedObj = await this.model.update(id, obj);
    return updatedObj;
  }

  public async create(obj:T){
    const createdVehicle = await this.model.create(obj);
    return createdVehicle; 
  }
}
