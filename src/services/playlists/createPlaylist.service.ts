import { AppDataSource } from '../../data-source'
import { Playlist } from '../../entities/playlist.entity'
import { User } from '../../entities/user.entity'
import { AppError } from '../../errors/appError'

const createPlaylistService = async(name: string, id: string): Promise<Playlist> => {

    const userRepository = AppDataSource.getRepository(User)
    const playlistRepository = AppDataSource.getRepository(Playlist)

    const user = await userRepository.findOneBy({ id })//Buscando o usuário

    const playlist = playlistRepository.create({
        name,
        user: user! //para burla a verificação que o usuario existe eu garanto "!" que ele exista.
    })//criando a playlist
    await playlistRepository.save(playlist)//salvando a playlist

    return playlist

}

export default createPlaylistService