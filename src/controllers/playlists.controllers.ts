import { Request, Response } from 'express'
import createPlaylistService from '../services/playlists/createPlaylist.service'
import createSongInPlaylistService from '../services/playlists/createSongInPlaylist.service'
import listPlaylistsService from '../services/playlists/listPlaylists.service'
import listPlaylistsUserService from '../services/playlists/listPlaylistsUser.service'
import listSongsInPlaylistService from '../services/playlists/listSongsInPlaylist.service'

export const createPlaylistController = async(req: Request, res: Response) => {

    const name = req.body.name
    const id = req.user.id
    const createdPlaylist = await createPlaylistService(name, id)
    return res.status(201).json(createdPlaylist)

}

export const listPlaylistsController = async(req: Request, res: Response) => {

    const playlists = await listPlaylistsService()
    return res.json(playlists)

}

export const listPlaylistsUserController = async(req: Request, res: Response) => {

    const id = req.user.id
    const playlists = await listPlaylistsUserService(id)
    return res.json(playlists)

}

export const createSongInPlaylistController = async (req: Request, res: Response) => {

    const idPlaylist = req.params.id
    const idSong = req.body.idSong
    await createSongInPlaylistService(idSong, idPlaylist)//Tipo void pois o usuario só precisa saber que deu certo e não os dados
    return res.status(201).json({
        message: 'Song added in playlist'
    })

}

export const listSongsInPlaylistController = async (req: Request, res: Response) => {

    const idPlaylist = req.params.id
    const songsPlaylist = await listSongsInPlaylistService(idPlaylist)
    return res.json(songsPlaylist)

}

