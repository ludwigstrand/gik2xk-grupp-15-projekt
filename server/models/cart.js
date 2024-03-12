module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "cart",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      paid: {
        type: DataTypes.boolean,
        allowNull: false,
      }
    },
    { underscored: true }
  );
};
