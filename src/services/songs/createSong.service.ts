import { AppDataSource } from '../../data-source'
import { Song } from '../../entities/song.entity'
import { ISongRequest } from '../../interfaces/songs.interfaces'

const createSongService = async({artist, duration, name}: ISongRequest): Promise<Song> => {

    const songRepository = AppDataSource.getRepository(Song)

    const song = songRepository.create({
        artist,
        name,
        duration
    })
    await songRepository.save(song)

    return song

}

export default createSongService