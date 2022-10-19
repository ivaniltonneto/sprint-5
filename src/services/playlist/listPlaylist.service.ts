import { AppDataSource } from "../../data-source"
import Playlist from "../../entities/playlists.entity"


const listPlaylistsService = async (): Promise<Playlist[]> =>{
    
    const playlistsRepository = AppDataSource.getRepository(Playlist)

    const playlists = await playlistsRepository.find({
        relations:{
            user: true
        }//tras todos os dados realacionados a essas playlist
    })

    return playlists
}

export default listPlaylistsService