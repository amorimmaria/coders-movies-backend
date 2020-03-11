import * as Yup from 'yup'
import User from '../models/User'

class AdmUserController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      username: Yup.string().required(),
      birth_date: Yup.date().required(),
      user_type: Yup.string().required(),
      password: Yup.string()
        .required()
        .min(6),
    })

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Dados inválidos' })
    }

    const userEmailExists = await User.findOne({
      where: { email: req.body.email },
    })

    if (userEmailExists) {
      return res
        .status(400)
        .json({ error: 'O e-mail digitado já existe na nossa base de dados' })
    }

    const usernameExists = await User.findOne({
      where: { username: req.body.username },
    })

    if (usernameExists) {
      return res
        .status(400)
        .json({ error: 'O username digitado já existe na nossa base de dados' })
    }

    const { id, name, email, username } = await User.create(req.body)

    return res.json({ id, name, username, email })
  }
}

export default new AdmUserController()
