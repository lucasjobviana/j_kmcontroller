import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.';

class SequelizeFleetModel extends Model<InferAttributes<SequelizeFleetModel>,
InferCreationAttributes<SequelizeFleetModel>> {
  declare id: CreationOptional<number>;
  declare name: string;
  declare licensePlate: string;
}

SequelizeFleetModel.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: { type: DataTypes.STRING, allowNull: false },
  licensePlate: { type: DataTypes.STRING, allowNull: false },
}, {
  sequelize: db,
  modelName: 'vehicles',
  timestamps: false,
  underscored: true,
});

export default SequelizeFleetModel;
