import { AppDataSource } from "../../data-source"
import Playlist from "../../entities/playlists.entity"
import { User } from "../../entities/user.entity"

const listPlaylistUserService =async (id:string): Promise<Playlist[]> => {
    
    const userRepository = AppDataSource.getRepository(User)

    const user = await userRepository.findOne({
        where: {
            id
        },
        relations: {
            playlist: true
        }
    })

    return user!.playlist!
}

export default listPlaylistUserService