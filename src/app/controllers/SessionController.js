import jwt from 'jsonwebtoken'

import * as Yup from 'yup'
import User from '../models/User'

import authConfig from '../../config/auth'

class SessionController {
  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string().required(),
    })

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Dados inválidos' })
    }

    const { email, password } = req.body

    const user = await User.findOne({ where: { email } })

    if (!user) {
      return res.status(401).json({ error: 'Usuário não encontrado' })
    }

    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ error: 'A senha está incorreta' })
    }

    const { id, name, username, user_type, is_active } = user

    return res.json({
      user: {
        id,
        name,
        email,
        username,
        user_type,
        is_active,
      },

      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    })
  }
}

export default new SessionController()
