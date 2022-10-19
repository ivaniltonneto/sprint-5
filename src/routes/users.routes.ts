import { Router } from 'express'
import { createUserController, listUsersController, upadateUserController } from '../controllers/users.controllers'
import ensureAuthMiddleware from '../middlewares/ensureAuth.middleware'
import ensureIsAdmMidleware from '../middlewares/ensureIsAdm.middlewares'

const userRoutes = Router()

userRoutes.post('', createUserController)
userRoutes.get('', ensureAuthMiddleware, ensureIsAdmMidleware, listUsersController)
userRoutes.patch('/:id', ensureAuthMiddleware, ensureIsAdmMidleware, upadateUserController)

export default userRoutes