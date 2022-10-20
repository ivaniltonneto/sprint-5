import { AppDataSource } from '../../data-source'
import { Playlist } from '../../entities/playlist.entity'
import { Song } from '../../entities/song.entity'
import { PlaylistSong } from '../../entities/playlistSongs.entity'
import { AppError } from '../../errors/appError'

const createSongInPlaylistService = async(idSong: string, idPlaylist: string): Promise<void> => {

    const playlistSongRepository = AppDataSource.getRepository(PlaylistSong)
    const songRepository = AppDataSource.getRepository(Song)
    const playlistRepository = AppDataSource.getRepository(Playlist)

    const playlist = await playlistRepository.findOneBy({
        id: idPlaylist
    })

    const song = await songRepository.findOneBy({
        id: idSong
    })

    if(!playlist || !song){//verificando se a playlist ou a musica existe
        throw new AppError('Song or playlist not found', 404)
    }

    await playlistSongRepository.save({
        playlist,
        song
    })

}

export default createSongInPlaylistService