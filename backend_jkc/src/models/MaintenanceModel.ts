import BaseModel from './BaseModel';
import SequelizeMaintenanceModel from '../database/models/SequelizeMaintenanceModel';
import { TMaintenance } from '../interfaces';
import { Op } from 'sequelize';
import SequelizeServiceTaskModel from '../database/models/SequelizeServiceTaskModel';
import MaintenanceServiceAssociation from '../database/models/SequelizeMaintenanceServiceAssModel';

export default class MaintenanceModel extends BaseModel<TMaintenance>{
  constructor(
  ) { super(SequelizeMaintenanceModel,['id','initialDate','endDate','workshopId','vehicleId','description']);  }

  public async findAllLikeByFieldName(fieldName='name', searchValue = '',  fields = this.propNames): Promise<TMaintenance[]> {
    const a = await SequelizeMaintenanceModel.findAll({
      where: {
        [fieldName]: {
          [Op.like]: `%${searchValue}%`,
        }
      },
      include: [
        { model: SequelizeServiceTaskModel, as: 'services', attributes: ['id','name','description'] },
      ],
    });
    return a;
  }

  public async update(id:string, obj:TMaintenance): Promise<TMaintenance> {
    const services = await SequelizeServiceTaskModel.findAll(
      { where: { id: obj.services?.map((s)=>s.id) } },
    );

    if(services.length !== obj.services?.length) {
      throw new Error('One or more Service not found');
    }

    const transaction = await SequelizeMaintenanceModel.sequelize?.transaction();
    try {
      const data = services.map((s)=>s.dataValues);
      await this.model.update(obj, {where: {id}}, { transaction:transaction });
      await MaintenanceServiceAssociation.destroy({ where: { maintenanceId: id }, transaction: transaction });
      await MaintenanceServiceAssociation.bulkCreate(
        data.map((s)=>({maintenanceId: Number(id), serviceId: s.id})),
        { transaction:transaction }
      );

      await transaction?.commit();
      return obj;
    } catch (error) {
      await transaction?.rollback(); throw error;
    }
  } 
  
} 