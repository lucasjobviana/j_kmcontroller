import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.';

class SequelizeWorkShopModel extends Model<InferAttributes<SequelizeWorkShopModel>,
InferCreationAttributes<SequelizeWorkShopModel>> {
  declare id: CreationOptional<number>;
  declare name: string;
  declare description: string;
  declare fullAddress: string;
  declare phone: string;
}

SequelizeWorkShopModel.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.STRING, allowNull: false },
  fullAddress: { type: DataTypes.STRING, allowNull: false, field: 'full_address' },
  phone: { type: DataTypes.STRING, allowNull: false },
}, {
  sequelize: db,
  modelName: 'workshops',
  timestamps: false,
  underscored: true,
});

export default SequelizeWorkShopModel;
