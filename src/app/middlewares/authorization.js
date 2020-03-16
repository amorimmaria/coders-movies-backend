import jwt from 'jsonwebtoken'

import { promisify } from 'util'

import User from '../models/User'

import authConfig from '../../config/auth'

export default async (req, res, next) => {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    res.status(401).json({ error: 'Token não informado' })
  }

  const [, token] = authHeader.split(' ')

  try {
    const decoded = await promisify(jwt.verify)(token, authConfig.secret)

    req.userId = decoded.id

    const user = await User.findByPk(req.userId)

    if (user.user_type !== 'admin') {
      throw new Error(
        'Você não possui permissões para acessar essa funcionalidade'
      )
    }

    return next()
  } catch (err) {
    return res.status(401).json({ error: err.message })
  }
}
