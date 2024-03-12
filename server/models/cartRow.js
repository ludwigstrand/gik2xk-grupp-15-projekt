module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    'cart_row',
    {
      amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    { underscored: true }
  );
};
