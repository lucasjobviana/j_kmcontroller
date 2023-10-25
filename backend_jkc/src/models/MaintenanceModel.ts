import BaseModel from './BaseModel';
import SequelizeMaintenanceModel from '../database/models/SequelizeMaintenanceModel';
import { TMaintenance } from '../interfaces';
import { Op } from 'sequelize';

export default class MaintenanceModel extends BaseModel<TMaintenance>{
  constructor(
  ) { super(SequelizeMaintenanceModel,['id','initialDate','endDate','workshopId','vehicleId','description'])  }

  public async findAllLikeByFieldName(fieldName='name', searchValue = "",  fields = this.propNames): Promise<TMaintenance[]> {

    return SequelizeMaintenanceModel.findAll({
      where: {
        [fieldName]: {
          [Op.like]: `%${searchValue}%`,
        }
      },
      include: ['workshop','vehicle']
    });
  }
  
} 