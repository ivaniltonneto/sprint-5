import { AppDataSource } from '../../data-source'
import { Playlist } from '../../entities/playlist.entity'
import { PlaylistSong } from '../../entities/playlistSongs.entity'
import { AppError } from '../../errors/appError'

const listSongsInPlaylistService = async(idPlaylist: string): Promise<PlaylistSong[]> => {

    const playlistSongRepository = AppDataSource.getRepository(PlaylistSong)
    const playlistRepository = AppDataSource.getRepository(Playlist)

    const playlist = await playlistRepository.findOneBy({
        id: idPlaylist
    })

    if(!playlist){
        throw new AppError('Playlist not found', 404)
    }

    const playlistSong = await playlistSongRepository.find({
        where: {
            playlist: {
                id: playlist.id
            }
        },
        relations: {
            song: true
        }
    })

    return playlistSong

}

export default listSongsInPlaylistService