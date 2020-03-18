import * as Yup from 'yup'
import User from '../models/User'

class UserController {
  async show(req, res) {
    const user = await User.findByPk(req.userId)

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

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      username: Yup.string().required(),
      birth_date: Yup.date().required(),
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

    const { user_type } = req.body

    if (user_type) {
      return res.status(400).json({
        error: 'Você não tem permissões para definir o tipo de usuário',
      })
    }

    Object.assign(req.body, { user_type: 'common', is_active: true })

    const { id, name, email, username } = await User.create(req.body)

    return res.json({ id, name, username, email })
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
      username: Yup.string(),
      oldPassword: Yup.string().min(6),
      birth_date: Yup.date(),
      password: Yup.string()
        .min(6)
        .when('oldPassword', (oldPassword, field) =>
          oldPassword ? field.required() : field
        ),
      confirmPassword: Yup.string().when('password', (password, field) =>
        password ? field.required().oneOf([Yup.ref('password')]) : field
      ),
    })

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Dados inválidos' })
    }

    const { email, oldPassword, username, user_type, is_active } = req.body

    const user = await User.findByPk(req.userId)

    if (email && email !== user.email) {
      const userEmailExists = await User.findOne({ where: { email } })

      if (userEmailExists) {
        return res
          .status(400)
          .json({ error: 'Já existe um usuário com o e-mail fornecido' })
      }
    }

    if (username && username !== user.username) {
      const usernameExists = await User.findOne({ where: { username } })

      if (usernameExists) {
        return res
          .status(400)
          .json({ error: 'Já existe um usuário com o username fornecido' })
      }
    }

    if (oldPassword && !(await user.checkPassword(oldPassword))) {
      return res.status(401).json({ error: 'Senha antiga inválida' })
    }

    if (user_type) {
      return res.status(401).json({
        error: 'Você não tem permissões para alterar o tipo de usuário.',
      })
    }

    if (is_active) {
      return res.status(401).json({
        error: 'Você não tem permissões para tornar um usuário inativo.',
      })
    }

    const { id, name } = await user.update(req.body)

    return res.json({ id, name, email, username })
  }
}

export default new UserController()
