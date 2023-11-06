import BaseModel from './BaseModel';
import SequelizeMaintenanceModel from '../database/models/SequelizeMaintenanceModel';
import { TMaintenance } from '../interfaces';
import { Op } from 'sequelize';
import SequelizeServiceTaskModel from '../database/models/SequelizeServiceTaskModel';
import MaintenanceServiceAssociation from '../database/models/SequelizeMaintenanceServiceAssModel';

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

  public async update(id:string, obj:TMaintenance): Promise<TMaintenance> {
    console.log('cheguei no update do model do maintenance')
    const services = await SequelizeServiceTaskModel.findAll(
      { where: { id: obj.services?.map((s)=>s.id) } },
    );
    console.log(id, obj)
    console.log('services')
    console.log(services.map((s)=>s.dataValues))
    if(services.length !== obj.services?.length) {
      throw new Error('One or more Service not found');
    }

    const transaction = await SequelizeMaintenanceModel.sequelize?.transaction();
    try {
      const data = services.map((s)=>s.dataValues);
      console.log('vou criar a association')
      console.log( data.map((s)=>({maintenanceId: id, serviceId: s.id})))
      const updatedObj = await this.model.update(obj, {where: {id}}, { transaction:transaction });
      await MaintenanceServiceAssociation.destroy({ where: { maintenanceId: id }, transaction: transaction });
      await MaintenanceServiceAssociation.bulkCreate(
        data.map((s)=>({maintenanceId: Number(id), serviceId: s.id})),
        { transaction:transaction }
        );console.log('ja criou a association')

      console.log('ja atualizou o maintenance')
      console.log(updatedObj)
     
      await transaction?.commit();
      console.log('deu tudo certo')
      return obj;
    } catch (error) {
      await transaction?.rollback(); throw error;
    }
  } 
  
} 