import { Model, DataTypes, QueryInterface,  } from 'sequelize';

import { TMaintenance } from '../../interfaces';

const up = (queryInterface: QueryInterface) => {
  return queryInterface.createTable<Model<TMaintenance>>('maintenances',{
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
        model: 'workshops',
        key: 'id',
      }, 
    },
    vehicleId: { type: DataTypes.INTEGER, allowNull: false, field: 'vehicle_id',
      references: {
        model: 'vehicles', 
        key: 'id',
      }, 
    },  
    });

}

const down = (queryInterface: QueryInterface) => {
    return queryInterface.dropTable('maintenances');
}

export default {
    up,
    down,
}