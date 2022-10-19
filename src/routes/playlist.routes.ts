import { Router } from 'express';
import {
  createPlaylistControllers,
  listPlaylists,
  listPlaylistsUsersController,
} from '../controllers/playlist.controllers';
import ensureAuthMiddleware from '../middlewares/ensureAuth.middleware';
import ensureIsAdmMidleware from '../middlewares/ensureIsAdm.middlewares';

const playlistRoutes = Router();

playlistRoutes.post('', ensureAuthMiddleware, createPlaylistControllers);
playlistRoutes.get(
  '',
  ensureAuthMiddleware,
  ensureIsAdmMidleware,
  listPlaylists
);
playlistRoutes.get('/user', ensureAuthMiddleware, listPlaylistsUsersController)
export default playlistRoutes;
