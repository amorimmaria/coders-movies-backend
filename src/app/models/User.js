import Sequelize, { Model } from 'sequelize'

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        username: Sequelize.STRING,
        birth_date: Sequelize.DATE,
        password_hash: Sequelize.STRING,
      },
      {
        sequelize,
      }
    )
  }
}

export default User
