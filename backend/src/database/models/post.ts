import { Model, DataTypes } from "sequelize";
import sequelize from "../sequelize";

export class Post extends Model {
  public id!: number;
  public title!: string;
  public content!: string;

  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: DataTypes.STRING,
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  },
  {
    sequelize,
    tableName: "posts"
  }
);
