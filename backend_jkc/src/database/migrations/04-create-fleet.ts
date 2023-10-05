import { Model, DataTypes, QueryInterface,  } from 'sequelize';

import { TVehicle } from '../../interfaces/types/TVehicle';

const up = (queryInterface: QueryInterface) => {
    return queryInterface.createTable<Model<TVehicle>>('vehicles',{
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