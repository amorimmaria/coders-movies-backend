import User from '../models/User'

class SingleUserController {
  async index(req, res) {
    /*
     * list with pagination
     */
    const user = await User.findByPk(req.params.id)

    const {
      name,
      email,
      username,
      user_type,
      is_active,
      birth_date,
      created_at,
    } = user

    return res.json({
      name,
      email,
      username,
      user_type,
      is_active,
      birth_date,
      created_at,
    })
  }
}

export default new SingleUserController()
