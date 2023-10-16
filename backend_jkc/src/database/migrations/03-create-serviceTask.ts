import { Model, DataTypes, QueryInterface,  } from 'sequelize';

import { TServiceTask } from '../../interfaces/types/TServiceTask';

const up = (queryInterface: QueryInterface) => {
    return queryInterface.createTable<Model<TServiceTask>>('services',{
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true, 
        autoIncrement: true,
      },
      name: { type: DataTypes.STRING, allowNull: false, field: 'name' },
      description: { type: DataTypes.STRING, allowNull: false, field: 'description' },
    });

}

const down = (queryInterface: QueryInterface) => {
    return queryInterface.dropTable('services');
}

export default {
    up,
    down,
}