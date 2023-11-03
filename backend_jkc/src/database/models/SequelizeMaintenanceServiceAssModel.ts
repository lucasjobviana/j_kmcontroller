import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.';
import SequelizeServiceTaskModel from './SequelizeServiceTaskModel';
import SequelizeMaintenanceModel from './SequelizeMaintenanceModel';

class MaintenanceServiceAssociation extends Model<InferAttributes<MaintenanceServiceAssociation>,
InferCreationAttributes<MaintenanceServiceAssociation>> {
  // declare maintenanceId: number;
  // declare serviceId: number;
}

MaintenanceServiceAssociation.init({
  maintenanceId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    references: {
      model: 'maintenances', // Nome da tabela de manutenções
      key: 'id',
    },
  },
  serviceId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    references: {
      model: 'services', // Nome da tabela de serviços
      key: 'id',
    },
  },
}, {
  sequelize: db,
  modelName: 'maintenance_service_association',
  timestamps: false,
  underscored: true,
});

// SequelizeServiceTaskModel.belongsToMany(SequelizeMaintenanceModel, {
//   through: MaintenanceServiceAssociation, // Modelo de associação
//   foreignKey: 'serviceId', // Chave estrangeira na tabela de associação
//   otherKey: 'maintenanceId', // Chave estrangeira na tabela de manutenções 
//   as: 'maintenances', // Nome do relacionamento
// }); 

// SequelizeMaintenanceModel.belongsToMany(SequelizeServiceTaskModel, {
//   through: MaintenanceServiceAssociation, // Modelo de associação
//   foreignKey: 'maintenanceId', // Chave estrangeira na tabela de associação
//   otherKey: 'serviceId', // Chave estrangeira na tabela de serviços
//   as: 'services', // Nome do relacionamento
// });

export default MaintenanceServiceAssociation;

// import { DataTypes, Model } from 'sequelize';
// import db from '.';  

// class MaintenanceServiceAssociation extends Model {}

// MaintenanceServiceAssociation.init(
//   {
//     maintenanceId: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       references: {
//         model: 'maintenances', // Nome da tabela de manutenções
//         key: 'id',
//       },
//     },
//     serviceId: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       references: {
//         model: 'services', // Nome da tabela de serviços
//         key: 'id',
//       },
//     },
//   },
//   {
//     sequelize: db, // Use a instância do Sequelize
//     modelName: 'maintenance_service_association', // Nome da tabela de associação
//     timestamps: true,  
//     underscored: true,
//   }
// );

// export default MaintenanceServiceAssociation;
