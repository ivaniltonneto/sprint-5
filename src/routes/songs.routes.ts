import { Router } from 'express'
import { createSongsController, listSongsController } from '../controllers/songs.controllers'
import ensureAuthMiddleware from '../middlewares/ensureAuth.middleware'
import ensureIsAdmMiddleware from '../middlewares/ensureIsAdm.middleware'

const songsRoutes = Router()

songsRoutes.post('', ensureAuthMiddleware, ensureIsAdmMiddleware, createSongsController)
songsRoutes.get('', listSongsController)

export default songsRoutes