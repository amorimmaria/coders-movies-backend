module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('users', 'user_type', {
      type: Sequelize.STRING,
      allowNull: false,
    })
  },

  down: queryInterface => {
    return queryInterface.removeColumn('users', 'user_type')
  },
}
