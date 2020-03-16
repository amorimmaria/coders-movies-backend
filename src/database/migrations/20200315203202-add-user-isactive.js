module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('users', 'is_active', {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    })
  },

  down: queryInterface => {
    return queryInterface.removeColumn('users', 'is_active')
  },
}
