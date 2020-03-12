import { Router } from 'express'

import AdmUserController from './app/controllers/AdmUserController'
import UserController from './app/controllers/UserController'
import SessionController from './app/controllers/SessionController'

import authenticationMiddleware from './app/middlewares/authentication'
import authorizationMiddleware from './app/middlewares/authorization'

const routes = new Router()

routes.post('/users', UserController.store)

routes.post('/sessions', SessionController.store)

routes.use(authenticationMiddleware)

routes.put('/users', UserController.update)

routes.use(authorizationMiddleware)

routes.post('/admusers', AdmUserController.store)
routes.put('/admusers/:id', AdmUserController.update)
routes.delete('/admusers/:id', AdmUserController.delete)

export default routes
