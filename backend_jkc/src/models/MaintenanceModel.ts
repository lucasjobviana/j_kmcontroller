import BaseModel from './BaseModel';
import SequelizeMaintenanceModel from '../database/models/SequelizeMaintenanceModel';
import { ISearchAbleByVehicleNameAndWorkshopName, ISearchAbleByVehicleNameOrWorkshopName, TMaintenance } from '../interfaces';
import { Op } from 'sequelize';
import SequelizeServiceTaskModel from '../database/models/SequelizeServiceTaskModel';
import MaintenanceServiceAssociation from '../database/models/SequelizeMaintenanceServiceAssModel';
import SequelizeFleetModel from '../database/models/SequelizeFleetModel';
import SequelizeWorkShopModel from '../database/models/SequelizeWorkShopModel';

export default class MaintenanceModel extends BaseModel<TMaintenance> implements ISearchAbleByVehicleNameOrWorkshopName, ISearchAbleByVehicleNameAndWorkshopName{
  constructor(
  ) { super(SequelizeMaintenanceModel,['id','initialDate','endDate','workshopId','vehicleId','description']);  }
 
  public async findAllLikeByVehicleNameAndWorkshopName(vehicleName: string, workshopName:string): Promise<TMaintenance[]> {
    const maintenances = await this.model.findAll({
      include: [
        { model: SequelizeServiceTaskModel, as: 'services', attributes: ['id','name','description'] },
        { model: SequelizeFleetModel, as: 'vehicle', attributes: ['id','name'] },
        { model: SequelizeWorkShopModel, as: 'workshop', attributes: ['id','name']}
      ],
      where: {
        [Op.and]: [
          { '$vehicle.name$': { [Op.like]: `%${vehicleName.trim()}%` } },
          { '$workshop.name$': { [Op.like]: `%${workshopName.trim()}%` } },
        ]
      },
    });

    const data = this.filterToSelectedFields(maintenances, ['id','initialDate','endDate','workshopId','vehicleId','description','services','vehicle','workshop']);
    return data;
  }

  // public async findAllLikeByFieldName(fieldName='name', searchValue = '',  fields = this.propNames): Promise<TMaintenance[]> {
  //   const maintenances = await this.model.findAll({
  //     include: [
  //       { model: SequelizeServiceTaskModel, as: 'services', attributes: ['id','name','description'] },
  //     ],
  //     where: {
  //       [fieldName]: {
  //         [Op.like]: `%${searchValue}%`,
  //       }
  //     },
  //   });
  //   const data = this.filterToSelectedFields(maintenances, ['id','initialDate','endDate','workshopId','vehicleId','description','services'] );
  //   return data;
  // }

  public async findAllLikeByVehicleNameOrWorkshopName(name:string=''): Promise<TMaintenance[]> {
    const maintenances = await this.model.findAll({
      include: [
        { model: SequelizeServiceTaskModel, as: 'services', attributes: ['id','name','description'] },
        { model: SequelizeFleetModel, as: 'vehicle', attributes: ['id','name'] },
        { model: SequelizeWorkShopModel, as: 'workshop', attributes: ['id','name']}
      ],
      where: {
        [Op.or]: [
          { '$vehicle.name$': { [Op.like]: `%${name.trim()}%` } },
        ]
      },
    });

    const data = this.filterToSelectedFields(maintenances, ['id','initialDate','endDate','workshopId','vehicleId','description','services','vehicle','workshop']);
    console.log('data: ',data);
    // console.log('maintenances: ',maintenances);
    
    return data;
  }

   
  public async update(id:string, obj:TMaintenance): Promise<TMaintenance> {    
    const services = await SequelizeServiceTaskModel.findAll(
      { where: { id: obj.services?.map((s)=>s.id) } },
    );
     
    if(services.length !== obj.services?.length) {
      throw new Error('One or more Service not found');
    }

    const transaction = await this.model.sequelize?.transaction();
    try {
      const services = obj.maintenance_service_association;
      await this.model.update(obj, {where: {id}}, { transaction:transaction });
      await MaintenanceServiceAssociation.destroy({ where: { maintenanceId: id }, transaction: transaction });
      services && await MaintenanceServiceAssociation.bulkCreate(
        services?.map((s) => ({
          maintenanceId: Number(id),
          serviceId: s.serviceId,
          totalPrice: s.totalPrice,
          description: s.description,
        })), { transaction: transaction },
      );


      await transaction?.commit();
      return obj;'';
    } catch (error) {
      await transaction?.rollback(); throw error;
    }
  } 
} 