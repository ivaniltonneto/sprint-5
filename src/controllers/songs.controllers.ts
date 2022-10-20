import { Request, Response } from 'express'
import { ISongRequest } from '../interfaces/songs.interfaces'
import createSongService from '../services/songs/createSong.service'
import listSongsService from '../services/songs/listSongs.service'

const createSongsController = async (req: Request, res: Response) => {

    const data: ISongRequest = req.body
    const createdSong = await createSongService(data)
    return res.status(201).json(createdSong)

}

const listSongsController = async (req: Request, res: Response) => {

    const songs = await listSongsService()
    return res.json(songs)

}

export { createSongsController, listSongsController }