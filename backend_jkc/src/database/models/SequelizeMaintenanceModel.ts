import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.';
import SequelizeWorkShopModel from './SequelizeWorkShopModel';
import SequelizeFleetModel from './SequelizeFleetModel';
// import MaintenanceServiceAssociation from './SequelizeMaintenanceServiceAssModel';
import SequelizeServiceTaskModel from './SequelizeServiceTaskModel';
import MaintenanceServiceAssociation from './SequelizeMaintenanceServiceAssModel';

class SequelizeMaintenanceModel extends Model<InferAttributes<SequelizeMaintenanceModel>,
InferCreationAttributes<SequelizeMaintenanceModel>> {
  declare id: CreationOptional<number>;
  declare description: string;
  declare initialDate: Date;
  declare endDate: Date;
  declare workshopId: number;
  declare vehicleId: number;
}

SequelizeMaintenanceModel.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  description: { type: DataTypes.STRING, allowNull: false, field: 'description' },
  initialDate: { type: DataTypes.DATE, allowNull: false, field: 'initial_date' },
  endDate: { type: DataTypes.DATE, allowNull: false, field: 'end_date' },
  
  workshopId: { type: DataTypes.INTEGER, allowNull: false, field: 'workshop_id',
    references: {
      model: 'workshops', key: 'id',
    },
  },
  vehicleId: { type: DataTypes.INTEGER, allowNull: false, field: 'vehicle_id',
    references: {
      model: 'vehicles', key: 'id',
    },
  },
}, {
  sequelize: db,
  modelName: 'maintenances',
  timestamps: false,
  underscored: true,
});

SequelizeMaintenanceModel.hasOne(
  SequelizeWorkShopModel,
  { foreignKey: 'id', sourceKey: 'workshopId', as: 'workshop' },
);

SequelizeWorkShopModel.belongsTo(
  SequelizeMaintenanceModel,
  { foreignKey: 'id', targetKey: 'workshopId', as: 'workshop' },
);

SequelizeMaintenanceModel.hasOne(
  SequelizeFleetModel,
  { foreignKey: 'id', sourceKey: 'vehicleId', as: 'vehicle' },
);

SequelizeFleetModel.belongsTo(
  SequelizeMaintenanceModel,
  { foreignKey: 'id', targetKey: 'vehicleId', as: 'vehicle' },
); 

SequelizeMaintenanceModel.belongsToMany(SequelizeServiceTaskModel, {
  through: MaintenanceServiceAssociation, // Modelo de associação
  // foreignKey: 'maintenanceId', // Chave estrangeira na tabela de associação
  // otherKey: 'serviceId', // Chave estrangeira na tabela de serviços
  // as: 'services', // Nome do relacionamento
});

SequelizeServiceTaskModel.belongsToMany(SequelizeMaintenanceModel, {
  through: MaintenanceServiceAssociation, // Modelo de associação
  // foreignKey: 'maintenanceId', // Chave estrangeira na tabela de associação
  // otherKey: 'serviceId', // Chave estrangeira na tabela de serviços
  // as: 'services', // Nome do relacionamento
});

export default SequelizeMaintenanceModel;