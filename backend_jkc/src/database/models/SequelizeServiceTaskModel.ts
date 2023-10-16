import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.';

class SequelizeServiceTaskModel extends Model<InferAttributes<SequelizeServiceTaskModel>,
InferCreationAttributes<SequelizeServiceTaskModel>> {
  declare id: CreationOptional<number>;
  declare name: string;
  declare description: string;
}

SequelizeServiceTaskModel.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.STRING, allowNull: false },
}, {
  sequelize: db,
  modelName: 'services',
  timestamps: false,
  underscored: true,
});

export default SequelizeServiceTaskModel;
