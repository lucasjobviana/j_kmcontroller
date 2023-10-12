import { Model, DataTypes, QueryInterface,  } from 'sequelize';

import { TPlace } from '../../interfaces/types/TPlace';

const up = (queryInterface: QueryInterface) => {
    return queryInterface.createTable<Model<TPlace>>('places',{
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: { type: DataTypes.STRING, allowNull: false, field: 'name' },
      description: { type: DataTypes.STRING, allowNull: false, field: 'description' },
      fullAddress: { type: DataTypes.STRING, allowNull: false, field: 'full_address' },
    });

}

const down = (queryInterface: QueryInterface) => {
    return queryInterface.dropTable('places');
}

export default {
    up,
    down,
}