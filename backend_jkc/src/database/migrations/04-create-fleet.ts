import { Model, DataTypes, QueryInterface,  } from 'sequelize';

import { IVehicle } from '../../interfaces/IVehicle';

const up = (queryInterface: QueryInterface) => {
    return queryInterface.createTable<Model<IVehicle>>('vehicles',{
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: { type: DataTypes.STRING, allowNull: false, field: 'name' },
    });

}

const down = (queryInterface: QueryInterface) => {
    return queryInterface.dropTable('vehicles');
}

export default {
    up,
    down,
}