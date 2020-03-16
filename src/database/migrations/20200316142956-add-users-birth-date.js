module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('users', 'birth_date', {
      type: Sequelize.DATEONLY,
      allowNull: false,
    })
  },

  down: queryInterface => {
    return queryInterface.removeColumn('users', 'birth_date')
  },
}
