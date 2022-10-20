import { AppDataSource } from '../../data-source'
import { User } from '../../entities/user.entity'
import { Playlist } from '../../entities/playlist.entity'

const listPlaylistsUserService = async(id: string): Promise<Playlist[]> => {

    const userRepository = AppDataSource.getRepository(User)

    const user = await userRepository.findOne({
        where: {
            id: id
        },
        relations: {
            playlist: true
        }
    })

    return user!.playlist!

}

export default listPlaylistsUserService