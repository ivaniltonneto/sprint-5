import { Router } from 'express'
import { createUserController, deleteUserController, listUsersController, updateUserController } from '../controllers/users.controllers'
import ensureAuthMiddleware from '../middlewares/ensureAuth.middleware'
import ensureIsAdmMiddleware from '../middlewares/ensureIsAdm.middleware'

const userRoutes = Router()

userRoutes.post('', createUserController)
userRoutes.get('', ensureAuthMiddleware, ensureIsAdmMiddleware, listUsersController)
userRoutes.patch('/:id', ensureAuthMiddleware, ensureIsAdmMiddleware, updateUserController)
userRoutes.delete('/:id', ensureAuthMiddleware, ensureIsAdmMiddleware, deleteUserController)

export default userRoutes