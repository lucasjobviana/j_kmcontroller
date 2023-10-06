import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.';

class SequelizePlaceModel extends Model<InferAttributes<SequelizePlaceModel>,
InferCreationAttributes<SequelizePlaceModel>> {
  declare id: CreationOptional<number>;
  declare name: string;
  declare description: string;
  declare fullAddress: string;
}

SequelizePlaceModel.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.STRING, allowNull: false },
  fullAddress: { type: DataTypes.STRING, allowNull: false },
}, {
  sequelize: db,
  modelName: 'places',
  timestamps: false,
  underscored: true,
});

export default SequelizePlaceModel;
