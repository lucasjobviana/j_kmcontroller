import { Model, DataTypes, QueryInterface,  } from 'sequelize';

import { TWorkShop } from '../../interfaces/types/TWorkShop';

const up = (queryInterface: QueryInterface) => {
  return queryInterface.createTable<Model<TWorkShop>>('workshops',{
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: { type: DataTypes.STRING, allowNull: false, field: 'name' },
    description: { type: DataTypes.STRING, allowNull: false, field: 'description' },
    fullAddress: { type: DataTypes.STRING, allowNull: false, field: 'full_address' },
    phone: { type: DataTypes.STRING, allowNull: false },
  });

};

const down = (queryInterface: QueryInterface) => {
  return queryInterface.dropTable('workshops');
};

export default {
  up,
  down,
};