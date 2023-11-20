import { Op } from 'sequelize';

export default class  BaseModel<T> {
  protected model: any;
  protected propNames: string[];

  constructor(model: any, propNames: string[]=['id']) {
    this.model = model;
    this.propNames = propNames;
  }

  private filterToSelectedFields = (obj:any, fields:string[]) => {
    return obj.map((dbObj:any) => {
      const obj:any = {};
      fields.forEach(propName => {
        obj[propName] = dbObj[propName];
      });
      return obj;
    });
  };

  private async findAll(whereOption = {}, fields = this.propNames): Promise<T[]> {
    const dbData = await this.model.findAll({ ...whereOption });
    return this.filterToSelectedFields(dbData, fields);
  }

  public async findAllLikeByFieldName(fieldName='name', searchValue = '', fields = this.propNames): Promise<T[]> {
    return this.findAll({
      where: {
        [fieldName]: {
          [Op.like]: `%${searchValue}%`,
        }
      },
    }, fields);
  }

  // public async findOne(id:string, fields = this.propNames): Promise<T> {
  //   const dbData = await this.model.findOne({where: {id}});
  //   return this.filterToSelectedFields([dbData], fields)[0];
  // }

  public async delete(id:string): Promise<void> { 
    await this.model.destroy({where: {id}});
  }

  public async update(id:string, obj:T): Promise<T> {
    const updatedObj = await this.model.update(obj, {where: {id}});
    if(updatedObj[0] === 0) {
      throw new Error(`${this.model} not found`);
    }
    return obj;
  } 

  public async create(obj:T): Promise<T> {
    const createdObj = await this.model.create(obj);
    return createdObj;
  }
}