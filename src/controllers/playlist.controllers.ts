import { Request, Response } from "express"
import createPlayListService from "../services/playlist/CreatePlaylist.service"
import listPlaylistsService from "../services/playlist/listPlaylist.service"
import listPlaylistUserService from "../services/playlist/listPlaylistUser.service"

export const createPlaylistControllers = async (req: Request, res: Response) =>{

    const name: string = req.body.name
    const id = req.user.id
    const createPlaylist = await createPlayListService(name, id)
    return res.status(201).json(createPlaylist)
}

export const listPlaylists = async (req: Request, res:Response) => {
    
    const playlist = await listPlaylistsService()
    return res.json(playlist)
} 

export const listPlaylistsUsersController = async (req: Request, res:Response) => {

    const id = req.user.id
    const playlist = await listPlaylistUserService(id)
    return res.status(200).json(playlist)
}