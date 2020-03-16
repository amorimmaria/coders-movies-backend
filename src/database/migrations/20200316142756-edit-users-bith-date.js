module.exports = {
  up: queryInterface => {
    return queryInterface.removeColumn('users', 'birth_date')
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('users', 'birth_date', {
      type: Sequelize.DATE,
      allowNull: false,
    })
  },
}
