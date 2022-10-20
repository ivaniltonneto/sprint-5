import { AppDataSource } from '../../data-source'
import { Playlist } from '../../entities/playlist.entity'

const listPlaylistsService = async(): Promise<Playlist[]> => {

    const playlistRepository = AppDataSource.getRepository(Playlist)

    const playlists = await playlistRepository.find({
        relations: {
            user: true
        }//tras todos os dados realacionados a essas playlist o "relations"
    })

    return playlists

}

export default listPlaylistsService