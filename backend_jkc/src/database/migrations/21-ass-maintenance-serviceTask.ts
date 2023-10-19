import { Model, DataTypes, QueryInterface,  } from 'sequelize';

type TAss = {
  maintenanceId: number;
  serviceId: number;
}

const up = (queryInterface: QueryInterface) => {
  return queryInterface.createTable<Model<TAss>>('maintenance_service_association', {
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
  });
}

const down = (queryInterface: QueryInterface) => {
    return queryInterface.dropTable('maintenance_service_association');
}

export default {
    up,
    down,
}