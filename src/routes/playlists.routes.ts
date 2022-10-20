import { Router } from 'express'
import { createPlaylistController, createSongInPlaylistController, listPlaylistsController, listPlaylistsUserController, listSongsInPlaylistController } from '../controllers/playlists.controllers'
import ensureAuthMiddleware from '../middlewares/ensureAuth.middleware'
import ensureIsAdmMiddleware from '../middlewares/ensureIsAdm.middleware'

const playlistRoutes = Router()

playlistRoutes.post('', ensureAuthMiddleware, createPlaylistController)
playlistRoutes.get('', ensureAuthMiddleware, ensureIsAdmMiddleware, listPlaylistsController)
playlistRoutes.get('/user', ensureAuthMiddleware, listPlaylistsUserController)
playlistRoutes.post('/:id/songs', ensureAuthMiddleware, createSongInPlaylistController)
playlistRoutes.get('/:id/songs', ensureAuthMiddleware, listSongsInPlaylistController)

export default playlistRoutes