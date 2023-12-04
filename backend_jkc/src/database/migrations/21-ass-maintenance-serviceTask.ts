import { Model, DataTypes, QueryInterface,  } from 'sequelize';

type TAss = {
  maintenanceId: number;
  serviceId: number;
  description: string;
  totalPrice: number;
}

const up = (queryInterface: QueryInterface) => {
  return queryInterface.createTable<Model<TAss>>('maintenance_service_associations', {
    maintenanceId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'maintenance_id',
      references: {
        model: 'maintenances',
        key: 'id',
      },
    },
    serviceId: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      primaryKey:true ,
      field: 'service_id',
      references: {
        model: 'services',
        key: 'id',
      }, 
    }, 
    description: { type: DataTypes.STRING, allowNull: true, field: 'description' },
    totalPrice: { type: DataTypes.FLOAT, allowNull: true, field: 'total_price' },
  });
};

const down = (queryInterface: QueryInterface) => {
  return queryInterface.dropTable('maintenance_service_associations');
};

export default {
  up,
  down,
};