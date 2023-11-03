import BaseModel from './BaseModel';
import SequelizeMaintenanceModel from '../database/models/SequelizeMaintenanceModel';
import { TMaintenance } from '../interfaces';
import { Op } from 'sequelize';
import SequelizeServiceTaskModel from '../database/models/SequelizeServiceTaskModel';
// import MaintenanceServiceAssociation from '../database/models/SequelizeMaintenanceServiceAssModel';

export default class MaintenanceModel extends BaseModel<TMaintenance>{
  constructor(
  ) { super(SequelizeMaintenanceModel,['id','initialDate','endDate','workshopId','vehicleId','description'])  }

  public async findAllLikeByFieldName(fieldName='name', searchValue = "",  fields = this.propNames): Promise<TMaintenance[]> {
    console.log('chamando certo')
    const a = await SequelizeMaintenanceModel.findAll({
      where: {
        [fieldName]: {
          [Op.like]: `%${searchValue}%`,
        }
      },
      include: [
        { model: SequelizeServiceTaskModel, as: 'services', attributes: ['id','name','description'] },
      ]
    });
    console.log(a.map((m)=>m.dataValues))
    return a;
  }
  
} 